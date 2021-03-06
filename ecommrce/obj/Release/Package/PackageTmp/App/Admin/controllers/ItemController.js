﻿app.controller('ItemController', ['$scope', '$http', '$location', 'ItemService', 'brandService', 'SubCategoryService', 'CategoryMasterService',
    function ($scope, $http, $location, ItemService, brandService, SubCategoryService, CategoryMasterService) {
        



        $scope.brandList = [];
        $scope.Item = {};
        $scope.Bindbrand = function () {
            $scope.branddata = [];
            brandService.getData().success(function (results) {
                if (results != "") {
                    $scope.brandList = [];
                    $scope.branddata = JSON.parse(results);
                    for (var i = 0; i < $scope.branddata.length; i++) {
                        $scope.brandList.push({ "Name": $scope.branddata[i].BrandName, "Id": $scope.branddata[i].BrandId });//    
                    }
                }
                else { }
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

        $scope.BindSubCategory = function (ID) {
            $scope.SubCategorydata = [];
            SubCategoryService.getSubCategoryData(ID).success(function (results) {
                if (results != "") {
                    $scope.SubCategoryList = [];
                    $scope.SubCategorydata = JSON.parse(results);
                    for (var i = 0; i < $scope.SubCategorydata.length; i++) {
                        $scope.SubCategoryList.push({ "Name": $scope.SubCategorydata[i].SubCategoryName, "Id": $scope.SubCategorydata[i].SubCategoryId });//    
                    }
                }
                else { }
            }).error(function (data, status, headers, config) {

            });
        }



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
            CategoryMasterService.GetCategory().success(function (results) {
                if (results != "") {
                    
                    $scope.CategoryList = [];
                    $scope.Categorydata = results;
                    for (var i = 0; i < $scope.Categorydata.length; i++) {
                        $scope.CategoryList.push({ "Name": $scope.Categorydata[i].CategoryName, "Id": $scope.Categorydata[i].CategoryId });//    
                    }
                }
                else { }
            }).error(function (data, status, headers, config) {

            });
        }

        $scope.BindCategory();

        $scope.CategoryOptions = {
            change: function (e) {
                $scope.BindSubCategory(e.sender._old);
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

            if ($scope.btntextCategory == "Update") {
                ItemService.UpdateImageFile1($scope.FileOfferletterUpload, $scope.Item.ItemId).success(function (data, status, headers, config) {
                    if (data.length > 0) {
                        toaster.pop('success', "Success", "Offer letter is successfully uploaded");
                    }
                })
            }



        }
        /////////////////////////////////////////////////////////////////////////////FILE NAME UPOAD 1
        $scope.FileNameUpload1 = "";
        $scope.imagemainUpload1 = function (event) {
            $scope.PlsUploadOfferLetter1 = false;
            var files1 = event.target.files; //FileList object
            $scope.FileOfferletterUpload1 = event.target.files;
            for (var i = 0; i < files1.length; i++) {
                var file1 = files1[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file1);
            }

            $scope.FileNameUpload1 = files1[0].name;
            $scope.$apply();
            if ($scope.btntextCategory == "Update") {
                ItemService.UpdateImageFile2($scope.FileOfferletterUpload1, $scope.Item.ItemId).success(function (data, status, headers, config) {
                    if (data.length > 0) {
                        toaster.pop('success', "Success", "Offer letter is successfully uploaded");
                    }
                })
            }
        }

        /////////////////////////////////////////////////////////////////////////////FILE NAME UPOAD 2
        $scope.FileNameUpload2 = "";
        $scope.imagemainUpload2 = function (event) {
            $scope.PlsUploadOfferLetter2 = false;
            var files2 = event.target.files; //FileList object
            $scope.FileOfferletterUpload2 = event.target.files;
            for (var i = 0; i < files2.length; i++) {
                var file2 = files2[i];
                var reader = new FileReader();
                reader.onload = $scope.imageIsLoaded;
                reader.readAsDataURL(file2);
            }

            $scope.FileNameUpload2 = files2[0].name;
            $scope.$apply();
            if ($scope.btntextCategory == "Update") {
                ItemService.UpdateImageFile3($scope.FileOfferletterUpload2, $scope.Item.ItemId).success(function (data, status, headers, config) {
                    if (data.length > 0) {
                        toaster.pop('success', "Success", "Offer letter is successfully uploaded");
                    }
                })
            }
        }

        ///////////////////////................................////////////////////////////.......................................////////////////////.
        ///////////////////////................................////////////////////////////.......................................////////////////////.
        ///////////////////////................................////////////////////////////.......................................////////////////////.
        $scope.btntextCategory = "Save";
        $scope.SaveItemDetail = function () {
            

            var chkValFields = 0;
            if ($scope.Item.Description == "" || $scope.Item.Description == undefined) {
                $scope.ItemDescriptionval = true;
                chkValFields = 1;
            }
            if ($scope.Item.Stockinhand == "" || $scope.Item.Stockinhand == undefined) {
                $scope.ItemStockinhandval = true;
                chkValFields = 1;
            }
            if ($scope.Item.Price == "" || $scope.Item.Price == undefined) {
                $scope.ItemPriceval = true;
                chkValFields = 1;
            }
            if ($scope.Item.ItemStockCode == "" || $scope.Item.ItemStockCode == undefined) {
                $scope.ItemItemStockCodeval = true;
                chkValFields = 1;
            }
            if ($scope.Item.Title == "" || $scope.Item.Title == undefined) {
                $scope.ItemTitleval = true;
                chkValFields = 1;
            }
            if ($scope.Item.Name == "" || $scope.Item.Name == undefined) {
                $scope.ItemNameval = true;
                chkValFields = 1;
            }
            if ($scope.Item.SubCategory == "" || $scope.Item.SubCategory == undefined) {
                $scope.ItemSubCategoryval = true;
                chkValFields = 1;
            }
            if ($scope.Item.Category == "" || $scope.Item.Category == undefined) {
                $scope.ItemCategoryval = true;
                chkValFields = 1;
            }
            if ($scope.Item.Brand == "" || $scope.Item.Brand == undefined) {
                $scope.ItemBrandval = true;
                chkValFields = 1;
            }



            if ($scope.FileOfferletterUpload == "" || $scope.FileOfferletterUpload == undefined) {
                $scope.FileOfferletterUploadval = true;
                chkValFields = 1;
            }
            if ($scope.FileOfferletterUpload1 == "" || $scope.FileOfferletterUpload1 == undefined) {
                $scope.FileOfferletterUploadval1 = true;
                chkValFields = 1;
            }
            if ($scope.FileOfferletterUpload2 == "" || $scope.FileOfferletterUpload2 == undefined) {
                $scope.FileOfferletterUploadval2 = true;
                chkValFields = 1;
            }
            if (chkValFields == 0) {

                if ($scope.btntextCategory == "Save") {
                    ItemService.InsertItemData($scope.FileOfferletterUpload,
                        $scope.FileOfferletterUpload1,
                        $scope.FileOfferletterUpload2,
                        $scope.Item.Name,
                        $scope.Item.Category.Id,
                        $scope.Item.Brand.Id,
                        $scope.Item.SubCategory.Id, $scope.Item.Description, $scope.Item.ItemStockCode, $scope.Item.Price, $scope.Item.Title, $scope.Item.Stockinhand
                    ).success(function (data, status, headers, config) {
                        $scope.RefreshItemGrid();
                        $scope.SubCategory = {};
                    })
                }
                if ($scope.btntextCategory == "Update") {
                    ItemService.UpdateItemData(
                        $scope.Item.Name,
                        $scope.Item.Category.Id,
                        $scope.Item.Brand.Id,
                        $scope.Item.SubCategory.Id, $scope.Item.Description, $scope.Item.ItemStockCode, $scope.Item.Price, $scope.Item.Title, $scope.Item.Stockinhand, $scope.Item.ItemId
                    ).success(function (data, status, headers, config) {
                        $scope.RefreshItemGrid();
                        $scope.SubCategory = {};
                    })
                }
            }
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////BIND GRID DATA///////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        $scope.GridOptionsItem = {
            dataSource: {
                transport: {
                    read: function (e) {
                        
                        ItemService.GetItemGridData().success(function (data, status, headers, config) {
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
                { field: "ItemId", title: "ItemId", width: "40px", },
                { field: "Name", title: "Item Name", width: "150px", },
                { field: "Title", title: "Title", width: "150px", },
                { field: "BrandName", title: "Brand", width: "100px" },
                { field: "CategoryName", title: "Category", width: "100px" },
                { field: "SubCategoryName", title: "SubCategoryName", width: "100px" },
                { field: "Price", title: "Price", width: "100px" },
                { field: "ItemStockCode", title: "ItemStockCode", width: "100px" },
                { field: "Description", title: "Description", width: "100px" },
                { field: "StockInHand", title: "StockInHand", width: "100px" }
            ]
        };
        $scope.onChangeGrid = function (selected, data, dataIteam, angularDataItem) {
            

            $scope.Item.Description = data.Description;
            $scope.FileNameUpload2 = data.ItemImage2;
            $scope.FileNameUpload1 = data.ItemImage1;
            $scope.FileNameUpload = data.ItemMainImage;
            $scope.Item.Stockinhand = data.StockInHand;
            $scope.Item.Price = data.Price;
            $scope.Item.ItemStockCode = data.ItemStockCode;
            $scope.Item.Title = data.Title;
            $scope.Item.Name = data.Name;
            $scope.Item.SubCategory = { "Name": data.SubCategoryName, "Id": data.SubCategoryId };
            $scope.Item.Category = { "Name": data.CategoryName, "Id": data.CategoryId };
            $scope.Item.Brand = { "Name": data.BrandName, "Id": data.BrandId };
            $scope.Item.ItemId = data.ItemId;
            $scope.btntextCategory = "Update";
        }


        ///REFRESH GRID 
        $scope.RefreshItemGrid = function () {
            $scope.screenResolution1 = new kendo.data.DataSource({
                transport: {
                    read: {
                        function(e) {

                        }
                    }
                },
            });
        }
    }]);

