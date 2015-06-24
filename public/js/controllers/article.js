(function (){
  var app = angular.module ('angular-blog', []);

  app.directive ('menuBar', function (){
    return {
      restrict        : 'E',
      templateUrl     : '../templates/menu-bar.html'
    };
  });

  app.service ('articleFactory', ['$q', '$http', function ($q, $http){
    this.getAllArticles = function (){
      var deferred        = $q.defer(),
          httpPromise     = $http.get ('/entries');

      httpPromise.success (function (data){
        deferred.resolve (data);
      })
      .error (function (err){
        console.log (err);
      });

      return deferred.promise;
    }

    this.getNumArticles = function (){
      var deferred        = $q.defer(),
          httpPromise     = $http.get ('/numEntries');

      httpPromise.success (function (data){
        deferred.resolve (data);
      })
      .error (function (err){
        console.error (err);
      });

      return deferred.promise;
    }
  }]);

  app.controller ('ArticleController', ['$http', 'articleFactory', '$scope', function ($http, articleFactory, $scope){
    this.article = {}; // Simple article.
    this.list = []; // Article list.

    articleFactory.getAllArticles()
    .then (function (data){
      console.log (data);

      $scope.list         = data;
      $scope.numArticles  = data.length;
    }, function (err){
      console.error (err);
    });

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

    this.deleteArticle = function (id){
      $http.delete ('/deleteEntry/' + id)
      .success (function (data){
        console.log (data);

        $scope.list = data;
      })
      .error (function (err){
        console.error (err);
      });
    };

  }]);

})();
