"use strict";

$(document).ready(function () {
  /* $('#coverage').click(function () {
  	$('#consult-coverage-modal').addClass('open');
  	$('body').css('overflow', 'hidden');
  });
  
  $('.btn-cancel-consult').click(function () {
  	$('#consult-coverage-modal').removeClass('open');
  	$('body').css('overflow', 'auto');
  });
  */

  $(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 100 //100 é a altura do seu header fixo
        }, 0);
      }
    });
  });
  $('.blog-list__item').click(function () {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $(this).find('.description__title iconify-icon').attr('icon', 'ic:round-minus');
    } else {
      $(this).find('.description__title iconify-icon').attr('icon', 'ph:plus-bold');
    }
  });
  $('.s-faq__accordion-header').click(function () {
    var content = $(this).next('.s-faq__accordion-content');
    var icon = $(this).find('.icon');
    if (content.is(':visible')) {
      content.removeClass('open');
      content.slideUp();
      icon.attr('icon', 'ph:caret-down-bold');
    } else {
      content.addClass('open');
      content.slideDown();
      icon.attr('icon', 'ph:caret-up-bold');
    }
  });
  var buttonSettings = {
    'oi-play': {
      sectionClass: 'black',
      contentClass: 'part-one',
      buttonClass: 'white'
    },
    'oi-e': {
      sectionClass: 'white',
      contentClass: 'part-two',
      buttonClass: 'black'
    },
    'oi-expert': {
      sectionClass: 'green',
      contentClass: 'part-three',
      buttonClass: 'white'
    }
  };
  $('.s-know-products__nav .nav__item button').click(function () {
    var buttonType = $(this).attr('class').split(' ')[1];
    var settings = buttonSettings[buttonType];
    $('.s-know-products__nav .nav__item button').removeClass('active');
    $(this).addClass('active');
    $('.s-know-products').removeClass('black white green').addClass(settings.sectionClass);
    $('.s-know-products__content').hide();
    $('.' + settings.contentClass).show();
    if (buttonType === 'oi-e') {
      $('.s-know-products__nav .nav__item button').removeClass('white').addClass('black');
      $(this).removeClass('white').addClass('black');
    } else {
      $('.s-know-products__nav .nav__item button').removeClass('black').addClass('white');
    }
  });
  $('.s-know-products__nav .nav__item button:first').addClass('active');
  $('.s-know-products__content').hide();
  $('.part-one').show();
});
$(document).ready(function () {
  $('.card-plan').each(function () {
    $(this).find('.price-500-default').addClass('active');
    $(this).find('.price-400-default').addClass('active');
    $(this).find('.price-1000-default').addClass('active');
    $(this).find('.price-x-default').addClass('active');
  });
  $('.settings__btn').on('click', function () {
    var parentCard = $(this).closest('.card-plan');
    var priceClass = $(this).attr('class').split(' ').filter(function (c) {
      return c.startsWith('price-');
    })[0];
    var alreadyActive = $(this).children('.combo-icon').hasClass('active');
    parentCard.find('.active').removeClass('active');
    if (!alreadyActive) {
      parentCard.find('.' + priceClass).addClass('active');
      $(this).children('.combo-icon').addClass('active');
    } else if (parentCard.find('.combo-icon.active').length === 0) {
      parentCard.find('.price-500-default').addClass('active');
    }
    if (!alreadyActive) {
      parentCard.find('.' + priceClass).addClass('active');
      $(this).children('.combo-icon').addClass('active');
    } else if (parentCard.find('.combo-icon.active').length === 0) {
      parentCard.find('.price-400-default').addClass('active');
    }
    if (!alreadyActive) {
      parentCard.find('.' + priceClass).addClass('active');
      $(this).children('.combo-icon').addClass('active');
    } else if (parentCard.find('.combo-icon.active').length === 0) {
      parentCard.find('.price-1000-default').addClass('active');
    }
    if (!alreadyActive) {
      parentCard.find('.' + priceClass).addClass('active');
      $(this).children('.combo-icon').addClass('active');
    } else if (parentCard.find('.combo-icon.active').length === 0) {
      parentCard.find('.price-x-default').addClass('active');
    }
    $('.card-plan').not(parentCard).removeClass('active');
    if (parentCard.find('.combo-icon.active').length > 0) {
      parentCard.addClass('active');
    } else {
      parentCard.removeClass('active');
    }
  });
  $('.details-offer').on('click', function () {
    $(this).closest('.card-plan').find('.card-plan__offer-details').addClass('open');
  });
  $('.card-plan__offer-details .close-modal-offer').on('click', function () {
    $(this).closest('.card-plan__offer-details').removeClass('open');
  });
  $('.footer-list__btn').on('click', function () {
    $(this).closest('.card-plan').find('.footer__list').toggleClass('open');
    $(this).closest('.card-plan').find('.card-plan__offer-details').removeClass('open');
  });
});
$(document).ready(function () {
  $('.contact-us__step-1 .btn-txt').click(function () {
    $('.contact-us__step-1').hide();
    $('.contact-us__step-2').show();
  });
});