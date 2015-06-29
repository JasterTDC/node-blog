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
    templateUrl     : '../templates/articles-info.html'
  };
});

})();
