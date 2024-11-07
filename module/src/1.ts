// sum of array

const sumOfArray = (num: number[]): number => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  return sum;
};

const result = sumOfArray([1, 2, 3, 4, 5, 6]);
console.log(result);
