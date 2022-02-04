
const pointA = new Point(3, 5);

const pointB = new Point(6, 1);

const pointC = new Point(7, 1);

const pointD = new Point(3, 6);

const pointE = new Point(1, 1);

const pointF = new Point(-2, 1);


const distance = MathC.calculateDistance(pointA, pointB);

const medianPoint = MathC.medianPoint(pointA, pointB);

const distanceFromOrigin = MathC.distanceFromOrigin(pointA);

const nearest = MathC.nearestPoint(pointA, pointB, pointC, pointD, pointE, pointF);


console.log(distance);

console.log(medianPoint);


const distanceFromB = pointA.distanceFrom(pointB);

console.log(distanceFromB);

const distanceFromOriginOfA = pointA.distanceFromOrigin();

console.log(distanceFromOriginOfA);

const medianFromB = pointA.medianPointFromPoint(pointB);

console.log(medianFromB);

const nearestToA = pointA.nearestPoint(pointB, pointC, pointD, pointE);

console.log(nearestToA);


// let bev2 = new Bevanda(name: "chinotto", insertionDate: new Date())