(function() {
  'use strict';

  angular
    .module('test')
    .controller('SecondController', SecondController);

  /** @ngInject */
  function SecondController(fields) {
    var vm = this;
    vm.fields = fields;
  }
})();
