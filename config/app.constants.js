var BASE = 'http://api.symptum.com/api',
    VERSION = '/v1';

angular
  .module('symptum')
  .constant('API', {
      SEARCH : BASE + VERSION + '/search/hospital/spec',
      SPECIALITIES : BASE + VERSION + '/specialities'
  });
