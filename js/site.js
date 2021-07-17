$(document).ready(function() {
  var $nav = $('.navbar');
  var $navbarToggle = $('.navbar-toggle');
  var $window = $(window);
  var $body = $('body');
  var navOffsetTop = $nav.offset().top;

  function init() {
    $window.on('scroll', onScroll);
    $window.on('resize', resize);
    $navbarToggle.on('click', onNavbarToggle);
    $('a[href^="#"]').on('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function resize() {
    $body.removeClass('has-docked-nav');
    navOffsetTop = $nav.offset().top;
    onScroll();
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav');
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav');
    }
  }

  function onNavbarToggle() {
    if ($body.hasClass('always-display-navbar')) {
      $body.removeClass('always-display-navbar');
    } else {
      $body.addClass('always-display-navbar');
    }
  }

  init();
});