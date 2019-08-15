/* eslint globals $ */
'use strict';

function clickHandler() {
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(this).find('img').attr('src');
    const altSrc = $(this).find('img').attr('alt');
    $('.hero img').attr('src', imgSrc).attr('alt', altSrc);
  });
}

$(clickHandler);