// Remap jQuery to $
(function($){

    $(document).ready(function() {

        // Smooth scrolling
        $('.scroll').click(function(event){
            event.preventDefault();
            var thisHash = $(this).attr('href');
            $('html, body').animate({scrollTop:$(this.hash).offset().top+1}, 300);
            window.history.replaceState('Object', 'Title', '/'+thisHash);
        });



    $(document).ready(function() {
    //all heading 1s
        $('.journal-entry h1').widowFix();
    //or specific h1s
        $('#mainColumn h1').widowFix();

    });


    });
});

