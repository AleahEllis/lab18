
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/homeview.html',
      controller: 'homeContr'
    })
    .when('/external', {
      templateUrl: '/views/externalSrcView.html',
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