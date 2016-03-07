angular.module('mod')
	.controller("theSource",function($scope, $http){
			 method: 'GET',
 			 url: '//www.pinterest.com/malloryontravel/cool-images/json'
			}).then(function successCallback(response) {
		    	//how do we want to display?
		  	
		  	}, function errorCallback(response) {
		     //404 error
	});

		  	
		  	console.log("see a thing?")

		  		