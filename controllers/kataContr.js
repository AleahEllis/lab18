angular.module('mod')
	.controller("kataConr",function($scope, ){
		
		var str="eye";
			function palindrome(str) {
			    str = str.toLowerCase();
			    var reverseStr = str.split("").reverse().join('');
			    if (str === reverseStr){
			    return  "yes congratulations, you found a  Palindrome";
			    }else{
			    return "aww man, that is not a palidrome";
			    }
			}

			console.log(palindrome(str));

  		
  		});
  		 console.log("Kata, Baby!")




