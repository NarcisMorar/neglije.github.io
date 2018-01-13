// NOT DONE YET :)
$(document).ready(function(){
   $('.submit-btn').on('click', function(){
      $('.spinner')
      .fadeIn("fast")
      .delay(2000)
      .fadeOut('slow', function() {
          $('.submit-feedback').fadeIn();
      });
   });
});
