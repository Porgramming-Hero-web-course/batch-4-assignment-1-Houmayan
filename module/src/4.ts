// class Shape {
//     getarea(): number {
//       return 0;
//     }
//   }

//   class Cirle extends Shape {
//     radius: number;
//     constructor(radius: number) {
//       super();
//       this.radius = radius;
//     }

//     getarea(): number {
//       return Math.PI * this.radius;
//     }
//   }

//   class Rectangle extends Shape {
//     height: number;
//     width: number;

//     constructor(height: number, width: number) {
//       super();
//       this.height = height;
//       this.width = width;
//     }

//     getarea(): number {
//       return this.height * this.width;
//     }
//   }

//   const getAreaResult = (param: Shape) => {
//     console.log(param.getarea());
//   };

//   const circleResult = new Cirle(20);
//   getAreaResult(circleResult);

// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
type Area = {
  shape: "circle" | "rect";
  radius: number;
  width: number;
  height: number;
};

const getAreaCircle: Area = (shape: "circle", radius, width, height) => {
  if (shape === "circle") {
    console.log(Math.PI * radius * radius);
  }
};

getAreaCircle("circle", 5);
