'use strict';
(function () {
  // Здесь я делаю рандомную расскраску персонажей

  var setupWizard = document.querySelector('.setup-wizard');

  var magesMantle = setupWizard.querySelector('.wizard-coat');

  var eyeСolor = setupWizard.querySelector('.wizard-eyes');

  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  var inputSetupFireballWrap = setupFireballWrap.querySelector('input');

  setupFireballWrap.addEventListener('click', function () {
    var randomFireballColorValue = window.characteristicsMagician.COLOR_OF_FIREBALLS[window.randomNumber.generatesAnIndexArray(window.characteristicsMagician.COLOR_OF_FIREBALLS.length)];
    setupFireballWrap.setAttribute('style', 'background-color: ' + randomFireballColorValue);
    inputSetupFireballWrap.value = randomFireballColorValue;
  });

  magesMantle.addEventListener('click', function () {
    magesMantle.style.fill = window.characteristicsMagician.COAT_COLORS[window.randomNumber.generatesAnIndexArray(window.characteristicsMagician.COAT_COLORS.length)];
  });

  eyeСolor.addEventListener('click', function () {
    eyeСolor.style.fill = window.characteristicsMagician.EYES_COLORS[window.randomNumber.generatesAnIndexArray(window.characteristicsMagician.EYES_COLORS.length)];
  });
})();

