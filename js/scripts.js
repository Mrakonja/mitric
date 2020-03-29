$('.preloader img').fadeToggle(1000);

$(window).on('load', function(){
  $('.preloader').fadeOut(3000);

});

$(document).ready(
function() {

  var quotes = $(".quote-loop");
  var quoteIndex = -1;
  
  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
        .fadeIn(2000)
        .delay(2000)
        .fadeOut(2000, showNextQuote);
  }
      
  $(window).scroll( function(){
    if (window.scrollY > 0) {
      $('#navbar').addClass('sticky', 900);
    } else {
      $('#navbar').removeClass('sticky', 1000);
    }
  })



  showNextQuote();



});
  

