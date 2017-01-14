angular.module('SATData',
	['ngRoute', 'home']
);

/**
*	Module used in SATData
*/
angular.module('home', []);

/*
*	Router config
*/
angular.module('SATData').config(function($routeProvider){
	$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		}).otherwise('/home');
});