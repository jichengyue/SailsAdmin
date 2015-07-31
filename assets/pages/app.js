/**
 * Created by jcy on 15/7/31.
 */
var app = angular.module("SailsAdmin",[]);

app.cotroller("ReviewController", ["$http",function (http){
  var store = this;
  store.reviews = [];
  $http.get("/review/").success(function (json) {
    store.reviews = json;
  });

}]);
