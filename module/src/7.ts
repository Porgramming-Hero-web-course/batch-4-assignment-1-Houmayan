// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge() {
    return 2024 - this.year;
  }
}

const carAge = new Car("Honda", "Civic", 2020);

console.log(carAge.getCarAge());
