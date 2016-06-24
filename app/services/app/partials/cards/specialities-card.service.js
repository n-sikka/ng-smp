(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('SpecialitiesService', service);

  function service($http, $log, API) {
    var service = {};

    service.getSpecialities = function(){
      
      return $http({
        method: 'GET',
        cache: true,
        url: API.SPECIALITIES
      }).then(function success(response){
        
        return response;

      },
      function error(response){
        $log.error(response.statusText);
      })
      
    }

    return service;
  }


})();
