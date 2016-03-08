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

app.directive("secondDirective", function(){
	return{
		template: "<h3 id='directiveTwo'>{{homeImage.caption}}</h3>"
	};
});
