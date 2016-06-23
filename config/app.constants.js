var BASE = 'http://api.symptum.com/api',
    VERSION = '/v1',
    ELASTIC = 'https://search-iris-nzbf7woa3juh3vogqm6zksutx4.us-west-1.es.amazonaws.com';

angular
  .module('symptum')
  .constant('API', {
      SEARCH : ELASTIC + '/_search',
      SPECIALITIES : BASE + VERSION + '/specialities'
  })
