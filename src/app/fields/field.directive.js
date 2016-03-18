(function() {
  'use strict';

  angular
    .module('test')
    .directive('field', field);

  /** @ngInject */
  function field() {
  	return {
  		restrict: 'E',
  		scope: {
  			field: "=field"
  		},
  		templateUrl: "app/fields/field.tpl.html"
  	}
  }

})();