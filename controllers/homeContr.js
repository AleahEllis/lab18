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

