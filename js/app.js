app.controller('externalSrcContr', ['externalSrcservice', function(externalSrcservice){
	externalSrcservice.then(function(response){
		console.log(response);
	});
}])
app.controller("homeContr", function(){
  console.log("welcome home")
});
app.controller("kataContr", function(){
  console.log("welcome home")
});
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/homeview.html',
      controller: 'homeContr'
    })
    .when('/external', {
      templateUrl: '/views/externalSrcView,html',
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
		url: 'https://thibaultcha-fortunecow-v1.p.mashape.com/random'
	});
}])