
var app = angular.module('webApp', [
    'ngRoute',
]).run(['$rootScope', function ($rootScope, $routeChangeStart) {
    debugger
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
    });
}]);




app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            /////////////// SLIM VISA /////////////////////////
            .when('/LandingPageVisa', {
                templateUrl: 'app/views/LandingPageVisa.html',
                contrller: 'app/controllers/LandingPageVisaController.js'
            })
            .when('/Country', {

                templateUrl: 'app/views/Master/CountryMasterView.html',
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
