function helper() {
  return 'let me help you with that';
}

export function getSomething() {
  return new Promise(resolve => resolve(helper()));
}

export default {
  getSomething,
};
