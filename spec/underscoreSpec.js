var _ = require("../underscore.js")

describe('the map function', function() {
	it ('maps a function to a new array', function (){
		expect(_.map([1,2,3], function(x) {
			return x*2; 
		})).toEqual([2,4,6]); 
		expect (_.map(["hello", "yellow"], function(str) {
			return str.toUpperCase(); 
		})).toEqual(["HELLO", "YELLOW"]); 
		//you will likely have mulitiple 'expects'
		//ex: test using double, upcase, or divide
		});
	it ('handles invalid arguments', function()){
		expect (_.map([1,2,3])).toEqual("You need to pass in a function")
	}
	//it for different tests, different subset of features with in the same function 
	//ex: it('throws an error when missing a function argument')
});
