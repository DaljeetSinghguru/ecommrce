var app = angular.module('webApp', [
    'ngRoute',
    'ui.bootstrap',
    'kendo.directives'
]).run(['$rootScope', function ($rootScope, $routeChangeStart) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        // console.log(next);
        // console.log(next.$$route.templateUrl);
        //if (next.$$route.templateUrl == "app/views/amz/ProductSearchResultsView.html") {
        //    angular.element('#minovate').addClass("abc");
        //}
        //else {
        //    angular.element('#minovate').removeClass("abc");
        //}
    });
}]);

//var app = angular.module('webApp', [
//    'ngRoute',


//]);

//app.config(['$routeProvider', function ($routeProvider) {
//    debugger
//    // $httpProvider.interceptors.push('httpInterceptor');

//    $routeProvider
//        .when('/home', {
//            templateUrl: 'app/views/Dashboard.html',
//            contrller: 'DashboardController'
//        })

//        .when('/signup', {
//            templateUrl: 'app/views/signup.html',
//            contrller: 'signupController'
//        })
//        .when('/ForgetPassword', {
//            templateUrl: 'app/views/ForgetPassword.html',
//        })
//        //.when('/resetpassword/:code', {
//        //    templateUrl: 'app/views/ResetPassword.html',
//        //})
//        .when('/resetpassword/', {
//            url: '?Code&Email',
//            templateUrl: 'app/views/ResetPassword.html',
//        })
//        .when('/changepassword/', {
//            templateUrl: 'app/views/changepassword.html',
//            contrller: 'ChangePasswordController',
//        })
//        .otherwise({
//            redirectTo: '/login'
//        });



//}]);


app.config(['$routeProvider','$locationProvider', 
    function ($routeProvider,$locationProvider) {


       



        $routeProvider
            .when('/home', {
                templateUrl: 'app/views/Dashboard.html',
                contrller: 'app/controllers/DashboardMainController.js'
            })
            
            .otherwise({
                redirectTo: '/home'
            });



    }]);



//app.directive('draggable', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element[0].addEventListener('dragstart', scope.handleDragStart, false);
//            element[0].addEventListener('dragend', scope.handleDragEnd, false);
//        }
//    }
//});

//app.directive('droppable', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element[0].addEventListener('drop', scope.handleDrop, false);
//            element[0].addEventListener('dragover', scope.handleDragOver, false);
//        }
//    }

//});

//app.directive('replyComment', ['$compile', function ($compile) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element.bind('click', function () {
//                $(".ParentActivity").remove();
//                var parentId = $(this).data('parent');
//                var strhtml = '<div class="ParentActivity">\
//                           <textarea class="form-control" ng-model="Reply.Comment"></textarea>\
//                           <button class="btn btn-default   pull-right whiteBtn" type="submit"  hide-comment >Cancel  </button>\
//                           <button save-comment data-parent="' + parentId + '" class="btn btn-primary pull-right saveBtn" type="submit">Reply </button>\
//                       </div>';
//                var e = angular.element(strhtml);
//                e = $compile(e)(scope);
//                $(this).parent().parent().parent().parent().append(e);

//            });
//        }
//    }

//}]);

//app.directive('hideComment', ['$compile', function ($compile) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element.bind('click', function () {
//                $(this).parent().remove();
//            });
//        }
//    }
//}]);


//app.directive('saveComment', ['$compile', function ($compile) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element.bind('click', function () {
//                var parentId = $(this).data('parent');
//                scope.ReplyToComment(parentId);
//                $(this).parent().remove();
//            });
//        }
//    }
//}]);




//app.directive('nxEqual', function () {

//    return {
//        require: 'ngModel',
//        link: function (scope, elem, attrs, model) {
//            if (!attrs.nxEqual) {
//                console.error('nxEqual expects a model as an argument!');
//                return;
//            }

//            model.$parsers.push(function (value) {
//                var isValid = value === scope.$eval(attrs.nxEqual);
//                model.$setValidity('nxEqual', isValid);
//                return isValid ? value : undefined;
//            });
//        }
//    };
//});



//app.directive('focusChart', ['$timeout', function ($timeout) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attr) {
//            console.log(attr.focusChart);

//            $(document.body).keydown(function (e) {
//                if (e.altKey && e.keyCode == 87) {
//                    var gantt = scope.TaskChart;
//                    gantt.list.content.find("table").focus();
//                }
//            });
//        },

//    }
//}]);


//app.directive('resizeEditGrid', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(attr.resizeGrid);
//            $(window).resize(function () {
//                SetGridHeight(attr.resizeGrid);
//            });
//            function SetGridHeight(padding) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().prev().height();

//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();

//                var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 80;
//                if (padding) {
//                    gridHeight = gridHeight - padding;
//                }
//                console.log(padding);
//                var grid = element.find(".k-grid-content");
//                if (gridHeight <= 0) {
//                    gridHeight = 500;
//                }
//                grid.height(gridHeight);
//            };

//        }
//    };
//});

//app.directive('resizeGrid', function ($timeout) {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(attr.resizeGrid);
//            $(window).resize(function () {
//                SetGridHeight(attr.resizeGrid);
//            });
//            $timeout(SetGridHeight, 1000);
//            function SetGridHeight(padding) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (searchRowHeight == null) {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 106;
//                } else {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 60;
//                }
//                if (padding) {
//                    gridHeight = gridHeight - padding;
//                }
//                console.log(padding);
//                var grid = element.find(".k-grid-content");
//                if (gridHeight <= 0) {
//                    gridHeight = 600;
//                }
//                grid.height(gridHeight);
//            };

//        }
//    };
//});


//app.directive('resizeDiv', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetDivHeight(element);
//            $(window).resize(function () {
//                SetDivHeight(element);
//            });
//            function SetDivHeight(element) {
//                var tabsContentHeight = $('#Div1').height();
//                var tabsHeight = $('#mainTabs').height();
//                var searchRowHeight = element.prev().height();

//                var divHeight = tabsContentHeight - searchRowHeight - tabsHeight - 20;
//                if (divHeight < 50) {
//                    divHeight = 575;
//                }
//                element.height(divHeight);
//                element.find("#firstPane").height(divHeight);
//                element.find("#secondPane").height(divHeight);
//                element.find(".k-splitbar").height(divHeight);

//            };

//        }
//    };
//});


//app.directive('resizePriceList', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetDivHeight(element);
//            $(window).resize(function () {
//                SetDivHeight(element);
//            });
//            function SetDivHeight(element) {
//                var tabsContentHeight = $('#Div1').height();
//                var tabsHeight = $('#mainTabs').height();
//                var searchRowHeight = element.prev().height();

//                var divHeight = tabsContentHeight - searchRowHeight - tabsHeight - 20;
//                if (divHeight < 50) {
//                    divHeight = 575;
//                }
//                element.height(divHeight);
//                element.find("#firstPane").height(divHeight);
//                element.find("#secondPane").height(divHeight);
//                element.find(".k-splitbar").height(divHeight);
//            };

//        }
//    };
//});

//app.directive('resizePriceListGrid', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetDivHeight(element);
//            $(window).resize(function () {
//                SetDivHeight(element);
//            });
//            function SetDivHeight(element) {
//                var tabsContentHeight = $('#Div1').height();
//                var tabsHeight = $('#mainTabs').height();
//                var searchRowHeight = element.prev().height();

//                var divHeight = tabsContentHeight - searchRowHeight - tabsHeight - 20;
//                if (divHeight < 50) {
//                    divHeight = 575;
//                }

//                var grid = element.find(".k-grid-content");
//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                grid.height(divHeight - headerHeight - footerHeight - 80);
//            };

//        }
//    };
//});

//app.directive('resizePurchaseOpportunityGrid', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(element);
//            $(window).resize(function () {
//                SetGridHeight(element);
//            });
//            function SetGridHeight(element) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var parentHeight = tabsContentHeight - searchRowHeight - tabsHeight - 35;

//                var grid = element.find(".k-grid-content");
//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (!headerHeight) {
//                    headerHeight = 0;
//                }
//                if (!footerHeight) {
//                    footerHeight = 0;
//                }
//                var gridheight = parentHeight - headerHeight - footerHeight;
//                if (gridheight) {
//                    grid.height(gridheight);
//                }
//                else {
//                    grid.height(500);
//                }


//            };

//        }
//    };
//});



//app.directive('resizeGridBrand', function ($timeout) {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(attr.resizeGrid);
//            $(window).resize(function () {
//                SetGridHeight(attr.resizeGrid);
//            });
//            $timeout(SetGridHeight, 1000);
//            function SetGridHeight(padding) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (searchRowHeight == null) {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 754;
//                } else {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 754;
//                }
//                if (padding) {
//                    gridHeight = gridHeight - padding;
//                }
//                console.log(padding);
//                var grid = element.find(".k-grid-content");
//                if (gridHeight <= 0) {
//                    gridHeight = 600;
//                }
//                grid.height(gridHeight);
//            };

//        }
//    };
//});


//app.directive('resizeSplitterGrid', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(element);
//            $(window).resize(function () {
//                SetGridHeight(element);
//            });
//            function SetGridHeight(element) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var parentHeight = tabsContentHeight - searchRowHeight - tabsHeight - 60;

//                var grid = element.find(".k-grid-content");
//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                grid.height(parentHeight - headerHeight - footerHeight - 50);


//            };

//        }
//    };
//});

//app.directive('resizeInnerGrid', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            var padding = attr.resizeInnerGrid;

//            SetGridHeight(element, padding);
//            $(window).resize(function () {
//                SetGridHeight(element, padding);
//            });
//            function SetGridHeight(element, padding) {
//                var parentHeight = $('#Div1').height();
//                var topBarHeight = element.prev().height();
//                if (topBarHeight == 0) { topBarHeight = 46; }
//                var grid = element.find(".k-grid-content");
//                var headerHeight = element.find(".k-grid-header").height();
//                if (headerHeight == 0) { headerHeight = 30; }
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (footerHeight == 0) { footerHeight = 27.3; }
//                parentHeight = parentHeight - headerHeight - footerHeight - topBarHeight - padding - 110;
//                grid.height(parentHeight);
//            };

//        }
//    };
//});




//app.directive('resizeOpportunityGrid', function () {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(element);
//            $(window).resize(function () {
//                SetGridHeight(element);
//            });
//            function SetGridHeight(element) {
//                var parentHeight = tabsContentHeight = $('#Div1').height();
//                var prevHeight = element.prev().height();
//                var grid = element.find(".k-grid-content");
//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                grid.height(parentHeight - headerHeight - footerHeight - prevHeight - 78);


//            };

//        }
//    };
//});

//app.directive('resizeGridTrade', function ($timeout) {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(attr.resizeGrid);
//            $(window).resize(function () {
//                SetGridHeight(attr.resizeGrid);
//            });
//            $timeout(SetGridHeight, 1000);
//            function SetGridHeight(padding) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (searchRowHeight == null) {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 91;
//                } else {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 91;
//                }
//                if (padding) {
//                    gridHeight = gridHeight - padding;
//                }
//                console.log(padding);
//                var grid = element.find(".k-grid-content");
//                if (gridHeight <= 0) {
//                    gridHeight = 600;
//                }
//                grid.height(gridHeight);
//            };

//        }
//    };
//});


//app.directive('resizeGridPlantype', function ($timeout) {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(attr.resizeGrid);
//            $(window).resize(function () {
//                SetGridHeight(attr.resizeGrid);
//            });
//            $timeout(SetGridHeight, 1000);
//            function SetGridHeight(padding) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (searchRowHeight == null) {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 220;
//                } else {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 220;
//                }
//                if (padding) {
//                    gridHeight = gridHeight - padding;
//                }
//                console.log(padding);
//                var grid = element.find(".k-grid-content");
//                if (gridHeight <= 0) {
//                    gridHeight = 600;
//                }
//                grid.height(gridHeight);
//            };

//        }
//    };
//});

//app.directive('resizeGridPlan', function ($timeout) {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(attr.resizeGrid);
//            $(window).resize(function () {
//                SetGridHeight(attr.resizeGrid);
//            });
//            $timeout(SetGridHeight, 1000);
//            function SetGridHeight(padding) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (searchRowHeight == null) {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
//                } else {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
//                }
//                if (padding) {
//                    gridHeight = gridHeight - padding;
//                }
//                console.log(padding);
//                var grid = element.find(".k-grid-content");
//                if (gridHeight <= 0) {
//                    gridHeight = 600;
//                }
//                grid.height(gridHeight);
//            };

//        }
//    };
//});
//app.directive('resizeGridDashboard', function ($timeout) {
//    return {
//        restrict: 'A',
//        priority: 10,
//        link: function (scope, element, attr) {
//            SetGridHeight(attr.resizeGrid);
//            $(window).resize(function () {
//                SetGridHeight(attr.resizeGrid);
//            });
//            $timeout(SetGridHeight, 1000);
//            function SetGridHeight(padding) {

//                tabsContentHeight = $('#Div1').height();
//                tabsHeight = $('#mainTabs').height();
//                searchRowHeight = element.prev().height();

//                var headerHeight = element.find(".k-grid-header").height();
//                var footerHeight = element.find(".k-grid-pager").height();
//                if (searchRowHeight == null) {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
//                } else {
//                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
//                }
//                if (padding) {
//                    gridHeight = gridHeight - padding;
//                }
//                console.log(padding);
//                var grid = element.find(".k-grid-content");
//                if (gridHeight <= 0) {
//                    gridHeight = 600;
//                }
//                grid.height(gridHeight);
//            };

//        }
//    };
//});


//app.directive('scrollOnClick', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attr) {
//            element.on('click', function () {
//                $(".modal").animate({ scrollTop: element.offset().top + 100 }, "slow");
//            });

//        }
//    };
//});


//app.directive('passwordCheck', function () {
//    return {
//        restrict: 'A',
//        require: 'ngModel',
//        link: function (scope, elem, attrs, ctrl) {
//            var firstPassword = '#' + attrs.passwordCheck;
//            elem.add(firstPassword).on('keyup', function () {
//                scope.$apply(function () {
//                    var v = elem.val() === $(firstPassword).val();
//                    ctrl.$setValidity('pwmatch', v);
//                });
//            });
//        }
//    }

//});

//app.directive('tooltipclickable', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element.tooltip({ trigger: "click" });
//        }
//    };
//});

//app.directive("enterTab", function () {

//    return {
//        restrict: "A",
//        "link": function (scope, element, attrs) {

//            $('input,select').on("focus keypress", function (e) {

//                var inputs = $(this).closest('form').find(':input:visible,select:visible,textarea:visible');
//                var nextInput = inputs.eq(inputs.index(this) + 1);
//                if (e.keyCode === 13) {
//                    nextInput.focus();
//                    if (nextInput.attr('type') !== "submit")
//                        e.preventDefault();
//                }

//                return true;
//            });
//        }
//    };
//});

//app.directive('autofocus', ['$timeout', function ($timeout) {
//    return {
//        restrict: 'A',
//        link: function ($scope, $element) {
//            $timeout(function () {
//                $element[0].focus();
//            });
//        }
//    }
//}]);

//app.directive('resizeFooter', function () {

//    return {
//        link: function (scope, element) {

//            var width = angular.element('.add-lead-box').width();

//            SetFooterWidth(element, width);
//            $(window).resize(function () {
//                SetFooterWidth(element, width);
//            });
//            function SetFooterWidth(element) {
//                $(".LeadFooter").width(width - 34);

//            };

//        }
//    }

//});
//app.directive('resizeFooterDefault', function () {

//    return {
//        link: function (scope, element) {

//            var widthDefault = angular.element('.main-controller-div').width();


//            SetFooterDefaultWidth(element, width);
//            $(window).resize(function () {
//                SetFooterDefaultWidth(element, width);
//            });
//            function SetFooterDefaultWidth(element) {
//                $(".bottom-default-footer").width(widthDefault - 49);
//            };

//        }
//    }

//});

//app.filter('highlight', ['$sce', function ($sce) {

//    return function (text, phrase) {
//        if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
//            '<span class="highlighted">$1</span>')

//        return $sce.trustAsHtml(text)
//    }
//}]);

//app.directive('nextFilter', ['$compile', function ($compile) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element.bind('click', function () {
//                var index;
//                if (attrs.nextFilter == 'activityScrollWrapper') {
//                    index = scope.FindActivityTextIndex;
//                }
//                else if (attrs.nextFilter == 'chatScrollWrapper') {
//                    index = scope.FindCommentTextIndex;
//                }
//                else if (attrs.nextFilter == 'taskScrollWrapper') {
//                    index = scope.FindTaskTextIndex;
//                }
//                var results = $('#' + attrs.nextFilter).find('span.highlighted');
//                for (var i = 0; i < results.length; i++) {
//                    $(results[i]).removeClass('highlightedSelected');
//                }
//                index = index + 1;
//                if (index > results.length - 1) {
//                    index = 0;
//                }
//                $(results[index]).addClass('highlightedSelected');
//                $('#' + attrs.nextFilter).scrollTo($(results[index]), { duration: 500 }, { queue: true });
//                if (attrs.nextFilter == 'activityScrollWrapper') {
//                    scope.FindActivityTextIndex = index;
//                }
//                else if (attrs.nextFilter == 'chatScrollWrapper') {
//                    scope.FindCommentTextIndex = index;
//                }
//                else if (attrs.nextFilter == 'taskScrollWrapper') {
//                    scope.FindTaskTextIndex = index;
//                }
//            });
//        }
//    }
//}]);

//app.directive('previousFilter', ['$compile', function ($compile) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            element.bind('click', function () {
//                var index;
//                if (attrs.nextFilter == 'activityScrollWrapper') {
//                    index = scope.FindActivityTextIndex;
//                }
//                else if (attrs.nextFilter == 'chatScrollWrapper') {
//                    index = scope.FindCommentTextIndex;
//                }
//                else if (attrs.nextFilter == 'taskScrollWrapper') {
//                    index = scope.FindTaskTextIndex;
//                }
//                var results = $('#' + attrs.nextFilter).find('span.highlighted');
//                for (var i = 0; i < results.length; i++) {
//                    $(results[i]).removeClass('highlightedSelected');
//                }
//                index = index - 1;
//                if (index < 0) {
//                    index = results.length - 1;
//                }
//                $(results[index]).addClass('highlightedSelected');
//                $('#' + attrs.nextFilter).scrollTo($(results[index]), { duration: 500 }, { queue: true });
//                if (attrs.nextFilter == 'activityScrollWrapper') {
//                    scope.FindActivityTextIndex = index;
//                }
//                else if (attrs.nextFilter == 'chatScrollWrapper') {
//                    scope.FindCommentTextIndex = index;
//                }
//                else if (attrs.nextFilter == 'taskScrollWrapper') {
//                    scope.FindTaskTextIndex = index;
//                }
//            });
//        }
//    }
//}]);

//app.directive('stopEvent', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attr) {
//            element.bind('click', function (e) {
//                e.stopPropagation();
//            });
//        }
//    };
//});


//app.directive('closeFilter', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attr) {
//            element.bind('click', function (e) {
//                $('.TopAdvancedFilters').hide();
//            });
//        }
//    };
//});





///**
// * Percentage Field Directive
// */
//app.directive('percentageField', ['$filter', function ($filter) {

//    return {

//        restrict: 'A',
//        require: 'ngModel',
//        scope: {
//            // currencyIncludeDecimals: '&',

//        },
//        link: function (scope, element, attr, ngModel) {
//            $(element).blur(function () {
//                var value = $(element).val().replace("%", "").replace("$", "");
//                value = parseFloat(value);
//                if (isNaN(value)) {
//                    value = 0;
//                }
//                if (value > 100) {
//                    value = 100;
//                }
//                else if (value < 0) {
//                    value = 0;
//                }
//                $(element).val(value.toFixed(2) + '%');
//            });
//        }
//    };
//}]);

///**
// * Currency  Field Directive
// */


//app.directive('feeType', function () {
//    return {
//        restrict: 'A',
//        scope: {
//            valuekey: '@'
//        },
//        link: function (scope, element, attr, ngModel) {
//            $(element).change(function () {
//                var textbox = $("#" + scope.valuekey);
//                var value = textbox.val().replace("%", "").replace("$", "");

//                var selectedType = $(element).val();
//                value = parseFloat(value);
//                if (isNaN(value)) {
//                    value = 0;
//                }

//                textbox.removeAttr('disabled')

//                if (selectedType == 'Use Amazon Fee') {
//                    textbox.val('');
//                    textbox.attr('disabled', 'disabled');
//                }
//                else if (selectedType == 'Pound') {
//                    textbox.val('$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
//                }
//                else if (selectedType == 'Percent Retail') {
//                    if (value > 100) {
//                        value = 100;
//                    }
//                    else if (value < 0) {
//                        value = 0;
//                    }
//                    textbox.val(value.toFixed(2) + '%');
//                }
//            });
//        }
//    };
//});

//app.directive('poundPercentage', function () {
//    return {
//        restrict: 'A',
//        scope: {
//            typekey: '@'
//        },
//        link: function (scope, element, attr, ngModel) {
//            $(element).blur(function () {
//                var value = $(element).val().replace("%", "").replace("$", "");
//                value = parseFloat(value);
//                if (isNaN(value)) {
//                    value = 0;
//                }
//                var selectedType = $("#" + scope.typekey).val();
//                if (selectedType == 'Pound') {
//                    $(element).val('$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
//                }
//                else if (selectedType == 'Percent Retail') {
//                    if (value > 100) {
//                        value = 100;
//                    }
//                    else if (value < 0) {
//                        value = 0;
//                    }
//                    $(element).val(value.toFixed(2) + '%');
//                }
//            });

//        }
//    };
//});




//app.directive('currencyField', ['$filter', function ($filter) {

//    return {

//        restrict: 'A',
//        require: 'ngModel',
//        scope: {
//            // currencyIncludeDecimals: '&',

//        },
//        link: function (scope, element, attr, ngModel) {

//            attr['percentageMaxValue'] = attr['percentageMaxValue'];
//            attr['percentageMaxDecimals'] = attr['percentageMaxDecimals'] || 2;

//            $(element).css({ 'text-align': 'left' });

//            // function called when parsing the inputted url
//            // this validation may not be rfc compliant, but is more
//            // designed to catch common url input issues.
//            function into(input) {

//                var valid;

//                if (input == '') {
//                    ngModel.$setValidity('valid', true);
//                    return '';
//                }

//                // if the user enters something that's not even remotely a number, reject it
//                if (!input.match(/^\d+(\.\d+){0,1}%{0,1}$/gi)) {
//                    ngModel.$setValidity('valid', false);
//                    return '';
//                }

//                // strip everything but numbers from the input
//                input = input.replace(/[^0-9\.]/gi, '');

//                input = parseFloat(input);

//                var power = Math.pow(10, attr['percentageMaxDecimals']);

//                input = Math.round(input * power) / power;

//                if (input > attr['percentageMaxValue']) input = attr['percentageMaxValue'];

//                // valid!
//                ngModel.$setValidity('valid', true);

//                return input;
//            }

//            ngModel.$parsers.push(into);

//            function out(input) {
//                if (ngModel.$valid && input !== undefined && input > '') {
//                    return '$' + input;
//                }

//                return '0';
//            }

//            ngModel.$formatters.push(out);

//            $(element).bind('click', function () {
//                //$( element ).val( ngModel.$modelValue );
//                $(element).select();
//            });

//            $(element).bind('blur', function () {
//                $(element).val(out(ngModel.$modelValue));
//            });
//        }
//    };
//}]);
//app.directive('realTimeCurrency', function ($filter, $locale) {

//    var decimalSep = $locale.NUMBER_FORMATS.DECIMAL_SEP;
//    var toNumberRegex = new RegExp('[^0-9\\' + decimalSep + ']', 'g');
//    var trailingZerosRegex = new RegExp('\\' + decimalSep + '0+$');
//    var filterFunc = function (value) {
//        return $filter('currency')(value);
//    };

//    function getCaretPosition(input) {
//        if (!input) return 0;
//        if (input.selectionStart !== undefined) {
//            return input.selectionStart;
//        } else if (document.selection) {
//            // Curse you IE
//            input.focus();
//            var selection = document.selection.createRange();
//            selection.moveStart('character', input.value ? -input.value.length : 0);
//            return selection.text.length;
//        }
//        return 0;
//    }

//    function setCaretPosition(input, pos) {
//        if (!input) return 0;
//        if (input.offsetWidth === 0 || input.offsetHeight === 0) {
//            return; // Input's hidden
//        }
//        if (input.setSelectionRange) {
//            input.focus();
//            input.setSelectionRange(pos, pos);
//        }
//        else if (input.createTextRange) {
//            // Curse you IE
//            var range = input.createTextRange();
//            range.collapse(true);
//            range.moveEnd('character', pos);
//            range.moveStart('character', pos);
//            range.select();
//        }
//    }

//    function toNumber(currencyStr) {
//        return parseFloat(currencyStr.replace(toNumberRegex, ''), 10);
//    }

//    return {
//        restrict: 'A',
//        require: 'ngModel',
//        link: function postLink(scope, elem, attrs, modelCtrl) {
//            modelCtrl.$formatters.push(filterFunc);
//            modelCtrl.$parsers.push(function (newViewValue) {
//                var oldModelValue = modelCtrl.$modelValue;
//                var newModelValue = toNumber(newViewValue);
//                modelCtrl.$viewValue = filterFunc(newModelValue);
//                var pos = getCaretPosition(elem[0]);
//                elem.val(modelCtrl.$viewValue);
//                var newPos = pos + modelCtrl.$viewValue.length -
//                    newViewValue.length;
//                if ((oldModelValue === undefined) || isNaN(oldModelValue)) {
//                    newPos -= 3;
//                }
//                setCaretPosition(elem[0], newPos);
//                return newModelValue;
//            });
//        }
//    };
//});

//app.directive('numbercontract', function ($filter) {
//    return {
//        restrict: 'A',
//        scope: {
//            ngModel: '=',
//            typekey: '@'
//        },
//        link: function (scope, element, attr, ngModel) {

//            $(element).blur(function () {
//                $(element).val();
//                var value = $(element).val();
//                if (value.indexOf(',') != -1) {
//                    var aa = String(value).replace(/[,]/gi, '');
//                    var numberContractAmount = $filter('currency')(aa);
//                    if (numberContractAmount.indexOf('$') != -1) {

//                        numberContractAmount = String(numberContractAmount).replace("$", "");
//                    }
//                }
//                else {
//                    var numberContractAmount = $filter('currency')(value);
//                    if (numberContractAmount.indexOf('$') != -1) {

//                        numberContractAmount = String(numberContractAmount).replace("$", "");
//                    }
//                }
//                scope.ngModel = numberContractAmount;
//            });

//        }
//    };
//});



//app.directive('reportViewer', function () {
//    return {
//        restrict: 'EA',
//        transclude: 'true',
//        scope: {
//            name: '@',
//            parameters: '@',
//            category: '@',
//            baseaddress: '@',
//        },
//        template: "HTML5 Viewer below:",
//        link: function (scope, element, attrs) {

//            //create the viewer object first, can be done in index.html as well
//            var reportViewer = $("#reportViewer1").data("telerik_ReportViewer");
//            if (!reportViewer) {

//                $("#reportViewer1").toggle();

//                $(document).ready(function () {
//                    $("#reportViewer1").telerik_ReportViewer({
//                        error: function (e, args) {
//                            alert('Error from report directive:' + args);
//                        },
//                        templateUrl: 'Html5/ReportViewer/templates/telerikReportViewerTemplate.html',//app/vi ews/amz/Reportstemplate.html',//
//                        reportSource: {
//                            report: scope.category + "/" + scope.name,
//                            parameters: JSON.parse(scope.parameters),

//                        },
//                        serviceUrl: scope.baseaddress + 'ReportsApi/',//'http://ims-api.azurewebsites.net/api/ReportsApi/',            //http://ims-api-proto.azurewebsites.net/
//                        scale: 1.0,
//                        // scaleMode: "FIT_PAGE_WIDTH",
//                        //viewMode: telerikReportViewer.ViewMode.Interactive,
//                        //SizeToReportContent: true,
//                        //Height:"100%" ,
//                        //Width:"100%" ,
//                        ready: function () {

//                        },
//                    })
//                });
//            }
//            //on state change update the report source
//            scope.$watch('name', function () {

//                var reportViewer = $("#reportViewer1").data("telerik_ReportViewer");

//                if (reportViewer) {
//                    var rs = reportViewer.reportSource();
//                    if (rs && rs.report)
//                        if (rs.report != scope.name &&
//                            rs.parameters != scope.parameters) {

//                            reportViewer.reportSource({
//                                report: scope.category + "/" + scope.name,
//                                parameters: JSON.parse(scope.parameters),
//                                category: scope.category,
//                            });
//                        }
//                }
//            });
//        }
//    }

//});



//app.directive('fileModel', ['$parse', function ($parse) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            var model = $parse(attrs.fileModel);
//            var modelSetter = model.assign;

//            element.bind('change', function () {
//                scope.$apply(function () {
//                    modelSetter(scope, element[0].files[0]);
//                });
//            });
//        }
//    };
//}]);


//app.directive('checkFileSize', function () {
//    return {
//        link: function (scope, elem, attr, ctrl) {


//            scope.validateFilesize = true;
//            function bindEvent(element, type, scope, handler) {
//                if (element.addEventListener) {
//                    element.addEventListener(type, handler, false);
//                } else {
//                    element.attachEvent('on' + type, handler);
//                }
//            }

//            bindEvent(elem[0], 'change', scope, function () {


//                scope.$apply(function () {
//                    scope.validateFilesize = true;
//                });
//                if (this.files[0].size > 6679860) {
//                    scope.$apply(function () {
//                        scope.validateFilesize = false;
//                    });

//                }
//                // alert('File size:' + this.files[0].size);
//            });

//        }
//    }
//});

//app.directive('ngRightClick', function ($parse) {
//    return function (scope, element, attrs) {
//        var fn = $parse(attrs.ngRightClick);
//        element.bind('contextmenu', function (event) {
//            scope.$apply(function () {
//                event.preventDefault();
//                fn(scope, { $event: event });
//            });
//        });
//    };
//});