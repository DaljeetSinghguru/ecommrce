﻿app.service('ItemService', ['$http', function ($http) {

    

    this.baseURl = "http://localhost:50675/api/";


    this.InsertItemData = function (FileOfferletterUpload,
        FileOfferletterUpload1,
        FileOfferletterUpload2,
        Name,
        CategoryId,
        BrandId,
        SubCategoryId, Description, ItemStockCode, Price, Title, Stockinhand ) {
        var dataAsFormData = new FormData();
        dataAsFormData.append("Image", FileOfferletterUpload[0]);
        dataAsFormData.append("Image1", FileOfferletterUpload1[0]);
        dataAsFormData.append("Image2", FileOfferletterUpload2[0]);
        dataAsFormData.append("ItemName", Name);
        dataAsFormData.append("CategoryId", CategoryId);
        dataAsFormData.append("BrandId", BrandId);
        dataAsFormData.append("SubCategoryId", SubCategoryId);
        dataAsFormData.append("Description", Description);
        dataAsFormData.append("ItemStockCode", ItemStockCode);
        dataAsFormData.append("Price", Price);
        dataAsFormData.append("Title", Title);
        dataAsFormData.append("Stockinhand", Stockinhand);
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
    this.GetItemGridData = function () {
        return $http({ method: 'GET', url: this.baseURl + 'Item/GetItemGridData' });
    }
}])
