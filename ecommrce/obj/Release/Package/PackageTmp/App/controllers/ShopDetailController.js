app.controller('ShopDetailCtrl', function ($scope, $http,  $window, $rootScope, ShopService) {
   

    
    $scope.$watch(function () { return ShopService.getXxx(); }, function (newValue, oldValue) {
        
        if (newValue != null) {
            //update Controller2's xxx value
            $scope.xxx = newValue;
        }
    }, true);



    //$http({ method: 'GET', url: 'http://localhost:63988/api/ShopPortalListing'}).
    //    success(function (data, status, headers, config) {
            
    //                        $scope.response = data;

    //                    }).
    //                    error(function (data, status, headers, config) {
    //                    });

    //$scope.function = function (data)
    //{
    //    
    //    $scope.data = data;
    //   // $window.location.href = '/index.html';
    //}

});