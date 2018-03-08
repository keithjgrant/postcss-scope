import postcss from 'postcss';
import transformScopeRule from './transformScopeRule';

const DEFAULT_OPTIONS = {
  importPaths: ['node_modules'],
  importPromise: [],
  importCache: {},
};

function resolveImport(opts) {
  return (id, cwd) => {
    return resolve(id, {cwd, readFile: true, cache: opts.importCache});
  };
}

export default postcss.plugin('postcss-kolache', opts => {
  return function(root, result) {
    opts = Object.assign(DEFAULT_OPTIONS, opts);
    opts.importResolve = Object(opts).resolve || resolveImport(opts);
    opts.result = result;

    const promises = [];

    root.walkAtRules('scope', rule => {
      promises.push(transformScopeRule(rule, opts));
    });

    return Promise.all(promises);
  };
});
