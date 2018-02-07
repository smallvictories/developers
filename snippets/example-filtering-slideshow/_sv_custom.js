!function($) {

  // move filters out of the grid
  $('.sv-slideshow-gallery .filter-set').remove();
  $('.sv-theme').prepend($('.filter-set'));

  // prevent default on filter links
  $('.filter-set a').click(function(event){
    event.preventDefault();
  });

  // when a filter is clicked show corresponding items
  // also change the attr of the selected filter
  $("a[data-filter]").click(function(){

    console.log('filtering!');
    var filter = $(this).attr('data-filter');

    if ($(this).hasClass('current-filter')) {
      $('.current-filter').removeClass('current-filter');
      $('.sv-slideshow-grid-item').show();
      $('.default-filter').addClass('current-filter');
      $('.sv-slideshow-grid').masonry();
    } else {
      $('.current-filter').removeClass('current-filter');
      $('.sv-slideshow-grid-item').hide();
      $(this).addClass('current-filter');
      $(filter).show();
      $('.sv-slideshow-grid').masonry();
    }
  });

  // unselect a selected filter
  $("a[data-filter='current-filter']").click(function(){
    $('.sv-slideshow-grid-item').show();
    $('.sv-slideshow-grid').masonry();
  });

}(window.jQuery);
