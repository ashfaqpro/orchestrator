$(document).ready(function(e) {
    var $wrapper = $('.trigger');

$wrapper.find('.page-link').sort(function (a, b) {
    return +a.dataset.pagenumber - +b.dataset.pagenumber;
})
.appendTo($wrapper);

$(".trigger a[data-pagenumber]").addClass('generated');


$( ".trigger a" ).not( ".generated" )
  .remove();
  
  
   photoPaneSlider = $('.photoSlider').bjqs({
        'showMarkers': false,
        'showControls': false,
        'animation': 'slide',
        'automatic': true,
    });

    $('.sliderNav').on('click', 'li', function() {
        var id = $(this).data('slideid');
        photoPaneSlider.goto(id);
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
    });

    $('.sliderNav li:first').addClass("on");
  
});