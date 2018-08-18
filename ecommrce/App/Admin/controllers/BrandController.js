app.controller('BrandController', ['$scope', '$http', 'BrandMasterService', '$anchorScroll', 
    function ($scope, $http, BrandMasterService, $anchorScroll) {
        debugger
        $anchorScroll();
        $('input').keypress(function (event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        
        //$scope.abc = function () {

        //    return fetch("https://worldfree4u.ws/url/decode/td6173990/0").then(function (res) {
        //        return res.text();
        //    }).then(function (html) {
        //        console.log(`html = ${html}`);
        //    });
        //}
        //$scope.abc();

        $scope.Brand = {};
        $scope.btntextBrand = "Save";

        $scope.ClearFilterData = function () {
            $scope.filterText = "";
            $scope.filterGrid();
            $scope.BrandDescription1 = false;
        }

        //Get Coutry Data into Grid
        $scope.BrandgridOptions = {
            dataSource: {
                transport: {
                    read: function (e) {
                        debugger
                        BrandMasterService.GetBrand().success(function (data, status, headers, config) {
                            debugger
                            if (data != "") {
                                //$scope.data = JSON.parse(data);
                                e.success(data);
                                $scope.dataReset =data;
                            }

                        });
                    }
                },
                pageSize: 10,
                //serverPaging: true,
                // serverSorting: true
            },
            sortable: true,
            pageable: true,
            selectable: "row",
            columns: [
                { field: "SrNo", title: "#", width: "50px" },
                { field: "BrandName", title: "Name", width: "150px" },
                { field: "Active", title: "Active", width: "150px" },
                { field: "SequenceNo", title: "Sequence", width: "150px" }
            ]
        };

        //Save/Update Data Into Grid 
        $scope.SaveBrand = function () {

            var chkValFields = 0;
            if ($scope.Brand.BrandDescription1 == "" || $scope.Brand.BrandDescription1 == undefined) {
                $scope.BrandDescription1 = true;
                chkValFields = 1;
            }

            //if (chkValFields == 1) {
            //    toaster.pop('warning', "warning", "Please re-check the input data and fill correctly");
            //}

            if (chkValFields == 0) {
                $scope.Brand.BrandDescription = $scope.Brand.BrandDescription1;
                $scope.Brand.SequenceNo = $scope.Brand.SequenceNo1;
                $scope.Brand.Active = $scope.Brand.Active1;
                if ($scope.Brand.BrandId) { $scope.Brand.BrandId = $scope.Brand.BrandId; }
                BrandMasterService.InsertBrand($scope.Brand).success(function (data, status, headers, config) {
                    $scope.BrandDescription1 = false;

                    $scope.OutputData = JSON.parse(data);
                    if ($scope.OutputData == "1") {
                        $scope.RefreshBrandGrid();
                        $scope.Brand = {};
                      //  toaster.pop('success', "Success", "Record Inserted Successfully");
                        //alert('Record Insert.')
                    }
                    if ($scope.OutputData == "2") {
                        $scope.RefreshBrandGrid();
                        $scope.Brand = {};
                      //  toaster.pop('success', "Success", "Record Updated Successfully");
                        //alert('Record Update.')
                    }
                    if ($scope.OutputData == "0") {
                       // toaster.pop('Exist', "Exist", "Record already Exists");
                        //alert('Record already Exists.')
                    }


                });
            }
        }
        //Fill Data into Controll while click on Grid for Update
        $scope.onChangeBrandGrid = function (selected, data, dataIteam, angularDataItem) {
            $scope.BrandDescription1 = false;
            $scope.Brand.BrandDescription1 = data.BrandDescription;
            $scope.Brand.SequenceNo1 = data.SequenceNo;
            $scope.Brand.Active1 = data.Active;
            $scope.Brand.BrandId = data.BrandId;
            $scope.btntextBrand = "Update";
        }
        ///REFRESH GRID 
        $scope.RefreshBrandGrid = function () {
            $scope.BrandGridRebind = new kendo.data.DataSource({
                transport: {
                    read: {
                        function(e) {

                        }
                    }
                },
            });
        }


        $scope.filterGrid = function () {

            var grid = $scope.gridBrand;
            if ($scope.filterText != "") {
                grid.dataSource.query({
                    page: 1,
                    pageSize: 100,
                    filter: {
                        logic: "or",
                        filters: [
                            { field: "BrandDescription", operator: "contains", value: $scope.filterText }
                        ]
                    }
                });
            }
            else {
                grid.dataSource.query({
                    page: 1,
                    pageSize: 10,
                });
            }
        };


        // clear fields
        $scope.ClearBrandFields = function () {

            $scope.Brand = {};
            $scope.BrandDescription1 = false;
            $scope.btntextBrand = "Save";
        }


        //clear validations
        $scope.ClearValMsgBrandDescription1 = function () {
            $scope.BrandDescription1 = false;
        }


    }]);
