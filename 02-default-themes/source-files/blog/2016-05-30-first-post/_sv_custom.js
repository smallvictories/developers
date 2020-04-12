!function($) {
  function isScrolledOutOfView(elem) {
    var offset = parseInt($('#sv-blog-nav').height() / 2);
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height() - offset;

    return elemBottom <= docViewTop;
  }

  function checkBlogNav() {
    var nav = $('#sv-blog-nav');
    var intro = $('#sv-blog-intro');

    if (!intro.length) {
      return
    }

    if (isScrolledOutOfView(intro)) {
      $(nav).addClass('show-title');
    } else {
      $(nav).removeClass('show-title');
    }
  }

  $(window).on('scroll', function() {
    checkBlogNav();
  });

  $(window).load(function() {
    checkBlogNav();
  });

  // Write your own javascript here.
}(window.jQuery);
