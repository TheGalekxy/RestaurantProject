
jQuery(document).ready(function () {

//on website load, containers are hidden.
$('.menuContainer').hide();
$('.aboutContainer').hide();


// MENU PAGE CLICK FUNCTION
$('h2').click(function(){
  $('.menuContainer').hide();
  $(this).next('.menuContainer').slideToggle(1500);
}); //end of MENU CLICK function

// ABOUT US CLICK FUNCTION
$('h2').click(function(){
  $('.aboutContainer').hide();
  $(this).next('.aboutContainer').slideToggle(1000);
});
//end of ABOUT US function



});//END OF .ready FUNCTION
