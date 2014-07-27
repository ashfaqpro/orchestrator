$(document).ready(function(e) {
    var $wrapper = $('.trigger');

$wrapper.find('.page-link').sort(function (a, b) {
    return +a.dataset.pagenumber - +b.dataset.pagenumber;
})
.appendTo($wrapper);

$(".trigger a[data-pagenumber]").addClass('generated');


$( ".trigger a" ).not( ".generated" )
  .remove();
  
});