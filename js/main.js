const whiteSections = ["about", "contains", "request"];

$(window).scroll(function () {
  let $sections = $('section, footer');
  $sections.each(function (i, el) {
    let top = $(el).offset().top - 300;
    let bottom = top + $(el).height();
    let scroll = $(window).scrollTop();
    let id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('.anchor-nav__link.anchor-nav__link--active').removeClass('anchor-nav__link--active anchor-nav__link--active-white');
      $('a.anchor-nav__link[href="#' + id + '"]').addClass('anchor-nav__link--active');
      if (whiteSections.some(item => item === id)) {
        $('a.anchor-nav__link[href="#' + id + '"]').addClass('anchor-nav__link--active-white');
      }
    }
  })
});

$(".anchor-nav, .nav").on("click", "a", function (event) {
  event.preventDefault();
  closeMobileMenu();
  let id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});

let menuBurger = $('.menu-burger');
let mobMenu = $('.mob-menu');

menuBurger.click(function () {
  isOpenMobileMenu() ? closeMobileMenu() : openMobileMenu();
});

function openMobileMenu() {
  menuBurger.addClass('is-open');
  mobMenu.addClass('mob-menu--is-open');
  $('body').addClass('scroll-hidden');
}

function closeMobileMenu() {
  menuBurger.removeClass('is-open');
  mobMenu.removeClass('mob-menu--is-open');
  $('body').removeClass('scroll-hidden');
}

function isOpenMobileMenu() {
  return mobMenu.hasClass('mob-menu--is-open');
}

$('#btn-to-request').on('click', function (e) {
  e.preventDefault();

  let top = $(".contact-form-footer").offset().top;
  $('body,html').animate({scrollTop: top}, 800);
});
