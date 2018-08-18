app.service('CategoryMasterService', ['$http',  function ($http) {



    this.baseURl = "http://localhost:50433/api/";


    this.GetCategory = function () {
        return $http({ method: 'GET', url: this.baseURl + 'CategoryMaster' });
    }
    this.InsertRegion = function (Object) {
        return $http({ method: 'POST', url: this.baseURl + 'Region/InsertUpdateRegion', data: Object });
    }

}])
