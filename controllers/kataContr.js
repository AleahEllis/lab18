angular.module('mod')
	.controller("kataConr",function($scope, inputService){
		$scope.word="";
			$scope.palindrome=function(word){
				var word=$scope.word;
				var wordNoCaps = word.toLowerCase();
			    var reverseWord = wordNoCaps.split("").reverse().join('');
			    if (word === reverseWord){
			    return  "yes congratulations, you found a  Palindrome";
			    }else{
			    return "aww man, that is not a palidrome";
			    }
			};
	});
		//var lower=word.to lowercase
		//
		
		//the base that works
		// var input=
		// 	function palindrome(str) {
		// 	    str = str.toLowerCase();
		// 	    var reverseStr = str.split("").reverse().join('');
		// 	    if (str === reverseStr){
		// 	    return  "yes congratulations, you found a  Palindrome";
		// 	    }else{
		// 	    return "aww man, that is not a palidrome";
		// 	    }
		// 	}

		// 	console.log(palindrome(str));

  		
  		});
  		 console.log("Kata, Baby!")




