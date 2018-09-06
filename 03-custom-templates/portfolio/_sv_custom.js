!function($) {
  $('.sv-feed-control').attr('href', '/projects');
  $('.sv-feed-control').removeAttr('data-sv-toggle');
  $('.sv-feed-control').html('&larr; Projects');

  $('video').removeAttr('controls');
  $('video').removeAttr('preload');
  $('video').attr('preload','true');
  $('video').attr('autoplay','');
  $('video').attr('loop','');
}(window.jQuery);
