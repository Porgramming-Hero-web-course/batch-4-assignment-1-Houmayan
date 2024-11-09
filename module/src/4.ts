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
