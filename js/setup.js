/* eslint-disable no-console */
// Файл setup.js
'use strict';
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var NUMBER_OF_WIZARDS = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктория', 'Юлия', 'Люпина', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COLOR_OF_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var magesMantle = setupWizard.querySelector('.wizard-coat');
var eyeСolor = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var inputSetupFireballWrap = setupFireballWrap.querySelector('input');

setupFireballWrap.addEventListener('click', function () {
  var randomFireballColorValue = COLOR_OF_FIREBALLS[generatesAnIndexArray(COLOR_OF_FIREBALLS.length)];
  setupFireballWrap.setAttribute('style', 'background-color: ' + randomFireballColorValue);
  inputSetupFireballWrap.value = randomFireballColorValue;
});

magesMantle.addEventListener('click', function () {
  magesMantle.style.fill = COAT_COLORS[generatesAnIndexArray(COAT_COLORS.length)];
});

eyeСolor.addEventListener('click', function () {
  eyeСolor.style.fill = EYES_COLORS[generatesAnIndexArray(EYES_COLORS.length)];
});

setupUserName.addEventListener('invalid', function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  } else {
    setupUserName.setCustomValidity('');
  }
});

setupUserName.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
    evt.stopPropagation();
  }
});

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});


setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var generatesAnIndexArray = function (number) {
  var randomArrayIndex = Math.floor(Math.random() * number);
  return randomArrayIndex;
};

var wizards = [];
var createsMages = function (numberOfMages) {
  for (var i = 1; i <= numberOfMages; i++) {
    var mage = {
      name: WIZARD_NAMES[generatesAnIndexArray(WIZARD_NAMES.length)],
      surname: WIZARD_SURNAMES[generatesAnIndexArray(WIZARD_SURNAMES.length)],
      coatColor: COAT_COLORS[generatesAnIndexArray(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[generatesAnIndexArray(EYES_COLORS.length)]
    };
    wizards.push(mage);
  }
};

createsMages(NUMBER_OF_WIZARDS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
