app.service('ItemService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {

    

    this.baseURl = ViewVariablesService.GetBaseAddress();

 

    this.InsertItemData = function (image,ItemName ) {
        var dataAsFormData = new FormData();
        dataAsFormData.append("Image", image[0]);
        dataAsFormData.append("ItemName", ItemName);

        return $http({
            url: this.baseURl + 'Item/InsertItemData',
            method: "POST",
            data: dataAsFormData,
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        });
    }
    this.getData = function () {
        return $http({ method: 'GET', url: this.baseURl + 'Item/GetData' });
    }

}])
