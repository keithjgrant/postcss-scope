export function escapeSelector(selector) {
  return selector.replace(/([\.#\>\+\~])/g, '\\$1').replace(/\s+/g, '-');
}
