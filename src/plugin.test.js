import postcss from 'postcss';
import plugin from './plugin';

function run(input, output, opts) {
  if (typeof opts === 'undefined') {
    opts = {};
  }

  return postcss([plugin(opts)])
    .process(input, {from: undefined})
    .then(result => {
      expect(result.css.trim()).toEqual(output.trim());
      expect(result.warnings().length).toBe(0);
    });
}

it('smoke test', () => {
  return run(
    `
.foo {
  color: black;
}
  `,
    `
.foo {
  color: black;
}
  `
  );
});

it.skip('should transform scope', () => {
  return run(
    `
@scope .alpha {
  h4 {
    color: green;
    font-size: 2em;
  }
}
  `,
    `
.alpha {
  --\[h4\]-color: green;
  --\[h4\]-font-size: 2em;
}

.alpha h4 {
  color: var(--\[h4\]-color);
  font-size: var(--\[h4\]-font-size);
}
  `
  );
});
