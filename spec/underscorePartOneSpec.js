var _ = require("../underscorePartOne.js");

describe('Find the average number within a given array of numbers', function() {
	it ('should return the sum divided by the number of the objects in the array ', function (){
	  expect(_.average([4,6,1,1])).toEqual(3);
	}); 
});
