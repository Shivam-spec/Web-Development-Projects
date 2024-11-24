// $("h1").css("color","red");


// $("h1").addClass("big-title margin-50");

// $("button").text("Bye");

// $("button").html("<em>Hey</em>");

// $("img").attr("src"); to set value give second input

// $("h1").attr("class");



// eventlistners



// $("button").click(function(){
//    $("h1").css("color","purple");
// });


// $(document).keydown(function(event){
//    $("h1").text(event.key);
// });


// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// });

// .before() .after() .prepend() .append() used to add text in html


// animations

// $("button").on("click",function(){
//     $("h1").hide();
//  });


// $("button").on("click",function(){
//     $("h1").toggle();
//  });


// $("button").on("click",function(){
//     $("h1").fadeToggle();  In , Out
//  });


// $("button").on("click",function(){
//     $("h1").slideToggle();  Up,Down
//  });

// $("button").on("click",function(){
//     $("h1").animate({opacity: 0.5}); stick to numeric value
//  });

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
 });