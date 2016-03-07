angular.module('mod')
	.controller("kataConr",function($scope){
		
		function palindrome(str) {
		    str = str.toLowerCase();
		    var reverseStr = str.split("").reverse().join('');
		    return str === reverseStr;
		}
		return palindrome.str //? 
  		
  		});
  		 console.log("Kata, Baby!")

