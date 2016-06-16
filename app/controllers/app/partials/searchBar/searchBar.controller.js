// (function() {
// 	'use strict';

// 	angular
// 		.module('symptum')
// 		.controller('SearchBarController' , controller);

// 	function controller(){
// 		var vm = this;
// 		var selected;
// 		vm.data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 
// 		'California', 'Colorado', 'Connecticut', 'Delaware', 
// 		'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 
// 		'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
// 		'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 
// 		'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
// 		'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 
// 		'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
// 		'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
// 		'Wisconsin', 'Wyoming'];

// 		vm.data_response = function(value) {
// 			if (arguments.length){
// 				selected = value;
// 			}
// 			else{
// 				return selected;
// 			}
// 		}

// 		vm.data_response_options = {
// 			debounce: {
// 				default: 500,
// 				blur: 250
// 			},
// 			getterSetter: true
// 		}
// 	}
// })();



angular
	.module('symptum')
	.controller('SearchBarController', function ($scope, filterFilter) {

	var vm = this;
  $scope.selectedUser = '';
  
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



  var doctor = [
  	{
  		"id" : 0,
  		"name" : "Doctor 1"
  	},
  	{
  		"id" : 1,
  		"name" : "Doctor 2"
  	},
  	{
  		"id" : 2,
  		"name" : "Doctor 3"
  	}
  ];

  var speciality = [
  	{
  		"id" : 0,
  		"name" : "Speciality 1"
  	},
  	{
  		"id" : 1,
  		"name" : "Speciality 2"
  	},
  	{
  		"id" : 2,
  		"name" : "Speciality 3"
  	}
  ];

  var hospital = [
  	{
  		"id" : 0,
  		"name" : "Hospital 1"
  	},
  	{
  		"id" : 1,
  		"name" : "Hospital 2"
  	},
  	{
  		"id" : 2,
  		"name" : "Hospital 3"
  	}
  ];


  
  vm.getUsers = function (search) {
    var filtered = filterFilter(users, search);
    
    var results = _(filtered)
      .groupBy('group')
      .map(function (g) {
        g[0].firstInGroup = true;  // the first item in each group
        return g;
      })
      .flatten()
      .value();
      
    console.log(results);
    
    return results;
  }
});