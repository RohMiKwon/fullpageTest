let Config = {
  common: {
    path: window._path ? window._path : '',
    device: window._device ? window._device : '',
    serverEnv: window._serviceEnv ? window._serviceEnv : '',
    home: window._home ? window._home : '',
    bLogin: window.isLoginFlag ? (window.isLoginFlag === 'true') : false
  },

  selector: {
    fullpageWrap: '#preorder-main',
    minigameButton: '#btn-minigame',
    quickNavi: '.quick-nav',
    bgMovie: '#bg-movie',
    menuWrap: '#menu-wrap',
    swiperMedia: '#swiper-media',
    swiperIntroduce: '#swiper-introduce',
    swiperGuild: '#swiper-guild',
    preorderShare: '#preorderShare',
    loading: '.loading-page',
    quickBanner: '#quick-banner',
    navIndex: '.nav-index'
  },

  bgmovieConfig: {
    pc: {
      autoplay: false,
      poster: '',
      movieUrl: '',
      movieWidth: 1920,
      movieHeight: 1080
    },
    mobile: {
      autoplay: false,
      poster: '',
      movieUrl: '',
      movieWidth: 1920,
      movieHeight: 1080
    }
  },

  youtubeConfig: {
    baseUrl: 'https://www.youtube.com/embed/',
    options: {
      type: 'youtube',
      isEsc: true,
      movieParams: '?vq=hd720&autoplay=1&version=3&enablejsapi=1&rel=0',
      isAutoButton: true
    }
  },

  shareConfig: {
    $parent: $('#share'),
    appver: '1.0',
    appname: '',
    order: ['facebook', 'twitter', 'kakaostory', 'kakaotalk'],
    msg: $('title').text(),
    description: $('meta[name="description"]').attr('content'),
    img: '',
    imgWidth: 300,
    imgHeight: 157,
    buttonMsg: '',
    url: ''
  },

  swiperMovieGalleryConfig: {
    slidesPerView: 4,
    spaceBetween: 5,
    pagination: '',
    paginationClickable: true,
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      960: {
        slidesPerView: 3
      }
    }
  }
};

module.exports = Config;