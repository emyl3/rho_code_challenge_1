var arr = [3, 4, 6, 0];

// 1 - Add the value 32 to the end of the following array.
arr.push(32);

// 2 - Remove the values 4 & 6 from arr using the splice method.
arr.splice(1, 2);

// 3 - Use the sort method to order each array value from smallest to largest.
arr.sort();

/*
4 - Use the map method to halve the value of each value in the array.
Assign the result to a new array called newArr. Console.log the new array.
*/
var newArr = arr.map(function(num) {
  return num / 2;
});

console.log('The value of the newArr: ' + newArr);
