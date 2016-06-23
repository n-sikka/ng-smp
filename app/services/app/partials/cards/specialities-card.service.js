(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('SpecialitiesService', service);

  function service($http, $log) {
    var service = {};

    service.getSpecialities = function(){
      
      return $http({
        method: 'GET',
        cache: true,
        url: 'http://api.symptum.com/api/v1/specialities'
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
