app.factory('externalService', ['$http', function($http){
	console.log('ran');
	
	return $http({
		method: 'GET',
		url: 'https://www.reddit.com/r/news/.json'
	});
}]);