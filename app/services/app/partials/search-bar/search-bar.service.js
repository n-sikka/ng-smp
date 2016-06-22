(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('SearchService', service);

  function service($http, $log, $rootScope) {
    var service = {};

    var data = null;

    var route = 'https://search-iris-nzbf7woa3juh3vogqm6zksutx4.us-west-1.es.amazonaws.com/_search?q=';
    var routeConfig = '&pretty=true&analyzer=standard'

    service.get = function(){
      return data;
    };

    service.set = function(elem) {
      data = elem;
      $rootScope.$emit('searched');
      return data;
    };

    service.search = function(request){
      if(request){
        $http({
          method: 'GET',
          url: route + 'name:' + request + routeConfig
        }).then(function success(response){
          service.set(response.data.hits.hits);
        },
        function error(response){
          $log.error(response.statusText);
        })
      }else{
        service.set(null);
      }

    }

    return service;
  }


})();
