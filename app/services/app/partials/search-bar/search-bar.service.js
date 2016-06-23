(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('SearchService', service);

  function service($http, $log, $rootScope) {
    var service = {};

    var data = null;

    var route = 'https://search-iris-nzbf7woa3juh3vogqm6zksutx4.us-west-1.es.amazonaws.com/_search';
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
        
        var data = {
          "aggs" : {
              "count_type" : {
                  "terms" : { "field" : "_type" }
              }
          },
          "query": {
              "match": {
                  "name": {
                      "query": request,
                      "analyzer":"standard"
                  }
              }
          }
        };


        $http({
          method: 'POST',
          url: route ,
          data: data
        }).then(function success(response){
          service.set(response.data);
        },
        function error(response){
          $log.error(response.statusText);
        })
      
      }else if(request === ''){
        
        var rand = '132123'
        
        var fakeQuery = {
          "aggs" : {
              "count_type" : {
                  "terms" : { "field" : "_type" }
              }
          },
          "query": {
              "match": {
                  "name": {
                      "query": rand,
                      "analyzer":"standard"
                  }
              }
          }
        };

        $http({
          method: 'POST',
          url: route ,
          data: fakeQuery
        }).then(function success(response){
          service.set(response.data);
        },
        function error(response){
          $log.error(response.statusText);
        })
      }

    }

    return service;
  }


})();
