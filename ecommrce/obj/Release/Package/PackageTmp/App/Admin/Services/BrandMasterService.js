﻿app.service('BrandMasterService', ['$http',  function ($http) {



    this.baseURl = "http://localhost:50675/api/";


    this.GetBrand = function () {
        return $http({ method: 'GET', url: this.baseURl + 'Brand/Brand_Find?Active=True' });
    }
    this.InsertRegion = function (Object) {
        return $http({ method: 'POST', url: this.baseURl + 'Region/InsertUpdateRegion', data: Object });
    }

}])
