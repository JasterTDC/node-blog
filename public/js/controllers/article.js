(function (){
  var app = angular.module ('angular-blog', ['ngRoute', 'Tab', 'Directives']);

  app.config (['$routeProvider', function ($routeProvider){
    $routeProvider.when ('/ShowArticles/:articleId', {
      templateUrl         : './templates/article.html',
      controller          : 'SingleArticleCtrl'
    });
  }]);

  app.service ('articleFactory', ['$q', '$http', function ($q, $http){
    this.getAllArticles = function (){
      var deferred        = $q.defer(),
          httpPromise     = $http.get ('/api/entries');

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
          httpPromise     = $http.get ('/api/numEntries');

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
    this.article.language = "en";
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
      $http.post ('/api/addEntry', this.article)
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

    this.updateArticle = function (){
      $http.update ('/api/updateEntry', this.article)
      .success (function (data){
        console.log (data);
      })
      .error (function (data){
        console.error (data);
      });
    }

    this.deleteArticle = function (id){
      $http.delete ('/api/deleteEntry/' + id)
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
