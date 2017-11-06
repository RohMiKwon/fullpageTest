/**
 * Loading
 */

import Config from './Config';

class Loading {
  constructor($node) {
    this.$node = $node;
    this.init();
  }

  init() {
    var counter = 0;
    var c = 0;


    var i = setInterval(function() {

      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");

      counter++;
      c++;

      if (counter == 101) {
        clearInterval(i);

        $(".loading-page").hide();
      }
    }, 16);

    this.addEvent();
  }

  addEvent() {}
};

module.exports = Loading;