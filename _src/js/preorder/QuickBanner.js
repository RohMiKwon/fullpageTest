/**
 * QuickBanner
 */

import Config from './Config';
import Util from '../Util';

class QuickBanner {
  constructor($node) {
    this.$node = $node;
    this.$close = this.$node.find('[data-close="dismiss"]');
    this.init();
  }

  init() {
    this.setCookieName();
    this.process();
    this.addEvent();
  }

  addEvent() {
    this.$close.on('click', (e) => this.onClick(e));
  }

  setCookieName() {
    this.cookiePrefix = "prederorder_banner";
    this.cookieValue = this.$node.data('cookie-value');
    this.cookieName = `${this.cookiePrefix}_${this.cookieValue}`;
  }

  process() {
    if (Util.getCookie(this.cookieName)) {
      this.hide();
    } else {
      this.show();
    }
  }

  onClick() {
    Util.setCookie(this.cookieName, this.cookieValue, 1);
    this.hide();
  }

  show() {
    this.$node.addClass('is-active');
  }

  hide() {
    this.$node.removeClass('is-active');
  }
};

module.exports = QuickBanner;