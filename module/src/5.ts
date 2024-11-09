// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
// constraint => keyof
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const propertyName = {
  HouseName: "Blue Mansion",
};
const result1 = getProperty(propertyName, "HouseName");

console.log(result1);
