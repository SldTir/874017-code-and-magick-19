'use strict';
(function () {
  // Здесь я отрисовываю похожих магов.
  var NUMBER_OF_WIZARDS = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');


  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      userDialog.classList.add('hidden');
    }, window.errorHandler);
    evt.preventDefault();
  });

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(successHandler, window.errorHandler);
})();
