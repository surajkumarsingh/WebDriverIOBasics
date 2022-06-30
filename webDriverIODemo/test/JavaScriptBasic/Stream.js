var marks = [2, 6, 66, 55, 34, 67, 76];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(sum);

// sum can be performed with Reduce function
// take argument 1st empty variable, 2nd varible where value will be iterated ** 0 is initial value of sum

let sum2 = marks.reduce((sum, marks) => sum + marks, 0);
console.log(sum2);

// Use of Filter function
var evenMarks = new Array();
for (let i = 0; i < marks.length; i++) {
    if (marks[i] % 2 == 0) {
        evenMarks.push(marks[i]);
    }
}
console.log(evenMarks);
// doing same as above forLoop
var filterMarks = marks.filter((marks) => marks % 2 == 0);
console.log(filterMarks);

var mapMarks=new Array();
for (let i = 0; i < marks.length; i++) {
    mapMarks.push( marks[i] * 3);
}
console.log(mapMarks);
// doing same as above for Loop
var mapMarks = marks.map((marks) => marks * 3);
console.log(mapMarks);

/**
 * Reduce return single value of after operation
 * 
 * Filter return Array after applied condition operation
 * 
 * Map return Array after given operation
 * 
 */