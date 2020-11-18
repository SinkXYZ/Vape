/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/vape/scripts.js":
/*!**************************************!*\
  !*** ./resources/js/vape/scripts.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({});
  var cloud_1 = $('.cloud_1');
  var cloud_2 = $('.cloud_2');
  var content_cloud_1 = $('.content_cloud_1');
  var content_cloud_2 = $('.content_cloud_2');
  var purchase_cloud_1 = $('.purchase_cloud_1');
  var purchase_cloud_2 = $('.purchase_cloud_2');
  var cloud_1_top = parseInt(cloud_1.css('left'));
  var cloud_2_top = parseInt(cloud_2.css('left'));
  var content_cloud_1_top = parseInt(content_cloud_1.css('right'));
  var content_cloud_2_top = parseInt(content_cloud_2.css('left'));
  var purchase_cloud_1_top = parseInt(purchase_cloud_1.css('top'));
  var purchase_cloud_2_top = parseInt(purchase_cloud_2.css('left'));
  $(window).scroll(function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    cloud_1.css('left', cloud_1_top + scrollTop / 20 + 'px');
    cloud_2.css('left', cloud_2_top + scrollTop / 20 + 'px');
    var first_breackpoint = 200;

    if (scrollTop > first_breackpoint) {
      content_cloud_1.css('right', content_cloud_1_top + (scrollTop - first_breackpoint) / 10 + 'px');
      content_cloud_2.css('left', content_cloud_2_top + (scrollTop - first_breackpoint) / 10 + 'px');
    }
  });
  var link_a_all_second = $('.sub_menu li.li_second');
  link_a_all_second.on('click', function () {
    var click = $(this).children('a');
    var next_block = click.parent().children('.text_second');

    if (click.hasClass('view')) {
      click.removeClass('view');
      next_block.removeClass('view');
    } else {
      var link_a_all_second_a = $('.sub_menu .li_second a');
      var link_a_all_second_text_second = $('.sub_menu .li_second .text_second');
      link_a_all_second_a.removeClass('view');
      link_a_all_second_text_second.removeClass('view');
      click.addClass('view');
      next_block.addClass('view');
    }

    return false;
  });
  var link_a_more_all = $('.purchase .down_block a.more');
  var two_open_block_all = $('.purchase .wrapper_block .block');
  link_a_more_all.hover(function () {
    var click = $(this);
    var block_right_left = click.parent().parent().parent();
    block_right_left.addClass('view');
  }, function () {
    var click = $(this);
    var block_right_left = click.parent().parent().parent();
    var block_open = click.parent('.down_block');
    var block_right_left_all = $('.purchase .wrapper_block .block');
    block_right_left_all.removeClass('open');

    if (!block_open.hasClass('view')) {
      block_right_left.removeClass('view');
    }
  });
  link_a_more_all.on('click', function () {
    var click = $(this);
    var block_open = click.parent('.down_block');
    var block_right_left = click.parent().parent().parent();

    if (block_open.hasClass('view')) {
      block_open.removeClass('view');
      block_right_left.removeClass('view');
      block_right_left.removeClass('open');
      click.text('Learn more / Features');
    } else {
      link_a_more_all.text('Learn more / Features');
      two_open_block_all.removeClass('view');
      var down_block = $('.down_block');
      down_block.removeClass('view');
      block_open.addClass('view');
      block_right_left.addClass('view');
      click.text('Hide / Features');
    }

    return false;
  });
  var block_pattern_all = $('.block.pattern');
  var link_a_all = $('.block.pattern a');
  /*Expand divs in 3x2 grid (welcome-page)- disabled*/

  /*block_pattern_all.on('click', function(){
  	var block_pattern = $(this);
  	var link_a = block_pattern.children().children('a');
  	var block_info = block_pattern.children('.block_info');
  	var block_info_all = $('.block_info');
  	if (block_pattern.hasClass('view')) {
  		block_info.removeClass('view');
  		block_pattern.removeClass('view');
  		link_a.text('Learn more');
  	} else {
  		block_info_all.removeClass('view');
  		link_a_all.text('Learn more');
  		block_pattern_all.removeClass('view');
  			block_info.addClass('view');
  		block_pattern.addClass('view');
  		link_a.text('Hide');
  	}
  	return false;
  })*/

  var li_link = $('.purchase .block_open li.li_first');
  li_link.on('click', function () {
    var click = $(this);
    var block_open = click.parent().parent();
    var block_open_height = block_open.height();
    var block_right_left = block_open.parent().parent().parent();
    var sub_menu = $('.purchase .sub_menu');
    sub_menu.height('block_open_height');

    if (click.hasClass('view')) {
      click.removeClass('view');
      block_right_left.removeClass('open');
    } else {
      li_link.removeClass('view');
      click.addClass('view');
      block_right_left.addClass('open');
    }

    return false;
  });
  var button_blue = $('.button.block_1');
  var button_gradient = $('.button.block_2');
  button_blue.click(function () {
    var destination = $('.container_2').offset().top;
    $('html, body').animate({
      scrollTop: destination
    }, 600);
    return false;
  });
  button_gradient.click(function () {
    var destination = $('.purchase').offset().top;
    $('html, body').animate({
      scrollTop: destination
    }, 600);
    return false;
  });
  var menu_toggle = $('.menu_toggle');
  menu_toggle.on('click', function () {
    var click = $(this);
    var menu_toggle_sub = click.next('.sidebar_menu_hidden');
    var menu_toggle_sub_all = $('.page_content .sidebar_menu_hidden');

    if (menu_toggle_sub.hasClass('open')) {
      menu_toggle_sub.removeClass('open');
      click.removeClass('open');
    } else {
      menu_toggle_sub_all.removeClass('open');
      menu_toggle_sub.addClass('open');
      click.addClass('open');
    }

    return false;
  });
  var links_a = $('.sidebar_menu_hidden a');
  links_a.click(function () {
    var elementClick = '#' + $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({
      scrollTop: destination
    }, 1100);
    return false;
  });
  var menu_firts_level_link = $('.menu_firts_level.link');
  menu_firts_level_link.click(function () {
    var elementClick = '#' + $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({
      scrollTop: destination
    }, 1100);
    return false;
  });
  var vc_tta_panel = $('.vc_tta-panel');
  var vc_tta_panel_body_all = $('.vc_tta-panel-body');
  var speed = 250;
  vc_tta_panel.on('click', function (e) {
    var click = $(this);

    if (!$(e.target).hasClass('forum-link')) {
      var vc_tta_panel_body = click.children('.vc_tta-panel-body');

      if (click.hasClass('view')) {
        click.removeClass('view');
      } else {
        vc_tta_panel.removeClass('view');
        click.addClass('view');
      }

      return false;
    }
  });
  var inputs = $('.contact .form input');
  var form = $('.contact .form');
  inputs.hover(function () {
    form.addClass('view');
  }, function () {
    form.removeClass('view');
  });
  var inputs = $('.contact .form select');
  inputs.hover(function () {
    form.addClass('view');
  }, function () {
    form.removeClass('view');
  });
  var inputs = $('.contact .form textarea');
  inputs.hover(function () {
    form.addClass('view');
  }, function () {
    form.removeClass('view');
  });
  var inputs_login = $('.login input');
  var form_login = $('#loginform');
  inputs_login.hover(function () {
    form_login.addClass('view');
  }, function () {
    form_login.removeClass('view');
  });
  /*Purchase Form*/

  function checkRadioButtons() {
    var button_choice_1 = $('.block_choice_1 .first_product input');
    var button_choice_2 = $('.block_choice_1 .second_product input');
    var block_choice_1 = $('.block_choice_1');
    var block_choice_2 = $('.block_choice_2');
    var block_choice_2_v3 = $('.v3_block_choice_2');
    var block_choice_3 = $('.block_choice_3');

    if (button_choice_1.prop("checked")) {
      block_choice_1.addClass('green');
      block_choice_1.removeClass('blue');
      block_choice_2.addClass('green');
      block_choice_2.removeClass('blue');
      block_choice_2_v3.addClass('green');
      block_choice_2_v3.removeClass('blue');
      block_choice_3.addClass('green');
      block_choice_3.removeClass('blue');
    }

    if (button_choice_2.prop("checked")) {
      block_choice_1.removeClass('green');
      block_choice_1.addClass('blue');
      block_choice_2.removeClass('green');
      block_choice_2.addClass('blue');
      block_choice_2_v3.removeClass('green');
      block_choice_2_v3.addClass('blue');
      block_choice_3.removeClass('green');
      block_choice_3.addClass('blue');
    }
  }

  ;
  checkRadioButtons();
  var card_component = app.__vue__.$children[0];
  var $credit_card_form = $('.credit-card-form');
  var $step1_button = $('.block_choice_1 input');
  var $step2_button = $('.block_choice_2 input');
  var $v3_step2_button = $('.v3_block_choice_2 input');
  var $step3_button = $('.block_choice_3 input');
  var chosen_product_id, chosen_subs_type_id;
  var $secondStepBlock = $('.block_choice_2');
  var $v3SecondStepBlock = $('.v3_block_choice_2');
  var $thirdStepBlock = $('.block_choice_3');

  function hideCreditCard() {
    $credit_card_form.slideUp();
  }

  function showCreditCard() {
    $credit_card_form.slideDown().css('display', 'flex');
    var destination = $credit_card_form.offset().top;
    $('html, body').animate({
      scrollTop: destination
    }, 600);
    return false;
  }

  function hidePaypalButton() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    $(".button_wrapper".concat(style)).removeClass('open');
  }

  function showPayPalButton() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    $(".button_wrapper".concat(style)).addClass('open');
  }

  function resetChoiceToFirstStep() {
    $('.block_choice_2').removeClass('open');
    $('.block_choice_2 li').removeClass('choice');
    $('.v3_block_choice_2').removeClass('open');
    $('.v3_block_choice_2 li').removeClass('choice');
    $('.block_choice_3').removeClass('choice').removeClass('open');
    $('.block_choice_3 li').removeClass('choice');
  }

  function resetChoiceToSecondStep() {
    $('.block_choice_3 li').removeClass('choice');
    $('.block_choice_3').removeClass('choice');
    $('.block_choice_2 li').removeClass('choice');
    $('.v3_block_choice_2').removeClass('open');
    $('.v3_block_choice_2 li').removeClass('choice');
    $('.block_choice_2').addClass('open');
  }

  function resetChoiceToV3SecondStep() {
    $('.block_choice_2').removeClass('open');
    $('.block_choice_2 li').removeClass('choice');
    $('.v3_block_choice_2 li').removeClass('choice');
    $('.block_choice_3').removeClass('choice');
    $('.block_choice_3 li').removeClass('choice');
    $('.v3_block_choice_2').addClass('open');
  }

  function setServicesProductId(productId) {
    var $citconButtons = $('.citcon-payment');
    var amazonPayButton = document.querySelector('.amazon-pay');
    $citconButtons.each(function (index, button) {
      button.dataset.product = productId;
    });

    if (amazonPayButton) {
      amazonPayButton.dataset.product = productId;
    }
  }

  function setCitconSubsId(chosenSub) {
    var subsId;

    if (chosenSub == 1) {
      subsId = 3;
    } else if (chosenSub == 2) {
      subsId = 6;
    } else if (chosenSub == 5) {
      subsId = 4;
    } else if (chosenSub == 6) {
      subsId = 5;
    }

    var $citconButtons = $('.citcon-payment');
    var amazonPayButton = document.querySelector('.amazon-pay');
    $citconButtons.each(function (index, button) {
      button.dataset.subscription = subsId;
    });

    if (amazonPayButton) {
      amazonPayButton.dataset.subscription = subsId;
    }
  }
  /*function showQrCode(vendor) {
      window.axios.get(`/citcon?${vendor}`)
          .then(
              res => {
                  const img = $('#citconQR');
                  const qrCodeWrapper = $('.qr-code-wrapper');
                  img.attr({'src': res.data}).css('display', 'block');
                  qrCodeWrapper.slideDown();
          })
          .catch(
              err => {
                  hideQrCodeBlock();
                  console.log(err)
              }
          )
  }
  function removeQrCode() {
      const img = $('#citconQR');
      img.attr('src', '').css('display', 'none');
  }
  function hideQrCodeBlock() {
      const qrCodeWrapper = $('.qr-code-wrapper');
      qrCodeWrapper.slideUp();
      removeQrCode();
  }*/


  $step1_button.on('click', function () {
    chosen_product_id = this.dataset.productId;
    var value = $(this).val();
    resetChoiceToFirstStep();
    hidePaypalButton();
    hidePaypalButton('_access');
    hidePaypalButton('_code');
    setServicesProductId(chosen_product_id);

    if (parseInt(chosen_product_id) === 1) {
      checkRadioButtons(); // $thirdStepBlock.addClass('open');

      $v3SecondStepBlock.slideDown();
      $secondStepBlock.slideUp();
      card_component.productId = chosen_product_id;
      chosen_subs_type_id = undefined;
      card_component.subsTypeId = chosen_subs_type_id;
      hideCreditCard();
    } else if (parseInt(chosen_product_id) === 2) {
      checkRadioButtons();
      $v3SecondStepBlock.slideUp();
      $secondStepBlock.slideDown();
      $thirdStepBlock.removeClass('open');
      card_component.productId = chosen_product_id;
      hideCreditCard();
    }
  });
  $v3_step2_button.on('click', function (e) {
    resetChoiceToV3SecondStep();
    var $listElement = $(this).parent().parent();
    $listElement.addClass('choice');
    chosen_subs_type_id = e.target.value;
    card_component.subsTypeId = chosen_subs_type_id;
    setCitconSubsId(chosen_subs_type_id);
    $thirdStepBlock.addClass('open');
    hideCreditCard();
    hidePaypalButton();
    hidePaypalButton('_code');
  });
  $step2_button.on('click', function (e) {
    resetChoiceToSecondStep();
    var listElement = $(this).parent().parent();
    listElement.addClass('choice');
    chosen_subs_type_id = e.target.value;
    card_component.subsTypeId = chosen_subs_type_id;
    setCitconSubsId(chosen_subs_type_id);

    if (parseInt(chosen_subs_type_id) === 5) {
      $thirdStepBlock.addClass('open');
      hideCreditCard();
      hidePaypalButton('_access');
      hidePaypalButton('_code');
      hidePaypalButton('_lite_purchase');
    } else if (parseInt(chosen_subs_type_id) === 6) {
      $thirdStepBlock.addClass('open');
      hideCreditCard();
      hidePaypalButton('_access');
      hidePaypalButton('_code');
      hidePaypalButton('_lite_purchase');
    } else {
      showCreditCard();
      $thirdStepBlock.removeClass('open');
      hidePaypalButton('_access');
      hidePaypalButton('_lite_purchase');
    }
  });
  $step3_button.on('click', function (e) {
    var payment_type = e.target.value;
    var $secondStepListElArray = $('.block_choice_2 li');
    var $secondStepV3ListElArray = $('.v3_block_choice_2 li');
    var $thirdStepListElArray = $('.block_choice_3 li');
    var $listElement;

    if (payment_type === 'citcon') {
      var cc_product = e.target.dataset.product;
      var cc_vendor = e.target.dataset.vendor;
      var cc_sub = e.target.dataset.subscription;
      window.location.href = "/citcon?product=".concat(cc_product, "&sub=").concat(cc_sub, "&vendor=").concat(cc_vendor);
    }

    if (payment_type === 'amazon-pay') {
      var _cc_product = e.target.dataset.product;
      var _cc_sub = e.target.dataset.subscription;
      window.location.href = "/amazon-pay?product=".concat(_cc_product, "&sub=").concat(_cc_sub);
    }

    if (parseInt(card_component.subsTypeId) === 1) {
      $secondStepListElArray.removeClass('choice');

      if (payment_type === 'paypal') {
        $listElement = $(this).parent().parent();
        $thirdStepListElArray.removeClass('choice');
        $listElement.addClass('choice');
        $thirdStepBlock.addClass('choice');
        hideCreditCard();
        showPayPalButton();
      } else if (payment_type === 'credit') {
        $listElement = $(this).parent().parent();
        $listElement.addClass('choice');
        $thirdStepListElArray.removeClass('choice');
        $thirdStepBlock.addClass('choice');
        hidePaypalButton();
        showCreditCard();
      }
    } else if (parseInt(card_component.subsTypeId) === 2) {
      $secondStepListElArray.removeClass('choice');

      if (payment_type === 'paypal') {
        $listElement = $(this).parent().parent();
        $thirdStepListElArray.removeClass('choice');
        $listElement.addClass('choice');
        hideCreditCard();
        showPayPalButton('_code');
        $thirdStepBlock.addClass('choice');
      } else if (payment_type === 'credit') {
        $listElement = $(this).parent().parent();
        $thirdStepListElArray.removeClass('choice');
        $listElement.addClass('choice');
        hidePaypalButton('_code');
        showCreditCard();
        $thirdStepBlock.addClass('choice');
      }
    } else if (parseInt(card_component.subsTypeId) === 5) {
      $secondStepV3ListElArray.removeClass('choice');

      if (payment_type === 'paypal') {
        $listElement = $(this).parent().parent();
        $thirdStepListElArray.removeClass('choice');
        $listElement.addClass('choice');
        hideCreditCard();
        showPayPalButton('_access');
        hidePaypalButton('_lite_purchase');
        $thirdStepBlock.addClass('choice');
      } else if (payment_type === 'credit') {
        $listElement = $(this).parent().parent();
        $thirdStepListElArray.removeClass('choice');
        $listElement.addClass('choice');
        showCreditCard();
        hidePaypalButton('_lite_purchase');
        hidePaypalButton('_access');
        $thirdStepBlock.addClass('choice');
      }
    } else if (parseInt(card_component.subsTypeId) === 6) {
      $secondStepV3ListElArray.removeClass('choice');

      if (payment_type === 'paypal') {
        $listElement = $(this).parent().parent();
        $thirdStepListElArray.removeClass('choice');
        $listElement.addClass('choice');
        hideCreditCard();
        hidePaypalButton('_access');
        showPayPalButton('_lite_purchase');
        $thirdStepBlock.addClass('choice');
      } else if (payment_type === 'credit') {
        $listElement = $(this).parent().parent();
        $thirdStepListElArray.removeClass('choice');
        $listElement.addClass('choice');
        showCreditCard();
        hidePaypalButton('_access');
        hidePaypalButton('_lite_purchase');
        $thirdStepBlock.addClass('choice');
      }
    }
  });
  /*End of Purchase Form*/

  var wrapper_download = $('.wrapper_download');
  var products = $('.products');
  wrapper_download.hover(function () {
    products.addClass('view');
  }, function () {
    products.removeClass('view');
  });
  var other_downloads_block = $('.other_downloads .block');
  var other_downloads = $('.other_downloads');
  other_downloads_block.hover(function () {
    other_downloads.addClass('view');
  }, function () {
    other_downloads.removeClass('view');
  });
  var wrapper_account_first_product = $('.wrapper_account_first .product div');
  var wrapper_account_first = $('.wrapper_account_first');
  wrapper_account_first_product.hover(function () {
    wrapper_account_first.addClass('view');
  }, function () {
    wrapper_account_first.removeClass('view');
  });
});

/***/ }),

/***/ 6:
/*!********************************************!*\
  !*** multi ./resources/js/vape/scripts.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\OpenServer\domains\vape.loc\resources\js\vape\scripts.js */"./resources/js/vape/scripts.js");


/***/ })

/******/ });