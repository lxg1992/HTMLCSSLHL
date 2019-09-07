const instructorWithLongestName = function(instructors) {
  let iLength = 0;
  let iObject;
  for (let i =0; i < instructors.length; i++){
    if (instructors[i].name.length > iLength){
      iLength = instructors[i].name.length;
      iObject = instructors[i];
    }
  }
  return iObject;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));