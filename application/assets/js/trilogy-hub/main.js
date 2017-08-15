;(function () {
    'use strict';

    window.sr = ScrollReveal();

    var config = {
      distance    : '80px',
      duration    : 800,
      viewFactor  : 0.3,
      easing   : 'ease-in-out',
      delay: 0.2,
      scale      : 1,
      afterReveal: function (domEl) {
        // console.log('test');
      }
    };

    var reset = {
      reset: true,
      viewOffset: { top: 24 }
    }


    sr.reveal('.trihub__item', config);
    sr.reveal(".trihub__item", reset);




}());
