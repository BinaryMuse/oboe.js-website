$(function(){
   // make internal nav sticky
   if( $( window ).width() > 780 ) {
   
      $('.internalNav').sticky({
         topSpacing:10
      ,  getWidthFrom:'.col1'
      });         

      // highlight active item on internal nav 
       var prev;
       
       var headings = $('main h2').map(function(i, el) {
           return {
               top: $(el).offset().top,
               id: el.id
           }
       });
       
       function closest() {
           var h;
           var top = $(window).scrollTop() +2;
           var i = headings.length;
           while (i--) {
               h = headings[i];
               if (top >= h.top)
                   return h;
           }
       }
       
       function updateActive() {
           var activeHeading = closest();
                         
           if (!activeHeading)
               activeHeading = headings.first()[0];
                                 
           if (prev) {
               prev.removeClass('active');
           }
           
           var a = $('a[href="#' + activeHeading.id + '"]');
           a.addClass('active');
           
           prev = a;
       }
       
        if( headings.length ) {
            $(document).scroll(updateActive);
            updateActive();
        }
   }
});