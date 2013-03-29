define(function(require, exports, module) {
  var $ = require('$');
  var Base = require('base');
  var Select = require('./select');

  var CascadeSelect = Base.extend({
    attrs: {
      deep: 3,
      triggerTemplate: '',
      classPrefix: '',
      model: {}
    },

    initialize: function(config) {
      CascadeSelect.superclass.initAttrs.call(CascadeSelect, config);

      while() {

      }
    }
  });

  module.exports = CascadeSelect;
  module.exports._completeModel = completeModel;

  function completeModel(model) {

  }
});