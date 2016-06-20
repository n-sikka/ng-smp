angular
	.module('symptum')
	.controller('SearchBarController', function (filterFilter) {

	var vm = this;
  vm.selectedUser = '';
  
  var users = [{
      name: 'Some user1',
      group: 'Doctor'
    }, {
      name: 'Test user2',
      group: 'Doctor'
    }, {
      name: 'This user3',
      group: 'Procedure'
    }, {
      name: 'Test user1',
      group: 'Speciality'
    }, {
      name: 'Non user3',
      group: 'Speciality'
    }, {
      name: 'Test User',
      group: 'Procedure'
    },
  ];


  
  vm.getUsers = function (search) {
   var filtered = filterFilter(angular.copy(users), search);
    
    var results = _(filtered)
      .groupBy('group')
      .map(function (g) {
        g[0].firstInGroup = true;  // the first item in each group
        return g;
      })
      .flatten()
      .value();
      
      if(results!=0){
        vm.hasResult = true;
        return results;
      }else{
        return null;
        vm.hasResult = false;
      }

  }
});

  // var doctor = [
  // 	{
  // 		"id" : 0,
  // 		"name" : "Doctor 1"
  // 	},
  // 	{
  // 		"id" : 1,
  // 		"name" : "Doctor 2"
  // 	},
  // 	{
  // 		"id" : 2,
  // 		"name" : "Doctor 3"
  // 	}
  // ];

  // var speciality = [
  // 	{
  // 		"id" : 0,
  // 		"name" : "Speciality 1"
  // 	},
  // 	{
  // 		"id" : 1,
  // 		"name" : "Speciality 2"
  // 	},
  // 	{
  // 		"id" : 2,
  // 		"name" : "Speciality 3"
  // 	}
  // ];

  // var hospital = [
  // 	{
  // 		"id" : 0,
  // 		"name" : "Hospital 1"
  // 	},
  // 	{
  // 		"id" : 1,
  // 		"name" : "Hospital 2"
  // 	},
  // 	{
  // 		"id" : 2,
  // 		"name" : "Hospital 3"
  // 	}
  // ];