// Angular Blog

var app = angular.module ('angular-blog', []);

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
}
