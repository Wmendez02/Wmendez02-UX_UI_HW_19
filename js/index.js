console.log("Your index.js file is loaded correctly!");
$('.card').hover(function(){
    $(this).children("img").css("filter", "grayscale(0%)");
    $(this).children(".card-body").removeClass("darkRed");
     
  });