
$( window ).resize(function() {
    //Function
  
});


$(document).ready(function(){
    //Function
    

    // WOW JS
    new WOW().init();

     //Menu Js
     $('.menu_toggle_btn').click(function(){
        $('.header_wrapper').toggleClass('menu_open');
        $('html').toggleClass('cm-overflow');
    });
    $('.close_menu_btn, .menu_block ul li a').click(function(){
        $('.header_wrapper').removeClass('menu_open');
        $('html').removeClass('cm-overflow');
    });
  

});




