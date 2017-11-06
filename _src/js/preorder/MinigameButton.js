/**
 * MinigameButton
 */
import Util from '../Util';
import Config from './Config';

class MinigameButton {
  constructor($node) {
    this.$node = $node;

    this.init();
  }

  init() {
    this.addEvent();
  }

  addEvent() {
    this.$node.on('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();

    var url = this.getUrl();

    this.$node.attr('href', url);

    if (this.isLogin()) {
      this.display();
    } else {
      window.location.href = this.getLoginUrl()
    }
  }

  isLogin() {
    return Config.common.bLogin;
  }

  getLoginUrl() {
    let domain;

    switch (window.location.host) {
      case 'opdev.lineagem.plaync.com':
        domain = 'http://op.mlogin.plaync.com';
        break;
      case 'rc-lineagem.plaync.com':
        domain = 'https://rc-mlogin.plaync.com';
        break;
      default:
        domain = 'https://mlogin.plaync.com';
        break;
    }

    return domain + '/login/signin?return_url=' + encodeURIComponent(window.location.href);
  }

  getUrl() {
    var domain = window.location.hostname === 'rc-lineagem.plaync.com' ? 'rc.lineagem.plaync.com' : window.location.hostname,
      url = (window.location.hostname === 'rc-lineagem.plaync.com' ? 'http://' : 'https://') + domain.replace('lineagem.plaync.com', 'minigame.plaync.com') + '/lineagem/index';

    return url;
  }

  display() {
    var url = this.getUrl();

    if (Util.isMobile()) {
      window.location.href = url;
      return false;
    } else {
      window.open(url, 'LineagemMinigamePop', 'toolbar=0,scrollbars=1,resizable=0,width=600,height=900');
    }
  }
};

module.exports = MinigameButton;