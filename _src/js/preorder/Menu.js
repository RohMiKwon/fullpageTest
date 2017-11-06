/**
 * Menu
 */

import Config from './Config';

class Menu {
  constructor($node) {
    this.$node = $node;
    this.$swiperMenu = this.$node.find('#swiper-menu');
    this.$menu = this.$node.find('#menu');
    this.$flipmenu = this.$node.find('#flip-menu');
    this.init();
  }

  init() {
    this.swiper = new Swiper(this.$swiperMenu, {
      grabCursor: true,
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      onTap: (swiper, e) => {
        if (swiper.clickedIndex == swiper.activeIndex) {
          var sectionId = $(swiper.clickedSlide).data('section-id');

          $.fn.fullpage.moveTo(sectionId);
        }
      }
    });

    this.addEvent();
  }

  addEvent() {
    this.$menu.on('mouseover', '.menu', function(e) {
      $(e.delegateTarget).find('a').removeClass('is-active');
      $(e.currentTarget).addClass('is-active');
    });

    this.$flipmenu.on('mouseover', '.flip-container', function(e) {
      $(e.delegateTarget).find('.flip-container').removeClass('is-active');
      $(e.currentTarget).addClass('is-active');
    });
  }
};

module.exports = Menu;