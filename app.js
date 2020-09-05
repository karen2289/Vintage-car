/* Boton Menu */
var button = document.getElementById('hamburger-menu'),
            span = button.getElementsByTagName('span')[0];
         
         button.onclick =  function() {
          span.classList.toggle('hamburger-menu-button-close');
         };
         
         $('#hamburger-menu').on('click', toggleOnClass);
         
         function toggleOnClass(event) {
          var toggleElementId = '#' + $(this).data('toggle'),
          element = $(toggleElementId);
         
          element.toggleClass('on');
         
         }
         
         // close hamburger menu after click a
         $( '.menu li a' ).on("click", function(){
          $('#hamburger-menu').click();
         });


/* Slider */

$('#owl-banner').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 8000,
    nav: true,
dots: true,
autoplayHoverPause: true, // Stops autoplay
    navigation: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
});

$(function(e) {

});