var application= angular.module('mycontapp',[]);
	application.controller('languages',function($scope){

		$scope.favlanguage ='None';
		$scope.easylanguage ='None';
		$scope.tolanguage = 'None';

// Favourite languages script
		$scope.php=function()
		{
			$scope.favlanguage="PHP";
		}

$scope.ruby=function()
		{
			$scope.favlanguage="Ruby";
		}

		$scope.Cpls=function()
		{
			$scope.favlanguage="C+";
		}

		$scope.Js=function()
		{
			$scope.favlanguage="Js";
		}
// easylanguage script
$scope.php1=function()
		{
			$scope.easylanguage="PHP";
		}

$scope.ruby1=function()
		{
			$scope.easylanguage="Ruby";
		}

		$scope.Cpls1=function()
		{
			$scope.easylanguage="C+";
		}

		$scope.Js1=function()
		{
			$scope.easylanguage="Js";
		}

// tough languages
$scope.php2=function()
		{
			$scope.tolanguage="PHP";
		}

$scope.ruby2=function()
		{
			$scope.tolanguage="Ruby";
		}

		$scope.Cpls2=function()
		{
			$scope.tolanguage="C+";
		}

		$scope.Js2=function()
		{
			$scope.tolanguage="Js";
		}
	});
