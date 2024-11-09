// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

type Person = { name: string; age: number; email: string };

function validateKeys<T extends Person>(obj: T, keys: (keyof T)[]): boolean {
  for (const i of keys) {
    if (!(i in obj)) return false;
  }
  //   console.log(ob);
  return true;
}
// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
