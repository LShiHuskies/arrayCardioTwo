const people = [
  { name: 'Wes', year: 1998 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav good ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


// Some and Every Checks
// Array prototype.some() // is at least one person 197

const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
})

// console.log({isAdult});

const allAdults = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
})

// Array.prototype.find();
// const comment = comments.find(function(comment) {
//   if(comment.id === 823423) {
//     return true;
//   }
// });

const comment = comments.find(comment => comment.id === 823423)

// Array.protoype.findIndex()
// find the comment with this id
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);


console.log(index);

comments.splice(index, 1);
console.table(comments);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];


console.table(newComments);
