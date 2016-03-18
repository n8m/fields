(function() {
  'use strict';

  angular
    .module('test')
    .controller('FirstController', FirstController);

  /** @ngInject */
  function FirstController(fields) {
    var vm = this;
    vm.fields = fields;
  }

})();
