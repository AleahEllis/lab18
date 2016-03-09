app.controller('externalSrcContr', ['$scope','externalService', function($scope, externalService){
	
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


