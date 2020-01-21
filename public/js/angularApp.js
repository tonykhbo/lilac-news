
angular.module('lilac', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'bookCtrl',
      resolve: {
        postPromise: ['books', function(books) {
                return books.getCatalog()
            }]
        }
    })
  $urlRouterProvider.otherwise('home');
}]);