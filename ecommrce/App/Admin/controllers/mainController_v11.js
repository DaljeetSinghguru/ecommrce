﻿app.controller('maincontroller', ['$scope', '$window', '$location', '$http',
    function ($scope, $window, $location, $http) {

        $scope.Url = "http://localhost:50433/api/";

        $http({
            method: 'GET', url: $scope.Url + 'Menu'
        }).
            success(function (data, status, headers, config) {


                $scope.AllCategory = JSON.parse(data)
                //$scope.AllCategory1 = data;
            }).
            error(function (data, status, headers, config) {
            }); 
    }]);
