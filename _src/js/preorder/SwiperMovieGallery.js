/**
 * Media
 */
import Util from '../Util';
import Config from './Config';

class SwiperMovieGallery {
  constructor($node, options) {
    this.$node = $node;
    this.settings = $.extend({}, Config.swiperMovieGalleryConfig, options);
    this.$pagination = $node.siblings('.swiper-pagination');
    this.init();
  }

  init() {
    this.setPaginationSettings();
    this.swiper = new Swiper(this.$node, this.settings);
    this.addEvent();
  }

  addEvent() {

  }

  setPaginationSettings() {
    this.settings = $.extend({}, this.settings, {
      pagination: this.$pagination,
      onPaginationRendered: (swiper) => this.onPaginationRendered(swiper)
    });
  }

  onPaginationRendered(swiper) {
    this.swiper = swiper;
    this.changePaginationDisplay();
  }

  isOnePage() {
    return this.swiper.bullets.length <= 1;
  }

  changePaginationDisplay() {
    if (this.isOnePage()) {
      this.$pagination.hide();
    } else {
      this.$pagination.show();
    }
  }
};

module.exports = SwiperMovieGallery;