var underscore = require("./underscore.js")


describe('Leap Year Calc', function() {
	it ('should return a divisible by 4', function (){
	  expect(calc.divisibleByFour(1600)).toEqual(true);
	}); 

	it ('should return a divisible by 100', function (){
	  expect(calc.divisibleByOneHundred(1600)).toEqual(true);
	}); 

	it ('should return a divisible by 400', function (){
	  expect(calc.divisibleByFourHundred(1600)).toEqual(true);
	}); 

	it ('should return true to a number that is divisible by 100 and 400', function (){
	  expect(calc.divisibleByFourHundredAndOneHundred(1600)).toEqual(true);
	}); 
});
