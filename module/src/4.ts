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
interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  if (shape.shape === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  } else {
    return -1;
  }
}

const circle: Circle = { shape: "circle", radius: 2 };
const rectangle: Rectangle = { shape: "rectangle", width: 2, height: 5 };
console.log(calculateShapeArea(circle), "\n", calculateShapeArea(rectangle));
