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
        $('.js-innerBanner').addClass('active');
      }, 100);
    }else {
      $('.js-innerBanner').removeClass('active');
      $('.js-locationinput').removeClass('appear');
      $('.js-inputPlaceholder').removeClass('appear');
      setTimeout(() => {
        $(e.currentTarget).removeClass('shiftLeft');
      }, 100);
    }
  });
  
  $('.js-innerBanner').on('click', (e) => {
    e.stopPropagation();
    $(e.currentTarget).removeClass('active');
  });

  $('.js-selectBox, .js-locationinput').on('click', (e) => {
    e.stopPropagation();
    $('.js-innerBanner').addClass('active');
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
    $('.js-banner').toggleClass('active');
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