const qs = (selector: string, scope: Document | HTMLElement = document) => {
  if (!selector) throw 'no selector';
  return scope.querySelector(selector);
};

export { qs };
