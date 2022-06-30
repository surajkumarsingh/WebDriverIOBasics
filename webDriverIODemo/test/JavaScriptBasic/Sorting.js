var fruits =['banana','apple','lichi','pineapple', 'mango']

console.log('Before Sorting :'+ fruits);
// works only for string array
console.log('After Sorting :'+ fruits.sort());
console.log('Revers to descending :'+fruits.reverse());


var num =[22,4,5,09,45,20,56];
console.log(num.sort((a,b)=>a-b))
console.log(num.reverse())