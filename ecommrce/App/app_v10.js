
var app = angular.module('webApp', [
    'ngRoute',
]).run(['$rootScope', function ($rootScope, $routeChangeStart) {
    
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
    });
}]);




app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            /////////////// SLIM VISA /////////////////////////
            .when('/LandingPageVisa', {
                templateUrl: 'App/Admin/views/LandingPageVisa.html',
                contrller: 'app/controllers/LandingPageVisaController.js'
            })
            .when('/Category', {

                templateUrl: 'App/Admin/views/CategoryView.html',
                contrller: 'app/controllers/Master/CountryMasterController.js'
            })
            .when('/CollegeList', {
                templateUrl: 'app/views/Master/CollegeMasterView.html',
                contrller: 'app/controllers/CollegeMasterController.js'
            })


            /////////////////////// END TASK DEFINED ROUTES ////////////////////

            .otherwise({
                redirectTo: '/Task:Inbox'
            });
    }]);
