/**
 * IndexLayer
 */
import Util from '../Util';
import Config from './Config';
import Fullpage from './Fullpage';

class IndexLayer {
  constructor($node) {
    this.$node = $node;
    this.$layer = this.$node.find('.layer-index');
    this.$layerToggle = this.$node.find('.btn-layer-toggle');

    this.init();
  }

  init() {
    this.addEvent();
  }

  addEvent() {
    this.$layerToggle.on('click', (e) => this.onClickLayerToggleButton(e));
    this.$layer.on('click', () => this.onClickLayer());
  }

  onClickLayerToggleButton(e) {
    e.preventDefault();
    let $layer = this.$layer,
      $layerToggle = this.$layerToggle;

    $layerToggle.toggleClass('is-active');

    if ($layerToggle.hasClass('is-active')) {
      $layer.addClass('is-active');

      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
    } else {
      $layer.removeClass('is-active');

      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    }
  }

  onClickLayer() {
    let $layer = this.$layer,
      $layerToggle = this.$layerToggle;

    $layerToggle.removeClass('is-active');
    $layer.removeClass('is-active');

    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
  }
};

module.exports = IndexLayer;