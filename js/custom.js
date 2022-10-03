$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


// sticky header 
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navbar').addClass('sticky_header');
  }
  else {
       $('.navbar').removeClass('sticky_header');
  }
  });


});