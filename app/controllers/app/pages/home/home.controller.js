(function(){
  angular
  .module('symptum')
  .controller('HomeController' , controller);

function controller(){
    var vm = this;
    var selected;
    vm.data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 
    'California', 'Colorado', 'Connecticut', 'Delaware', 
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 
    'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
     'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 
     'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
      'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
      'Wisconsin', 'Wyoming'];

    vm.data_response = function(value) {
      if (arguments.length){
        selected = value;
      }
      else{
        return selected;
      }
    }

    vm.data_response_options = {
      debounce: {
        default: 500,
        blur: 250
      },
      getterSetter: true
    }
}
})();