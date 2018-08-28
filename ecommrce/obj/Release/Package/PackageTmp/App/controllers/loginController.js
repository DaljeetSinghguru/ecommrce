app.controller('loginController', ['$scope', '$location', function ($scope, $location) {
    
    //$scope.LoginError = "";
    //$scope.UserName = "";
    //$scope.UserPassword = "";
    //$scope.SignInSuccess = false;
    //$scope.loading = false;

    //$scope.DefaultCompanyId;
    //$scope.DefaultCompanyIsSet = false;

    //$scope.Rememberme = false;

    //$scope.Signout = function () {

    //    UserService.SetToken("", false, "", $scope.DefaultCompanyId, false);


    //}

    //$scope.UserMenuSet = [];
    //$scope.GetUserMenu = function (CompanyId) {
    //    var menu = {};
    //    UserService.GetUserMenu(CompanyId).then(function (results) {



    //        menu = results.data;




    //    },
    //        function (errorPayload) {

    //        })
    //    return menu;
    //};






    //$scope.GetViewableCompanyList = function () {
    //    UserCompanyService.GetUsersViewableCompanies().then(function (results) {
    //        $scope.Companies = [];
    //        $scope.UserMenuSet = [];
    //        for (var i = 0; i < results.data.length; i++) {
    //            var menuItem = $scope.GetUserMenu(results.data[i].Id);
    //            $scope.UserMenuSet.push({ CompanyId: results.data[i].Id, Menu: menuItem });
    //            $scope.Companies.push(results.data[i]);
    //        }
    //    },
    //        function (errorPayload) {

    //        })

    //};








    $scope.SignIn = function () {

        window.location.replace('app.html#/home');
        //if ($scope.loginForm.$valid) {
        //    $scope.LoginError = "";
        //    $scope.loading = false;
        //    $scope.SignInSuccess = false;

        //    var request = {
        //        username: $scope.UserName,
        //        password: $scope.UserPassword,
        //    };

        //    UserService.auth(request).success(function (response) {

        //        if ((response.access_token !== undefined) && (response.access_token !== null)) {
        //            $.cookie("Token", response.access_token);
        //        }
        //        UserService.GetLoggedInUserInfo().then(function (results) {
        //            console.log(results);

        //            var CurrentUserName = results.data.FirstName + " " + results.data.LastName;
        //            //  $scope.$parent.UserName = results.data.FirstName + " " + results.data.LastName;
        //            $scope.SignInSuccess = results.data.Authenticated;
        //            $scope.DefaultCompanyId = results.data.DefaultCompanyId;
        //            $scope.DefaultCompanyIsSet = results.data.DefaultCompanyIsSet;


        //            $scope.GetViewableCompanyList(response.access_token);
        //            var Menu = JSON.stringify($scope.UserMenuSet);


        //            if ($scope.Rememberme == true) {
        //                console.log("Remember me");
        //                UserService.SetTokenAndMenuWithExpDate(response.access_token, results.data.Authenticated, CurrentUserName, $scope.DefaultCompanyId, $scope.DefaultCompanyIsSet, Menu, results.data.email, results.data.UserId);
        //            } else {
        //                UserService.SetTokenWithMenu(response.access_token, results.data.Authenticated, CurrentUserName, $scope.DefaultCompanyId, $scope.DefaultCompanyIsSet, Menu, results.data.email, results.data.UserId);
        //            }
        //            if (results.data.PasswordChangeOption) {
        //                localStorage.setItem("IsPasswordChange", true);
        //                $location.path("/changepassword");
        //            }
        //            else {
        //                if ($scope.SignInSuccess) {
        //                    localStorage.setItem("IsPasswordChange", false);
        //                    window.location.replace('app.html#/home');
        //                    // $location.path("/companylist");

        //                } else {
        //                    $scope.LoginError = "Invalid user name or password.";
        //                }
        //            }


        //        });
        //    }).error(function () {
        //        $scope.LoginError = "Invalid user name or password.";
        //    });

        //}
        //else {
        //    $scope.submitted = true;

        //}
    }


    //$scope.GetToken = function () {

    //    console.log("GetToken CALLED.");
    //    $scope.IsLoggedIn = UserService.IsTokenSet();

    //    $scope.UserName = UserService.GetUserName();
    //    if ($scope.UserName) {
    //        $scope.UserName = $scope.UserName.trim();
    //    }



    //    $scope.DefaultCompanyId = UserService.GetDefaultCompanyId();
    //    $scope.DefaultCompanyIsSet = UserService.GetDefaultCompanyIsSet();


    //    console.log("Is Logged In : " + $scope.IsLoggedIn);
    //    if ($scope.IsLoggedIn == "true") {
    //        console.log("Move to /app");
    //        // $location.path("/companylist");
    //        if (localStorage.getItem("IsPasswordChange") == "false") {
    //            window.location.replace('app.html#/home');
    //        } else {
    //            UserService.SetToken("", false, "", $scope.DefaultCompanyId, false);
    //            UserService.SetTokensignUp(false);
    //            window.location.replace('index.html');
    //        }
    //    }
    //    else {
    //        console.log("Currently Logged out");
    //    }
    //    return $scope.Token;
    //}


    //$scope.GetToken();


}]);
