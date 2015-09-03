

define(['./module'], function (service) {
    'use strict';
    service.factory('loginService', function($q, $rootScope, $window){
 
		return {
			
			loginUser: function(user,password){
				var deferred = $q.defer();
				var json = {'user':user, 'password':password};
				 localStorage.setItem("userdata", JSON.stringify(json));
				 $rootScope.activeUser = JSON.parse(localStorage.userdata);
				 $rootScope.user = true;
				deferred.resolve(true);
				return deferred.promise;
			},

		}
    
});
});