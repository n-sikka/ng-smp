(function() {
  'use strict';

  angular
    .module('symptum')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    var _dirPath = 'app/views/app/';

    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/home');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'app/views/base.html'
      })
      .state('/home', {
        url: '/home',
        parent: 'base',
        templateUrl: _dirPath + 'pages/home/home.html'
      });

  }

})();
