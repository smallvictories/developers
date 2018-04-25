addOpenGraph = function(options) {

  var settings = $.extend({
        ogTitle: ' ',
        ogDescription: ' ',
        ogType: ' ',
        ogURL: ' ',
        ogImage: ' '
    }, options );

  console.log('og tags');

  var ogTitle = settings.ogTitle;
  var ogDescription = settings.ogDescription;
  var ogType = settings.ogType;
  var ogURL = settings.ogURL;
  var ogImage = settings.ogImage;

  $('head').append('<meta property="og:title" content="' + ogTitle + '" />');
  $('head').append('<meta property="og:description" content="' + ogDescription + '" />');
  $('head').append('<meta property="og:type" content="' + ogType + '" />');
  $('head').append('<meta property="og:url" content="' + ogURL + '" />');
  $('head').append('<meta property="og:image" content="' + ogImage + '" />');

};

addOpenGraph({
  ogTitle: 'Title',                                // The title of your website
  ogDescription: 'This is the description',        // A one to two sentence description of your website
  ogType: 'website',                               // The type of website, e.g. article, blog (default set to 'website')
  ogURL: 'http://www.yourwebsiteurl.com',                             // The URL for your website (where all your shares will be directed)
  ogImage: '/path/to/images.jpg'                   // The image you want to be featured in social posts
});
