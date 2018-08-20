app.controller('ItemController', ['$scope', '$http', '$location', 'ItemService','brandService',
    function ($scope, $http, $location, ItemService,brandService) {
        debugger

       

        $scope.brandList = [];

        $scope.Bindbrand = function () {
            $scope.branddata = [];
            brandService.getData().success(function (results) {
                if (results != "") {
                    $scope.brandList = [];
                    $scope.branddata = JSON.parse(results);
                    for (var i = 0; i < $scope.branddata.length; i++) {
                        $scope.brandList.push({ "Name": $scope.branddata[i].BrandName, "Id": $scope.branddata[i].Id });//    
                    }
                }
                else {  }
            }).error(function (data, status, headers, config) {
                
            });
        }

        $scope.Bindbrand();

        $scope.BrandOptions = {
            change: function (e) {
            },
            select: function () {
            }
        }


/////////////////////////////////////////////////////////////////////////////////////


        $scope.SubCategoryList = [];

        $scope.BindSubCategory = function () {
            $scope.SubCategorydata = [];
            SubCategoryService.getData().success(function (results) {
                if (results != "") {
                    $scope.SubCategoryList = [];
                    $scope.SubCategorydata = JSON.parse(results);
                    for (var i = 0; i < $scope.SubCategorydata.length; i++) {
                        $scope.SubCategoryList.push({ "Name": $scope.SubCategorydata[i].SubCategoryName, "Id": $scope.SubCategorydata[i].Id });//    
                    }
                }
                else {  }
            }).error(function (data, status, headers, config) {
                
            });
        }

        $scope.BindSubCategory();

        $scope.SubCategoryOptions = {
            change: function (e) {
            },
            select: function () {
            }
        }

/////////////////////////////////////////////////////////////////////////////////////


        $scope.CategoryList = [];

        $scope.BindCategory = function () {
            $scope.Categorydata = [];
            CategoryService.getData().success(function (results) {
                if (results != "") {
                    $scope.CategoryList = [];
                    $scope.Categorydata = JSON.parse(results);
                    for (var i = 0; i < $scope.Categorydata.length; i++) {
                        $scope.CategoryList.push({ "Name": $scope.Categorydata[i].CategoryName, "Id": $scope.Categorydata[i].Id });//    
                    }
                }
                else {  }
            }).error(function (data, status, headers, config) {
                
            });
        }

        $scope.BindCategory();

        $scope.CategoryOptions = {
            change: function (e) {
            },
            select: function () {
            }
        }


        $scope.FileNameUpload = "";
        $scope.imagemainUpload = function (event) {
            $scope.PlsUploadOfferLetter = false;
            var files = event.target.files; //FileList object
            $scope.FileOfferletterUpload = event.target.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file);
            }

            $scope.FileNameUpload = files[0].name;
            $scope.$apply();
            
        }
/////////////////////////////////////////////////////////////////////////////FILE NAME UPOAD 1
        $scope.FileNameUpload1 = "";
        $scope.imagemainUpload1 = function (event) {
            $scope.PlsUploadOfferLetter1 = false;
            var files1 = event.target.files; //FileList object
            $scope.FileOfferletterUpload1 = event.target.files1;
            for (var i = 0; i < files1.length; i++) {
                var file1 = files1[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file1);
            }

            $scope.FileNameUpload1 = files[0].name;
            $scope.$apply();
            
        }

/////////////////////////////////////////////////////////////////////////////FILE NAME UPOAD 2
        $scope.FileNameUpload2 = "";
        $scope.imagemainUpload2 = function (event) {
            $scope.PlsUploadOfferLetter2 = false;
            var files2 = event.target.files; //FileList object
            $scope.FileOfferletterUpload2 = event.target.files2;
            for (var i = 0; i < files2.length; i++) {
                var file2 = files2[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file2);
            }

            $scope.FileNameUpload2 = files2[0].name;
            $scope.$apply();
            
        }

///////////////////////................................////////////////////////////.......................................////////////////////.
///////////////////////................................////////////////////////////.......................................////////////////////.
///////////////////////................................////////////////////////////.......................................////////////////////.

        $scope.SaveItemDetail = function () {
            debugger
           // $scope.Item;
          //  $scope.FileOfferletterUpload 
            
            ItemService.InsertItemData($scope.FileOfferletterUpload, $scope.Item.Name).success(function (data, status, headers, config) {
                if (data.length > 0) {
                  //  toaster.pop('success', "Success", "Offer letter is successfully uploaded");
                }
            })
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////BIND GRID DATA///////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        $scope.GridOptions = {
            dataSource: {
                transport: {
                    read: function (e) {
                        ItemService.getData().success(function (data, status, headers, config) {
                            if (status == "200") {
                                if (data != "") {
                                    e.success(JSON.parse(data));
                                    $scope.OpenFilterPopup = false;
                                }
                                else { toaster.pop('alert', "Alert", "No Data Found With This Search Selection"); }
                            }
                        }).error(function (data, status, headers, config) {
                            toaster.pop('error', "Error", "Please Contact Admin. Some Error Occur In Connection");
                        });
                    }
                },
                pageSize: 20,
                //serverPaging: true,
                // serverSorting: true
            },
            sortable: true,
            pageable: true,
            columns: [
                { field: "SNo", title: "#", width: "40px", },
                { field: "ItemName", title: "Name", width: "150px",},
                { field: "Filename", title: "File Name", width: "150px", },
                { field: "ImageUrl", title: "Image Url", width: "100px" }
            ]
        };

    }]);

