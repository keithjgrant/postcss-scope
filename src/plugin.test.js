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
