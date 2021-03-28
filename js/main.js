$(function(){
    'use strict';
    $(window).scroll (function(){

        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height() ){

            navbar.addClass('scrolled');

        } else{

            navbar.removeClass('scrolled');
        }
    });
    // add class selected to  click tab  and remove other tabs
    $('.tab-switch li').click(function(){

     $(this).addClass('selected').siblings().removeClass('selected');   
    });
});