'use strict';
(function () {
  var generatesAnIndexArray = function (number) {
    var randomArrayIndex = Math.floor(Math.random() * number);
    return randomArrayIndex;
  };

  window.util = {
    generatesAnIndexArray: generatesAnIndexArray
  };
})();
