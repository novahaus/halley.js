export default selector => (typeof selector === 'string') ? document.querySelector(selector) : selector;

export const all = selector => (typeof selector === 'object') ? selector : Array.from(document.querySelectorAll(selector));