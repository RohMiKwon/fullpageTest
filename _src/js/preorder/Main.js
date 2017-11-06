/**
* Main
*/
import Util from '../Util';
import Config from './Config';
import Fullpage from './Fullpage';
import Toggle from './Toggle';
import Menu from './Menu';
//import MovieDecorator from './MovieDecorator';
//import PreorderShare from './PreorderShare';
import MinigameButton from './MinigameButton';
import SwiperMovieGallery from './SwiperMovieGallery';
import IndexLayer from './IndexLayer';
import Loading from './Loading';
import QuickBanner from './QuickBanner';
import MenuConfig from './MenuConfig';


class Main {
	constructor(bgmovieConfig = Config.bgmovieConfig, menuConfig = MenuConfig, shareConfig = Config.shareConfig) {
		this.bgmovieConfig = bgmovieConfig;
		this.menuConfig = menuConfig;
		this.shareConfig = shareConfig;

		this.init();
	}

	init() {
		let selector = Config.selector;

		this.loading = new Loading($(selector.loading));

		//this.bgMovieDecorator = new MovieDecorator($(selector.bgMovie), this.bgmovieConfig);

		this.fullpage = new Fullpage($(selector.fullpageWrap), this.menuConfig);
		this.menu = new Menu($(selector.menuWrap));
		this.minigameButton = new MinigameButton($(selector.minigameButton));

		this.indexLayer= new IndexLayer($(selector.navIndex));

		this.mediaMovieGallery = new SwiperMovieGallery($(selector.swiperMedia), {
			slidesPerView: 4
		});

		this.introduceMovieGallery = new SwiperMovieGallery($(selector.swiperIntroduce), {
			slidesPerView: 3
		});

		this.guildMovieGallery = new SwiperMovieGallery($(selector.swiperGuild), {
			slidesPerView: 3
		});

		//this.modal = new nc.ui.Modal(Config.youtubeConfig.options);

		//this.preorderShare = new PreorderShare($(selector.preorderShare));

		this.quickBanner = new QuickBanner($(selector.quickBanner));

		this.appendShare();
		this.addEvent();
	}

	addEvent() {
		$('[data-module-id="toggle"]').each(function(index, element){
			let $toggleElement = $(element),
				$target;

			if($toggleElement.data('toggle-target')) {
				$target = $($toggleElement.data('toggle-target'));
			}

			new Toggle({
				target: $target,
				toggleElement: $toggleElement
			});
		});

		$('[data-module-id="youtube"]').on('click', (e) => {
			e.preventDefault();
			if($(e.currentTarget).data('youtube-id') == '') return;

			this.modal.setYoutubeUrl(Config.youtubeConfig.baseUrl + $(e.currentTarget).attr('data-youtube-id'));
			this.modal.show();
		});

		//when resizing the site, we adjust the heights of the sections, slimScroll...
		$(window).resize(function () {
			// rebuild immediately on touch devices
			if (Util.isMobile()) {
				$.fn.fullpage.reBuild();
			} else {
				$.fn.fullpage.setScrollingSpeed(0);
				$('.fp-easings').addClass('.fp-no-transitions');
				$.fn.fullpage.reBuild();
				$.fn.fullpage.setScrollingSpeed(700); //default one
				$('.fp-easings').removeClass('.fp-no-transitions');
			}
		});
 	}

	appendShare() {
		var $share = $('#share');

		if(!$share.length) return;

		$(document).on('click', '#share a', (e)=> this.callShareClickTrace(e));
	}

	callShareClickTrace(e){
		var currentSnsType = $(e.currentTarget).attr('class').replace('share-', ''),
			proxy = Util.get( '/event/snsShareLog.json', 'POST' , {eventCode: '170516_character', snsName : currentSnsType});

		proxy.then(() => {
			//console.log('callShareClickTrace done');
		}, () => {
			//console.log('callShareClickTrace fail');
		});
	}
};

module.exports = Main;
