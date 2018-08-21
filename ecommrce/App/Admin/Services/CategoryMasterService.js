app.service('CategoryMasterService', ['$http',  function ($http) {



    this.baseURl = "http://localhost:50675/api/";


    this.GetCategory = function () {
        return $http({ method: 'POST', url: this.baseURl + 'Category/Category_Find?Active=True' });
    }
    this.InsertCategory = function (Object) {
        return $http({ method: 'POST', url: this.baseURl + 'Category/Category_Insert', data: Object });
    }
    this.GetCategoryGridData = function () {
        return $http({ method: 'POST', url: this.baseURl + 'Category/Category_Find?Active=True' });
    }

}])
