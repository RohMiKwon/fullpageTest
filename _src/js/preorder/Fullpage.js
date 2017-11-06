/**
 * Fullpage
 */
import Util from '../Util';
import Config from './Config';

class Fullpage {
  constructor($node, originMenuConfig) {
    this.$node = $node;
    this.originMenuConfig = originMenuConfig;
    this.init();
  }

  init() {
    this.$node.fullpage({
      anchors: this.getMenuIds(),
      easing: 'easeInOut',
      css3: true,
      easingcss3: 'cubic-bezier(0.77,0,0.175,1)',
      scrollingSpeed: 1000,
      fixedElements: '.page-visual',
      normalScrollElements: '.ly-container, .ly-contents',
      scrollOverflow: true,
      controlArrows: false,
      navigation: true,
      navigationPosition: 'left',
      lazyLoading: true,
      verticalCentered: false,
      afterRender: this.onAfterRender,
      afterSlideLoad: this.onAfterSlideLoad,
      onSlideLeave: this.onSlideLeave
    });

    this.addEvent();
  }

  getMenuIds() {
    let activeMenuConfig = this.finedActiveMenuConfig(this.originMenuConfig),
      sortedActiveMenus = this.sortActiveMenus(activeMenuConfig),
      menuIds = this.findMenuIds(sortedActiveMenus);

    return menuIds;
  }

  finedActiveMenuConfig(list) {
    return _.where(list, {
      'isActive': 'true'
    });
  }

  sortActiveMenus(list) {
    return _.sortBy(list, 'order');
  }

  findMenuIds(list) {
    return _.pluck(list, 'sectionId');
  }

  addEvent() {
    $('.btn-preorder').on('click', function() {
      $.fn.fullpage.moveTo('preorder', 1);
    });

    $('.section-preorder .page-back').on('click', function() {
      $.fn.fullpage.moveTo('preorder', 0);
    });

    $('.section-minigame .page-back').on('click', function() {
      $.fn.fullpage.moveTo('minigame', 0);
    });

    $('.section-guild .page-back').on('click', function() {
      $.fn.fullpage.moveTo('guild', 0);
    });
  }

  onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {
    if (direction == 'right') {
      $(`.page-visual.${anchorLink}`).addClass('active');

      $('body').addClass('narrow');

      $.fn.fullpage.setAllowScrolling(false, 'down, up');
      $.fn.fullpage.setKeyboardScrolling(false, 'down, up');
    } else {
      setTimeout(function() {
        $(`.page-visual.${anchorLink}`).removeClass('active');
      }, 1200);

      $('body').removeClass('narrow');

      $.fn.fullpage.setAllowScrolling(true, 'down, up');
      $.fn.fullpage.setKeyboardScrolling(true, 'down, up');
    }
  }
};

module.exports = Fullpage;