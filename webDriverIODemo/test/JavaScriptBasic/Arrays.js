//**Declarations

// ** declare size then adding
var marks = new Array(6);
marks[0]=1;
console.log(marks);


var marks = new Array(2,6,66,55,34,67,76);
console.log(marks);

// another way to declare array 
var marks = [2,6,66,55,34,67,76];
console.log(marks);
//add element after last index
marks.push(90);
console.log(marks);
// delete from last index
marks.pop();
console.log(marks);

// check indexof present element
console.log(marks.indexOf(66));
//check element present and return boolean
console.log(marks.includes(34));



