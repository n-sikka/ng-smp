(function(){
	'use strict';

  angular
  .module('symptum')
  .factory('ModalService', service);

  function service($log, $uibModal) {
  
    var vm = this;

    vm.create = function(modalName, size, data){
      
      $uibModal.open({
        templateUrl: 'app/views/app/partials/modals/'+ modalName +'.html',
        size: size,
        controller: 'ModalController',
        controllerAs: 'vm',
        resolve: {
          modalData : function(){
            return data;
          }
        }

      });
    }

    return vm;

  }


})();
