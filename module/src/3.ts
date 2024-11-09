// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1

const countWordOccurrences = (sentence: string, word: string) => {
  let newSentence = sentence.toLowerCase();
  let newWord = word.toLowerCase();
  const result = newSentence.split(newWord).length - 1;
  //   why length - 1? split method create boundary between the rest of the sentence and perameter. for example
  //  "i love type type type type" it will be splited as ['i love ', 'type', 'type','type' ,'type']
  // so the length of the array is now 5 and word occurances are 4 and rest of the senctence occurance is 1;
  // so 5(total length) - 1 (non matching string) = 4
  console.log(result);
  //   console.log("te");
};
countWordOccurrences("i love type type type type", "type");
