/**
 * Layer
 */

import Config from './Config';

class Layer {
  constructor($node) {
    this.$node = $node;
    this.$body = $('body');
    this.$close = this.$node.find('[data-close="dismiss"]');
    this.init();
  }

  init() {
    this.addEvent();
  }

  addEvent() {
    this.$close.on('click', (e) => this.hide(e));
  }

  getWrapperElement() {
    return this.$node;
  }

  show() {
    this.$node.addClass('is-show');
    this.$body.addClass('ly-active');
  }

  hide(e, cb) {
    this.$node.removeClass('is-show');
    $('body').removeClass('ly-active');

    if (typeof cb != 'undefined') {
      cb();
    }
  }
};

module.exports = Layer;