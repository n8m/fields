(function() {
  'use strict';

  angular
    .module('test')
    .factory('fields', fields);

  /** @ngInject */
  function fields() {

    var fields = [
      {name: "first name", selected: false, type: "text", value: null, required: true},
      {name: "second name", selected: false, type: "text", value: null, required: false},
      {name: "age", selected: false, type: "number", value: null, required: false},
      {name: "date of birth", selected: false, type: "date", value: null, required: false},
      {name: "gender", selected: false, type: "select", value: null, values:[{title: "male", value: "m"},{title: "female", value: "f"},{title: "other", value: "0_o"}]},
    ];

    return fields;

  }

})();