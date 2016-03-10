
app.controller("kataContr",function($scope){
	$scope.palindrome = function(word){
		word.toLowerCase();
	    var reverseWord = word.split("").reverse().join('');
	    if (word === reverseWord){
	    	$scope.no = '';
	    	console.log('yay');
	    	$scope.yes = "yes congratulations, you found a  Palindrome";
	    } else {
	    	$scope.yes = '';
	    	console.log('nay');
	    	$scope.no = "aww man, that is not a palidrome";
	    }
	};
});
		