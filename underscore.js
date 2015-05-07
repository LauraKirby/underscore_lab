module.exports = { 
// PUT YOUR CODE HERE!!!
//Homework for underscore lab 2. 
// -- this function works but not how we were supposed to set it up. 
// var _ = {
//   arrayProp: [1, 2, 3],
//   each: function(arrayOne){
//   for (var i = 0; i < arrayOne.length; i++) {
//   var current = arrayOne[i];
//   alert(current);
//   }
// }
// };
// _.each(_.arrayProp);

//COMPACT -- this function works but not how we were supposed to set it up. 
// var _ = {
// 	arrayProp: [1, "hello", undefined, 3, undefined], 
// 	compact: function(arrayOne) {
// 		var arrayA = []; 
// 		for (var i = 0; i < arrayOne.length; i++) {
// 			if (arrayOne[i] !== undefined) {
// 				arrayA.push(arrayOne[i]); 
// 			}
// 		}
//       return arrayA; 
// 	}
// };
// console.log(_.compact(_.arrayProp));


//MAP -- here i began setting up the functions correctly
	map: function(num, func){
		if(!func){
			return "you need to pass in a function"
			//this isn't the best way to give error messages
			//this is an ex to show the use case for another 'it' statement wi test
		}
		//make a new result array 
		var outputArray = [];
		//loop through array
		for (var i = 0; i < num.length; i++){
			//apply func to each value in arr
			var value= func(num[i]);
			//add new value to new array
			outputArray.push (value);
			}
     return outputArray;
	},
//_.map([1, 2, 3], function(num){ return num * 3; });
//_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });

//FILTER 
	filter: function(num, func){
		var outputArray = [];
		for (var i = 0; i < num.length; i++){
			if (func(num[i])===true){
            outputArray.push(num[i]);
            }
        }
      return outputArray; 
	},

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
console.log(evens);

//_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> [2, 4, 6]
}
