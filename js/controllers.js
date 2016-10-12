var nameSpace = angular.module("ImageApp", []);

nameSpace.controller("imageFunction", ['$scope','$http', function($scope, $http)
		{    
			$http.get('http://localhost:8080/photo-album').success(function (response) {
		                $scope.images = response;
			});

		}]
);