(function() {
  'use strict';

  angular
    .module('test')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('first', {
        url: '/first',
        templateUrl: 'app/first/first.html',
        controller: 'FirstController',
        controllerAs: 'first'
      })
      .state('second',{
        url: '/second',
        templateUrl: 'app/second/second.html',
        controller: 'SecondController',
        controllerAs: 'second'
      });

    $urlRouterProvider.otherwise('/first');
  }

})();
