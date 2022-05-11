import * as flsFunction from "./modules/functions.js";

import $ from 'jquery';

flsFunction.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

  const swiper = new Swiper();

  $(function() {
    $('.burger-menu').on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('active');
      $('.aside-menu__list' ).toggleClass('active');
      $('body').toggleClass('lock');

      })
  })