//app.service('ShopService', function () {

//    debugger
//   //this.xxx = data;

//    this.sendData = function (data) {
//        this.xxx = data;
//    };
//});
app.service("ShopService", function () {
    debugger
    var _xxx = {};

    return {
        getXxx: function () {
            debugger
            return _xxx;
        },
        setXxx: function (value) {
            debugger
            _xxx = value;
        }
    };

});