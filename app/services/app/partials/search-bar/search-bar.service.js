(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('SearchService', service);

  function service($http, $log, $rootScope, API) {
    var service = {},
				data = null;

		/*
			This function creates and returns a query json object for the elastic search for searchbar.
			it returns hits and aggregations which contains data and count for various types available for that search

			createQuery(content)
			content: the key for which we need to create an elastic query json object

		*/
		service.createQuery = function(content){
			var queryObj = {
				"aggs" : {
						"count_type" : {
								"terms" : { "field" : "_type" }
						}
				},
				"query": {
						"match": {
								"name": {
										"query": content,
										"analyzer":"standard"
								}
						}
				}
			}
			return queryObj;
		}

		/*
			This function facilitates anyone using it to get the updated data that the service presently holds.

			get()

			returns data object
		*/

    service.get = function(){
      return data;
    };

		/*
			This function sets the value of data object (private variable) in this service which is then
			returned to who ever calls the service.get() function.
			once the function sets the data value, it fires an event [ 'searched' ] using $emit of angular
			which then can be caught by anyone expecting updated data using $on.

			set(elem)

			elem: the value which is supposed to be set.
		*/

    service.set = function(elem) {
      data = elem;
      $rootScope.$emit('searched');
      return data;
    };



		/*
			This function is called every time user enters anything in the searchbar.
			this fires from the controller and fires and event 'searched' which is then caught in the directive search-bar.directive.js
			and then evaluated there and prettified

			search(request)

			request : this is the string that is to be searched for.
		*/
    service.search = function(request){

      if(request){
				var data = service.createQuery(request);

        $http({
          method: 'POST',
          url: API.SEARCH ,
          data: data
        }).then(function success(response){
          service.set(response.data);
        },
        function error(response){
          $log.error(response.statusText);
        })

      }else if(request === ''){

        $http({
          method: 'POST',
          url: API.SEARCH ,
          data: service.createQuery('123456789')
        }).then(function success(response){
          service.set(response.data);
        },
        function error(response){
          $log.error(response.statusText);
        })
      }

    }

		/*
			This function generates an empty array for each type provided.
			and takes the data we are getting in response from backend and divides it into different arrays based on types

			getGroups(dataArray, typeArray, key);

			dataArray: response array of data we want to group in the typeahead
			typeArray: array of the various groups (headings) we want to group the data according to.
			key: the attribute we will get in the response in the dataArray according to which we will map the typeArray and group it.
		*/
		service.getGroups = function(dataArray, typeArray, key){

			var data = {};
			data.counts = {};

			typeArray.forEach(function(type) {
				data[type] = [];
				data.counts[type] = 0;
			})

			dataArray.hits.hits.forEach(function(obj) {
				typeArray.forEach(function(type){
					if (obj[key] == type) {
						data[type].push(obj)
					}
				})
			})

			dataArray.aggregations.count_type.buckets.forEach(function(obj){
				typeArray.forEach(function(type){
					if (obj.key == type) {
						data.counts[type] = obj.doc_count;
					}
				})
			})

			return data;
		}

    return service;
  }


})();
