// PUT YOUR CODE HERE!!!
//Homework for underscore lab 2. 
//EACH
var _ = {
  arrayProp: [1, 2, 3],
  each: function(arrayOne){
  for (var i = 0; i < arrayOne.length; i++) {
  var current = arrayOne[i];
  alert(current);
  }
}
};
_.each(_.arrayProp);

//COMPACT
var _ = {
	arrayProp: [1, "hello", undefined, 3, undefined], 
	compact: function(arrayOne) {
		var arrayA = []; 
		for (var i = 0; i < arrayOne.length; i++) {
			if (arrayOne[i] !== undefined) {
				arrayA.push(arrayOne[i]); 
			}
		}
      return arrayA; 
	}
};
console.log(_.compact(_.arrayProp));


//MAP
var _ = {
	map: function(num, func){
		var outputArray = [];
		for (var i = 0; i < num.length; i++){
            outputArray.push(func(num[i]);
			}
     return outputArray; 
	}
};
_.map([1, 2, 3], function(num){ return num * 3; });
_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });



//FILTER
var _ = {
	filter: function(num, func){
		var outputArray = [];
		for (var i = 0; i < num.length; i++){
			if (func(num[i])===true){
            outputArray.push(num[i]);
            }
        }
      return outputArray; 
	}
};
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
console.log(evens);

_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]
