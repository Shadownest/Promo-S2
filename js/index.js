var app = angular.module('myApp', ['ngTouch']);
function weatherCtrl($scope, $http)
{
    $scope.city = "Strasbourg";
    var success = function(data)
    {
        $scope.meteo = true;
        $scope.weather = data;
    };
    $scope.search = function()
    {
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+$scope.city+",fr&units=metric&cnt=10&lang=fr";
        $http.get(url).success(success).error(function()
        {
            alert('Connexion impossible.');
        });
    };
}
document.addEventListener('deviceready', function()
{
    
    /*ang.controller("MyController", function($scope, $http)
    {
        $scope.myData = {};
        $http.get("http://192.168.1.19/exercice/index.php?exercice=0").success(function(data, status, headers, config)
        {
            $scope.myData.title = data.title;
        });
    });*/
}, false);