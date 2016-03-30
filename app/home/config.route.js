(function() {

  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.
        state('home', {
          url:'/home',
          templateUrl: 'app/home/home.html'
        });
  }
})();
