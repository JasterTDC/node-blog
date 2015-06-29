(function (){
var app = angular.module ('Tab', []);

app.controller ('TabController', ['$scope', function ($scope){
  this.tab = 0;

  this.selectTab = function (numTab){
    this.tab = numTab;
  };

  this.isSelectedTab = function (numTab){
    return (this.tab === numTab);
  };

}]);
})();
