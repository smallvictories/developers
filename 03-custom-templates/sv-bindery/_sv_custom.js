$(document).ready(function(){
  console.log('ready');

  // remove the injected scripts from the Bindery object
  $('.sv-feed-item.00abindery').prependTo('body');
  $('.sv-feed-item.00bbinderycontrols').prependTo('body');
  $('.sv-feed-item').css({
    "padding": 0,
    "float": "none"
  });

  // remove some unneeded SV stuff
  $('.sv-feed-block, .sv-control, .anchor').remove();

  // change SV image handling from data-src to src
  $('img').removeClass('lazyload');
  $('img').each(function(){
    var imgSRC = $(this).attr('data-src');
    console.log(imgSRC);
    $(this).attr('src',imgSRC);
  });

  // use SV auto-generated classes and reapply them to Bindery objects
  $('.sv-feed-item').each(function(){
    var itemClasses = $(this).attr('class');
    console.log("itemClasses: " + itemClasses);
    $(this).children().children().addClass(itemClasses).removeClass('sv-feed-item');
  });
  // unwrap content objects to remove SV markup
  $('.sv-feed-item-markdown, .sv-feed-item-photo, .sv-feed-inner').unwrap();
  $('p, h1, h2, h3, h4, h5, h6, blockquote, movie, audio, ul, ol, hr, img').unwrap();

});

// ******* do not edit above this line ******* //

// run Bindery after page loads
document.addEventListener('DOMContentLoaded', function() {
  Bindery.makeBook({
    content: '.sv-feed-inner', // #content – don't change
    pageSetup: {
      size: { width: '4in', height: '6in' },
      margin: { top: '12pt', inner: '12pt', outer: '16pt', bottom: '20pt' },
    },
  });
}, false);
