(function () {
    var app = angular.module("SailsAdmin",[]);

    app.controller("ReviewController", ["$http","$location",function ($http,$location){
      var store = this;
      store.reviews = [];
      $http.get("/review").success(function (json) {
        store.reviews = json.results;
      });

      store.create = function(path){

        $location.path(path);

      };

    }]);

   app.filter('to_trust_html',['$sce',function($sce){
     return function(text){
       return $sce.trustAsHtml(text);
     };
   }]);

})();
