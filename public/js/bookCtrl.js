angular.module('lilac')
.controller('bookCtrl', [
'$scope',
'$http',
'books',
function($scope, $http, books){
	$scope.data = {message: 'Hello'};
    $scope.listofbooks = books.catalog;
    
    $scope.addBook = function(){
        //console.log($scope.title);
        if($scope.title === '') { return; }
        books.addEntry({
          title: $scope.title,
          author: $scope.author,
        });
        $scope.title = '';
        $scope.author = '';
    };

    // books.getChange().then(function(value) {
    // 	//console.log(angular.lowercase(value));
    // 	if (angular.lowercase(value) == "true") {
    // 		$scope.theColor = "green";
    // 	} else {
    // 		$scope.theColor = "";
    // 	}
    // });

}]);

