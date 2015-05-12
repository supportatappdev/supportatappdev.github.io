var dhelp = angular.module('dhelp',['ngRoute']);

dhelp.config(['$routeProvider',
  function($routeProvider) {
  	   $routeProvider.otherwise("/");
    $routeProvider.
      when('/', {
        templateUrl: 'views/hm.html',
        controller: 'DHelpCtrl'
      }).when('/hw1', {
        templateUrl: 'views/hw1.html',
        controller: 'HW1Ctrl'
      }).when('/aut', {
        templateUrl: 'views/aut.html',
        controller: 'AutCtrl'
      }).when('/co', {
        templateUrl: 'views/co.html',
      })
  }]); 

dhelp.controller('DHelpCtrl',function($scope,$rootScope,$location){
	console.log("************ IN HELP CONTROLLER***********");
  $scope.topics = [
                {"idx":1,"name":"Create Hellow World App","link":"hw1"},
                {"idx":2,"name":"Appying UI Themes","link":"aut"},
                {"idx":3,"name":"Create Custom Objects","link":"co"},
                {"idx":4,"name":"API Console","link":"ac"}
               ]

	$scope.go = function(path){
		$location.path(path)
	};
});

dhelp.controller('HW1Ctrl',function($scope,$rootScope,$location){
	console.log("************ IN Hellow World CONTROLLER***********");
});
