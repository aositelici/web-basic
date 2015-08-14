'use strict';

function InfoHelper() {

}

InfoHelper.prototype.getUserInfo = function (inputs) {
  if (inputs) {
    return {
      name: inputs.name,
      class: inputs.class,
      number: inputs.number
    }
  }
  else {
    return {
      name: '',
      class: '',
      number: ''
    }
  }
};

module.exports = InfoHelper;