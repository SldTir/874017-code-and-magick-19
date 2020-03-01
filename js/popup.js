'use strict';
(function () {
  // Здесь я открываю и закрываю попап.
  var setupElement = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupElement.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY) {
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
    if (evt.key === window.util.ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
    setupElement.removeAttribute('style');
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      closePopup();
      setupElement.removeAttribute('style');
    }
  });
})();
