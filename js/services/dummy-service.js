

define(['./module'], function (service) {
    'use strict';
    service.factory('dummyService', function(){
		var dummyData = {}; 
    	
    dummyData.users = ['John', 'James', 'Jake'];

    dummyData.details = function() {
    	return "here is details";
    };
   return dummyData;
    
});
});