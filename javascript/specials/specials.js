$(document).ready(function(){
    $('dl').hide();

    $('h2').click(function(){
        $(this).next('dl').slideToggle(750);
    });

    $('dl').mouseenter(
        function(){$('dl').css({'color':'black', 'background':'#fcf2ee'});}
        
    );
    $('dl').mouseleave(
        function(){$('dl').css({'color':'black', 'background':'#ffffff'});}
    )
    
      
});