angular.module('home').controller('HomeCtrl',
	['$scope', '$http',
		function ($scope, $http) {
			/*
			* Send a POST message to server and start a streaming
			*/
			$scope.search = function() {
				var oData = {keyWotd: $scope.keyWord};

				$http.get('analysis/'+ $scope.keyWord).then(function(response){
					console.log(response.data);
				});
			}
		}
	]);