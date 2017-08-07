// Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!
let images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

let heights = images.map(function(image){
  return image.height;
});
heights;

// Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map((trip)=>{
  return trip.distance / trip.time;
});
speeds;
// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.
//
// Example:
//
// var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
//
// Hint:
//
// Remember that you can access a property on an object by using square bracket notation. For example...
//
// var person = { name: 'Bill' };
// person['name'] // returns 'Bill'

var paints = [
  { color: 'red', year: 2014 },
  { color: 'blue', year: 2013 },
  { color: 'green', year: 2015 },
];
function pluck(arr, prop) {
  return arr.map(function(i) {
  return i[prop];
  });
  }
pluck(paints, 'color');
