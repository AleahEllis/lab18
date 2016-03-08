app.controller('externalSrcContr', ['externalService', function(externalService){
	externalService.then(function(response){
		console.log(response);
	});
}]);


