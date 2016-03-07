app.controller('externalSrcContr', ['externalSrcservice', function(externalSrcservice){
	externalSrcservice.then(function(response){
		console.log(response);
	});
}]);


