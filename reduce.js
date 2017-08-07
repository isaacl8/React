// Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
var totalDistance = trips.reduce((count,trip) => {
    return count + trip.distance;
}, 0);

// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce((count, desk) => {
    if (desk.type === 'sitting') ++count.sitting;
    if (desk.type === 'standing') ++count.standing;
    return count;
}, { sitting: 0, standing: 0 });
deskTypes;

// Write a function called 'unique' that will remove all the duplicate values from an array.
function unique(array) {

  return array.reduce(function(newArr, number) {
      var found = !newArr.find(function(num) {
          return num == number
      });
      if (found) {
         newArr.push(number);
      }
      return newArr;
  }, []);
  
}

var numbers = [1, 1, 2, 3, 4, 4];

unique(numbers);
