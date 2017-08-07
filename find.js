// Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find((user) => {
  return user.admin === true;
});
var admin;
// Find the account with a balance of 12 and assign it to the variable 'account'.
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find((account) => {
  return account.balance === 12;
});
var account;

// The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(myArray, criteria) {

 var criteriaKey = Object.keys(criteria);

 return myArray.find(item => {
  return item[criteriaKey] === criteria[criteriaKey];
  });
}

var result = findWhere(ladders, { height: 25 });
