const sum = (a, b) => {
  console.log(a + b);
};

export default sum;

export const sub = (a, b) => {
  console.log(a - b);
};
export const mult = (a, b) => {
  console.log(a * b);
};
export const div = (a, b) => {
  console.log(a / b);
};

// module.exports = { sum, sub, mult, div };

// module system
// 1. named export - multiple
// 2. default export - single, no need to mention name while importing

// common js system
