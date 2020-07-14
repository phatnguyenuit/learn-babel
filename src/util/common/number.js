import { sum, subtract } from 'lib/math';

export const commonPlus = (num1, num2) => {
  const result = sum(num1, num2);
  console.log(`commonPlus: ${num1} + ${num2} = ${result}`);
  return result;
};

export const commonSubtract = (num1, num2) => {
  const result = subtract(num1, num2);
  console.log(`commonSubtract: ${num1} - ${num2} = ${result}`);
  return result;
};
