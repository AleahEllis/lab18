var app = angular.module('myApp', ['ngRoute']);








app.controller('externalSrcContr', ['$scope','externalService', function($scope, externalService){
	$scope.paperIcon = {
	  	img: "images/paper.png",
  	}
	$scope.redditArray = [];

	externalService.then(function(response){
		var data = response.data.data.children,
			title,
			link,
			i;
		for(i = 0; i < data.length; i++){
			title = data[i].data.title;
			link = data[i].data.url;
			$scope.redditArray.push({title: title, link: link});
		}
	});
}]);

app.directive("secondDirective", function(){
	return{
		template: "<img ng-src='{{paperIcon.img}}'/>"
	};
});

app.controller("homeContr", ['$scope', function($scope){
  $scope.homeImage = {
  	img: "images/oscarTongue.jpg",
  	caption: "Woof."
  }
}]);

app.directive("firstDirective", function(){
	return{
		template: "<img src='{{homeImage.img}}' /img>"
	};
});



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
		
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/homeview.html',
      controller: 'homeContr'
    })
    .when('/external', {
      templateUrl: '/views/externalSrcView.html',
      controller: 'externalSrcContr'
    })
    .when('/kata', {
      templateUrl: '/views/kataView.html',
      controller: 'kataContr'
    })
    .otherwise({ 
      redirectTo: '/'
    });
});
app.factory('externalService', ['$http', function($http){
	console.log('ran');
	
	return $http({
		method: 'GET',
		url: 'https://www.reddit.com/r/news/.json'
	});
}]);