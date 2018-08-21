app.service('SubCategoryService', ['$http',  function ($http) {


    this.baseURl = "http://localhost:50675/api/";


    this.getData = function () {
        return $http({ method: 'GET', url: this.baseURl + 'Subcategory/GetData' });
    }
    
    this.getSubCategoryData = function (ID) {
        return $http({ method: 'GET', url: this.baseURl + 'Subcategory/GetSubCategoryData?Id='+ID+'' });
    }
}])
