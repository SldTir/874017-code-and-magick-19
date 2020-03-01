'use strict';
(function () {
  //Здесь я вызываю случайные числа.
  var generatesAnIndexArray = function (number) {
    var randomArrayIndex = Math.floor(Math.random() * number);
    return randomArrayIndex;
  };
  window.randomNumber = {
    generatesAnIndexArray: generatesAnIndexArray
  };
})();
