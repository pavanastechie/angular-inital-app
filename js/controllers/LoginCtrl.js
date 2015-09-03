
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('LoginCtrl', ['$scope','$rootScope','$window','$location','dummyService','loginService',function ($scope,$rootScope, $window,$location, services, loginService) {
    if($rootScope.user){
    var dataSol = JSON.parse(localStorage.userdata);
    console.log( dataSol);
     $location.path('/');
 }
     
     $scope.formSubmit = function(){
     	loginService.loginUser($scope.usermail, $scope.password).then(function(){
     		console.log("Successfully Logged in");
     		 $location.path( "/account" );

     	});
     	//console.log( $window.sessionStorage);
     }
 }]);
});