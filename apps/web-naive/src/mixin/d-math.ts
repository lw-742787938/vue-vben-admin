import * as math from 'mathjs';

// 加
export const add = (
  num1: null | number | undefined,
  num2: null | number | undefined,
) => {
  return math
    .add(math.bignumber(num1 || 0), math.bignumber(num2 || 0))
    .toNumber();
};

// 减
export const subtract = (
  num1: null | number | undefined,
  num2: null | number | undefined,
) => {
  return math
    .subtract(math.bignumber(num1 || 0), math.bignumber(num2 || 0))
    .toNumber();
};

// 乘
export const multiply = (
  num1: null | number | undefined,
  num2: null | number | undefined,
) => {
  return math
    .multiply(math.bignumber(num1 || 0), math.bignumber(num2 || 0))
    .toNumber();
};

// 除
export const divide = (
  num1: null | number | undefined,
  num2: null | number | undefined,
) => {
  return math
    .divide(math.bignumber(num1 || 0), math.bignumber(num2 || 0))
    .toNumber();
};

// 累加
export const large_add = (...numbers: [null | number | undefined]) => {
  let total = 0;
  for (const number of numbers) {
    total = math
      .add(math.bignumber(total), math.bignumber(number || 0))
      .toNumber();
  }
  return total;
};
