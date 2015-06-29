(function (){
var app = angular.module ('Directives', []);

app.directive ('menuBar', function (){
  return {
    restrict        : 'E',
    templateUrl     : '../templates/menu-bar.html'
  };
});

app.directive ('articlesInfo', function (){
  return {
    restrict        : 'E',
    templateUrl     : '../templates/articles-info.html',
    controller      : 'ArticleController',
    controllerAs    : 'ArticleCtrl'
  };
});

app.directive ('articlesForm', function (){
  return {
    restrict        : 'E',
    templateUrl     : '../templates/articles-form.html',
    controller      : 'ArticleController',
    controllerAs    : 'ArticleCtrl'
  };
});

app.directive ('articlesDelete', function (){
  return {
    restrict        : 'E',
    templateUrl     : '../templates/articles-delete.html',
    controller      : 'ArticleController',
    controllerAs    : 'ArticleCtrl'
  };
});

})();
