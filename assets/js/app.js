(function () {
    var app = angular.module("SailsAdmin",[]);

    app.controller("ReviewController", ["$http",function ($http){
      var store = this;
      store.reviews = [];
      $http.get("/review").success(function (json) {
        store.reviews = json;
      });

    }]);

})();
