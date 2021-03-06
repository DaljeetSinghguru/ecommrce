﻿app.service('brandService', ['$http',  function ($http) {

    

    this.baseURl = "http://localhost:50675/api/";
 

    this.InsertBrandData = function (image,BrandName ) {
        var dataAsFormData = new FormData();
        dataAsFormData.append("Image", image[0]);
        dataAsFormData.append("BrandName", BrandName);

        return $http({
            url: this.baseURl + 'Brand/InsertBrandData',
            method: "POST",
            data: dataAsFormData,
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    }
    this.getData = function () {
        return $http({ method: 'GET', url: this.baseURl + 'Brand/GetData' });
    }

}])
