{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (num: number[]): number[] => {
    let newArr = num.sort();
    let finalArr: number[] = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== newArr[i + 1]) {
        finalArr.push(newArr[i]);
      }
    }
    return finalArr;
  };
  const result = removeDuplicates([2, 2, 3, 3, 4, 5, 1, 6]);
  console.log(result);
}
