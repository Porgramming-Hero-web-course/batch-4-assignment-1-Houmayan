// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(props: Profile, updated: Partial<Profile>): Profile {
  return { ...props, ...updated };
}
const previousProfile: Profile = {
  name: "Houmayan",
  age: 26,
  email: "alichy101@gmail.com",
};

const updateProfileResult = updateProfile(previousProfile, {
  email: "houmayanr@gmail.com",
});
console.log(updateProfileResult);
