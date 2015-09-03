define(['../app'], function (app) {
    'use strict';
    return app.run( function($rootScope, $location) {

    if(localStorage.length > 0){
	console.log(localStorage);
      $rootScope.user = true;
    }
    else{
      $rootScope.user = false;
    }
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.user == null && $rootScope.user == undefined) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "partials/login.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/login" );
        }
      }
        else if($rootScope.user == false) {
          $location.path( "/login" );
        }
               
    });
 })
});
