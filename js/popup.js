'use strict';
(function () {
  // Здесь я открываю и закрываю попап.
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setupElement = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupElement.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
      setupElement.removeAttribute('style');
    }
  };

  var openPopup = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
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
    setupElement.removeAttribute('style');
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
      setupElement.removeAttribute('style');
    }
  });

  setupUserName.addEventListener('keydown', function (evt) {
    if (evt.key === ESC_KEY) {
      evt.stopPropagation();
    }
  });
})();
