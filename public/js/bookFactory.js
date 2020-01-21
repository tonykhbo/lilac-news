angular.module('lilac')
.factory('books', ['$http', function($http){

   var books = {
    catalog: [],
    getCatalog: function() {
      return $http.get('/books').then(function(res){
        //console.log(res.data);
        angular.copy(res.data, books.catalog);
      })
    },
    addEntry: function(book) {
      return $http.post('/books', book).success(function(data){
        books.catalog.push(book);
      })
    }

  };

  return books;
}]);