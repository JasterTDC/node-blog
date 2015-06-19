(function (){
  var app = angular.module ('angular-blog', []);

  app.directive ('menuBar', function (){
    return {
      restrict        : 'E',
      templateUrl     : '../templates/menu-bar.html'
    };
  });

  app.controller ('ArticleController', ['$http', function ($http){
    this.article = {};

    this.addArticle = function (){
      $http.post ('/addEntry', this.article)
      .success (function (data){
        console.log (data);
      })
      .error (function (data){
        console.log ('Error: ' + data);
      });

      this.article = {};
    };

    this.resetArticle = function (){
      this.article = {};
    };

  }]);
})();
