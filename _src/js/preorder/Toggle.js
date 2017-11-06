/**
 * Toggle
 */

class Toggle {
  defaults() {
    return {
      toggleClass: 'is-active'
    }
  }

  constructor(settings) {
    this.$toggleElement = settings.toggleElement;
    this.$target = settings.target;
    this.options = $.extend({}, this.defaults(), settings.options);

    this.init();
  }

  init() {

    this.bindEvents();
  }

  bindEvents() {
    this.$toggleElement.on('click', $.proxy(this.onClickToggleElement, this));


  }

  onClickToggleElement(e) {
    e.preventDefault();

    var options = this.options;
    this.$toggleElement.toggleClass(options.toggleClass);

    if (this.$target) {
      this.$target.toggleClass(options.toggleClass);
    }

    $.fn.fullpage.reBuild();
  }
};

module.exports = Toggle;