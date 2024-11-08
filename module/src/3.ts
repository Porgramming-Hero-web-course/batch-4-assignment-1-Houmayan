// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1

const countWordOccurrences = (sentence: string, word: string) => {
  let newSentence = sentence.toLowerCase();
  let newWord = word.toLowerCase();
  const result = newSentence.split(newWord).length - 1;
  console.log(result);
  //   console.log("te");
};
countWordOccurrences("i love type type type type", "type");
