/*
 Template Name: Bayhome
 File Name:scrolling-nav.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("nav-scroll");
    } else {
        $(".navbar-fixed-top").removeClass("nav-scroll");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-brand > span").addClass("tv-scroll-logo");
    } else {
        $(".navbar-brand > span").removeClass("tv-scroll-logo");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-nav").addClass("menu-active");
    } else {
        $(".navbar-nav").removeClass("menu-active");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-collapse").addClass("menu-active");
    } else {
        $(".navbar-collapse").removeClass("menu-active");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
