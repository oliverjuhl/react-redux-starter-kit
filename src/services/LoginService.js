export default {
  getSomething
};

export function getSomething() {
  return new Promise(resolve => resolve(helper()));
}

function helper() {
  return 'let me help you with that';
}