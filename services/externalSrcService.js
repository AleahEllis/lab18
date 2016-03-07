app.factory('externalService', ['$http', function($http){
	console.log('ran');
	
	return $http({
		method: 'GET',
		url: 'https://thibaultcha-fortunecow-v1.p.mashape.com/random'
	});
}])