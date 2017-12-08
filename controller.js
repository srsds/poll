var app= angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
	templateUrl:'index.html'
	})
	.when('/poll',{
	templateUrl:'cont.html'
	})
	.otherwise({
	redirectTo: '/'
	});
});