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
