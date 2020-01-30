// Файл setup.js
'use strict';
var NUMBER_OF_WIZARDS = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктория', 'Юлия', 'Люпина', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var generatorArrayIndex = function (number) {
  var randomArrayIndex = Math.floor(Math.random() * number);
  return randomArrayIndex;
};

var wizards = [];
var createMage = function (numberMages) {
  for (var i = 1; i <= numberMages; i++) {
    var mage = {
      name: WIZARD_NAMES[generatorArrayIndex(WIZARD_NAMES.length)],
      surname: WIZARD_SURNAME[generatorArrayIndex(WIZARD_SURNAME.length)],
      coatColor: COAT_COLOR[generatorArrayIndex(COAT_COLOR.length)],
      eyesColor: EYES_COLOR[generatorArrayIndex(EYES_COLOR.length)]
    };
    wizards.push(mage);
  }
  return wizards;
};

createMage(NUMBER_OF_WIZARDS);

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
