console.log("Your index.js file is loaded correctly");

$(".workItem").mouseenter(function(){
    console.log("You hovered on div.myWork");
    $(this).animate({
         width: '500px'
        
     } );

});
$(".workItem").mouseleave(function(){
    console.log("You hovered on div.myWork");
    $(this).animate({
         width: '400px'
     } );

});


//$("button").hover(function(){
//$(this).find(".togglecontainer").toggleclass('active')
//});

//$('searchButton').on('click', function(){
  //  $(this).toggleclass('active')
    //if ($(this).hasclass('active')){
        //statement goes here
      //  $('searchBar').css('height', '100vh')
        //$('searchForm')


    //}

//})

