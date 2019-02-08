import postcss from 'postcss';
import transformScopeRule from './transformScopeRule';

const DEFAULT_OPTIONS = {};

export default postcss.plugin('postcss-scope', opts => {
  return function(root) {
    opts = Object.assign(DEFAULT_OPTIONS, opts);

    root.walkAtRules('scope', rule => {
      transformScopeRule(rule, opts);
    });
  };
});
