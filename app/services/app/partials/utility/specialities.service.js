(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('SpecialitiesService', service);

  function service($http, $log, API) {
  
    return {
      get: function(){
        return $http({
          method: 'GET',
          cache: true,
          url: API.SPECIALITIES
        })
      }
    }


  }


})();
