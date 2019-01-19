$(document).ready(() => {
 
  adusjstBannerHeight();

  $(window).on('resize', () => {
    adusjstBannerHeight();
  });

  setTimeout(() => {
    $('.js-logo').addClass('appear');
  }, 100);

  setTimeout(() => {
    $('.js-mainHeader').addClass('appear');
  }, 800);  

  setTimeout(() => {
    $('.js-locationWrap').addClass('appear');
  }, 1500);

  $('.js-selectBox').on('change', (e) => {
    $('.js-locationinput').val('');
    $('.js-inputPlaceholder').removeClass('hide');
    if(e.currentTarget.value !== 'default') {
      $(e.currentTarget).addClass('shiftLeft');
      setTimeout(() => {
        $('.js-inputPlaceholder').addClass('appear');
        $('.js-locationinput').addClass('appear');
      }, 100);
    }else {
      $('.js-locationinput').removeClass('appear');
      $('.js-inputPlaceholder').removeClass('appear');
      setTimeout(() => {
        $(e.currentTarget).removeClass('shiftLeft');
      }, 100);
    }
  });

  $('.js-locationinput').on('keyup', (e) => {
    if(e.currentTarget.value.length) {
      $('.js-inputPlaceholder').addClass('hide');
    }else {
      $('.js-inputPlaceholder').removeClass('hide');
    }
  });

  // NOTE: Search product icon click effect 
  $('.js-searchProduct').on('click', (e) => {
    $(e.currentTarget).toggleClass('change');
    $('.js-righNavWrap').toggleClass('searchActive');
    $('.js-headerLogo').toggleClass('hide');
    $('.js-productPlaceholer').toggleClass('appear');
    $('.js-productSearchInput').toggleClass('appear');
  });

  $('.js-productSearchInput').on('keyup', (e) => {
    if(e.currentTarget.value.length) {
      $('.js-productPlaceholer').addClass('hide');
    }else {
      $('.js-productPlaceholer').removeClass('hide');
    }
  });

  // NOTE: Scroll window to cateogry section
  $(window).on('scroll', (e) => {
    if($(window).scrollTop() > 50) {
      $('.js-locationWrap, .js-exploreMore').addClass('disappear');
    }else {
      $('.js-locationWrap, .js-exploreMore').removeClass('disappear');
    }
    if($(window).scrollTop() > 300) {
      $(".js-navigation").addClass('menuActive');
    }else {
      $(".js-navigation").removeClass('menuActive');
    }
  }); 
  $('.js-exploreMore').on('click', () => {
    $('html, body').animate({
      'scrollTop' : $(".js-categorySection").position().top
    }, 1000, () => {
      $(".js-navigation").addClass('menuActive');
    });
  });
});

const adusjstBannerHeight = () => {
  let windowWidth = $(window).outerWidth();
  let windowHeight = $(window).outerHeight();
  $(".js-banner").css('height', windowHeight);
  $(".js-categorySection").css('min-height', windowHeight);
}