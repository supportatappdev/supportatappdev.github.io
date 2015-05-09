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
      })
  }]);

dhelp.controller('DHelpCtrl',function($scope,$rootScope,$location){
	console.log("************ IN HELP CONTROLLER***********");
	$scope.go = function(path){
		$location.path(path)
	};
});

dhelp.controller('HW1Ctrl',function($scope,$rootScope,$location){
	console.log("************ IN Hellow World CONTROLLER***********");
	
});