### Question

### \*\*The significance of union and intersection types in Typescript.

\*\*

# Answer : 12th Nov, 2024

- **- Union:**
  in TypeScript when we have the freedom to use only one type from various types we can easily use through it.

```
interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle; ( | known as Union )
```

Between Circle and Rectangle we can use either one of them by passing through a function. Which made our codebase clean and reusable

- **Intersection**
  When we want to combine many types into a single types we do use intersection (&).

```
interface Person {
    name: string;
    age: number;
}

interface Developer {
    skills: string[];
    experience: number;
}

type DeveloperPerson = Person & Developer;

const developerPerson: DeveloperPerson = {
    name: 'Alice',
    age: 30,
    skills: ['TypeScript', 'JavaScript', 'React'],
    experience: 5
};
```

in DeveloperPerson we combined two interface into a single type which can help us combine complex types easily.
