!function($) {

  console.log("photo demo");

  windowHeight = $(window).height();
  windowWidth = $(window).width();
  console.log('window height: ' + windowHeight);
  console.log('window width: ' + windowWidth);

  var randomizeOffset = function(parent, selector, x, y) {
    $(selector).each(function(){
      var marginY = Math.ceil(Math.random() * y) / 2;
      var marginX = Math.ceil(Math.random() * x) / 2;
      console.log(marginY * 2);
      console.log(marginX * 2);
      $(this).css('margin-top', marginY + "vh");
      $(this).css('margin-right', marginX + "vh");
      $(this).css('margin-bottom', marginY + "vh");
      $(this).css('margin-left', marginX + "vh");
      $(parent).css('overflow-x', 'hidden');
      console.log("randomize offset");
    });
  }

  function imageOrientation() {

    $('.sv-feed-item').each(function() {

      imgHeight = $(this).height();
      imgWidth = $(this).width();
      console.log("img height: " + imgHeight);
      console.log("img width: " + imgWidth);

      if (imgHeight > imgWidth) {
        $(this).addClass('vertical');
      } else if (imgHeight == imgWidth) {
        $(this).addClass('square');
      } else {
        $(this).addClass('horizontal');
      }
    });
  }

  $(document).ready(function(){
    imageOrientation();
    randomizeOffset('body', '.sv-feed-item', 25, 25);
  });

  // Write your own javascript here.

}(window.jQuery);
