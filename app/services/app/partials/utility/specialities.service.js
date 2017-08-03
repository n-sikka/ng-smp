(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('SpecialitiesService', service);

  function service($http, $log, API) {

    return {
			//to fetch specialities from the backend
			get: function(){
        return $http({
          method: 'GET',
          cache: true,
          url: API.SPECIALITIES
        })
      },

			//to pick up the JSON file stored locally
			getJSON: function(){
				return $http({
					method: 'GET',
					cahce: true,
					url: API.SPECIALITIES_JSON
				});
			}
    }


  }


})();
