// Angular Blog

var app = angular.module ('angular-blog', []);

app.directive ('menuBar', function (){
  return {
    restrict        : 'E',
    templateUrl     : '../templates/menu-bar.html'
  };
});

function mainController ($scope, $http){
  $scope.formData = {};

  $http.get('/entries')
		.success(function(data) {
			$scope.list = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

  $scope.addArticle = function (){
    $http.post ('/addEntry', $scope.formData)
      .success (function (data) {
        $scope.formData = {};
        $scope.list = data;
      })
      .error (function (data){
        console.log ('Error: ' + data);
      });
  };
}
