app.service('BrandMasterService', ['$http',  function ($http) {



    this.baseURl = "http://localhost:50433/api/";


    this.GetBrand = function () {
        return $http({ method: 'GET', url: this.baseURl + 'BrandMaster' });
    }
    this.InsertRegion = function (Object) {
        return $http({ method: 'POST', url: this.baseURl + 'Region/InsertUpdateRegion', data: Object });
    }

}])
