'use strict';
(function () {
  // Здесь я отрисовываю похожих магов.
  var NUMBER_OF_WIZARDS = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var wizards = [];
  var createsMages = function (numberOfMages) {
    for (var i = 1; i <= numberOfMages; i++) {
      var mage = {
        name: window.characteristicsMagician.WIZARD_NAMES[window.randomNumber.generatesAnIndexArray(window.characteristicsMagician.WIZARD_NAMES.length)],
        surname: window.characteristicsMagician.WIZARD_SURNAMES[window.randomNumber.generatesAnIndexArray(window.characteristicsMagician.WIZARD_SURNAMES.length)],
        coatColor: window.characteristicsMagician.COAT_COLORS[window.randomNumber.generatesAnIndexArray(window.characteristicsMagician.COAT_COLORS.length)],
        eyesColor: window.characteristicsMagician.EYES_COLORS[window.randomNumber.generatesAnIndexArray(window.characteristicsMagician.EYES_COLORS.length)]
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
})();
