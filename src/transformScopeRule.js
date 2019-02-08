import postcss from 'postcss';
import {escapeSelector} from './util';

export default function transformScopeRule(scopeRule) {
  const nodes = [];
  const vars = [];
  const varsRule = postcss.rule({selector: scopeRule.params});

  scopeRule.walkRules(rule => {
    const selector = escapeSelector(rule.selector);
    rule.warkDecls(decl => {
      const varName = getVarnameFromDecl(decl);
    });
  });
}

function getVarnameFromDecl(decl) {
  const selector = escapeSelector(decl.parent);
  return `--${selector}-${decl.prop}`;
}
