// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => {
    return number > 50;
});

// Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;

var filteredUsers = users.filter((user) =>{
  return user.admin !== false;
});

// Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

function reject(array, iteratorFunction) {
    //Get all of the items we want to get rid of and assign to rejects.
    var rejects = array.filter(iteratorFunction);

    //Filter through the array again, only return true on elements that are NOT in rejects.
      return array.filter(function(el){
        return !rejects.includes(el);
    });
}
