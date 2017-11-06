/**
 * Main
 */
import Util from '../Util';
import Config from './Config';

class MovieDecorator {
  constructor($node, bgmovieConfig = Config.bgmovieConfig) {
    this.originConfig = bgmovieConfig;

    this.bgMovie = new ui.ncCanvasMovie($node, this.getConfig());

    $(document).on('click', 'body', (e) => {
      this.bgMovie.play();
    });

    $(this.bgMovie.video).one('canplay', function() {
      //console.log('canplay');
    });

    this.init();
  }

  init() {
    this.addEvent();
  }

  getConfigByDevice() {
    var config = this.originConfig;

    return Util.isMobile() ? config.mobile : config.pc;
  }

  getConfig() {
    return $.extend({}, this.getConfigByDevice(), {
      endedCallback: this.onEndedCallback()
    });
  }

  addEvent() {

  }

  onEndedCallback() {
    //alert('test');
  };

};

module.exports = MovieDecorator;