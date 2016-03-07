angular.module('mod', ['ngRoute']) //should work. I have not tried it yet
  .config(function($routeProvider) { 
    $routeProvider
      .when('/',
        {
          controller:'homecontr', //added a home view because I think it is less confusing for a user. We can throw it out if you gues want 
          templateUrl:'views/homeview.html'

        })
      .when('/pintrestRedditorwhatever',//first argument is a string, shows up at the end of the url address
    	 {//second argument is an object
    		  controller: 'externalSrcContr',
    		  templateUrl: 'views/externalSrcView.html'
    	 })
      .when('/kata',
        {
          controller: 'kataContr',
          templateUrl: 'views/kataView.html'
        })
    .otherwise({ redirectTo: '/' }); //the ohterwise does not go anywhere, I never got around to figuringthat out
});
