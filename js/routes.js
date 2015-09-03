define(['./app'], function (app) {
    'use strict';
    return app.config( function ($routeProvider, $locationProvider) {
       
       $routeProvider
        .when('/', {
            templateUrl: 'partials/settings.html'
        })
         .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl',
          
        })
        .when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileCtrl',
        })
        .when('/account', {
            templateUrl: 'partials/account.html',
            controller: 'AccountCtrl',
        }).otherwise({redirectTo: '/login'});

        // use the HTML5 History API
        $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
         
    });
});
