app.service('SubCategoryMasterService', ['$http', function ($http) {



    this.baseURl = "http://localhost:50433/api/";


    this.GetSubCategory = function () {
        return $http({ method: 'GET', url: this.baseURl + 'SubCategoryMaster' });
    }
    this.InsertRegion = function (Object) {
        return $http({ method: 'POST', url: this.baseURl + 'Region/InsertUpdateRegion', data: Object });
    }

}])
