(function(){


  angular
  .module('symptum')
  .controller('HomeController' , controller);

  function controller(SpecialitiesService, ModalService, $log){
    var vm = this;

		vm.getSpec = function(){
			SpecialitiesService.get()
			.then(function success(response){
				vm.specialities = response.data;
      },
      function error(response){
        $log.error(response.statusText);
      })
		}


		vm.openModal = function(){
			ModalService.create('speciality', 'lg', vm.specialities);
		}
  }


})();
