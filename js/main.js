// JavaScript Document


// navbar background color change on scroll
$(window).scroll(
        function(){
                        var scroll = $(window).scrollTop();
                        if (scroll < 1300) {$('.nav-bar-transition').css('background','none'); }         
                        else {  $('.nav-bar-transition').css('background','black');}
                  }
)

//variables
//!!!!!!!!!!!!!!!!!!----------------!!!!!!!!!!!!!!!----------------!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!------this list has to be completed with all the page names------!!!!!!!!!!!!!!!
        var listTour = ["01-pizza", "01-show"];
        var listMorals =["01-pizza", "01-show"];
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        var pageName;

$(document).ready(function(){   

        pageName= location.pathname.substring(location.pathname.lastIndexOf("/")+1);
        pageName= pageName.substring(0,pageName.lastIndexOf("."))
        console.log(pageName);

                CheckCartIcon();
                FillCart();

        // this function checks if the cart is full or empty and changes cart icon
                function CheckCartIcon() { 
              
                        var empty= true;

                        for (var i = 0; i < listTour.length; i++) 
                                {
                                  if (localStorage.getItem(listTour[i])== "true") 
                                        { 
                                          console.log("c'è" + listTour[i]);
                                          empty=false;
                                        }
                        }

                         // Let's check if we are in the homepage or behindthescene!
                        var pathImgFull="../assets/images/icon-backpack-full.png";
                        var pathImgEmpty ="../assets/images/icon-backpack.png";

                        if(pageName=="index" || pageName=="behindthescene")
                                {
                                 pathImgFull="assets/images/icon-backpack-full.png";
                                 pathImgEmpty="assets/images/icon-backpack.png";
                                }

                         // change icon if cart is filled or empty
                        if(empty== true) 
                            { 
                              $("#icon-backpack").attr('src',pathImgEmpty);
                            }
                        else
                          {
                            $("#icon-backpack").attr('src',pathImgFull);
                          }
                }

        //this function checks if elements ar added to cart and adds or removes the class that makes them invisible
                function FillCart() {

                        for (var i = 0; i < listTour.length; i++) 
                                {                                         
                                        if (localStorage.getItem(listTour[i])== "true") 
                                                { 
                                                  console.log("c'è" + listTour[i]);
                                                  $("#cartelement-"+listTour[i]).removeClass("cartelement-hide");
                                                }
                                        else {
                                                console.log("non c'è" + listTour[i]);
                                                $("#cartelement-"+listTour[i]).addClass("cartelement-hide");
                                             }
                        }
                        //this bit fills the moralis page with the appropriate surce and disclosure text
                        for (var i = 0; i < listMorals.length; i++) 
                                {                                         
                                        if (localStorage.getItem(listMorals[i])== "true") 
                                                { 
                                                  console.log("c'è" + listMorals[i]);
                                                  $("#moral-"+listMorals[i]).removeClass("cartelement-hide");
                                                }
                                        else {
                                                console.log("non c'è" + listMorals[i]);
                                                $("#moral-"+listMorals[i]).addClass("cartelement-hide");
                                             }
                        }
                }

        //add to cart btn unhides elements
                $("#addCartbtn").click(
                        function() {                                                    
                                    localStorage.setItem(pageName, "true");
                                    CheckCartIcon();
                                    FillCart();                
                                  }                
                ); 

        //remove elements from cart
                $(".cartelement-x").click(
                          function() {
                                      var xSuffix=$(this).attr('id').substring($(this).attr('id').lastIndexOf("_")+1);
                                      localStorage.removeItem(xSuffix);
                                      CheckCartIcon();
                                      FillCart();
                                    }
                );

        //cart btn click makes text appear in cart
                $(".cartbtn").click(
                                function() {
                                              $("#cartcontent-cart").delay(500).fadeIn(500,"linear" );
                                           }
                );
        // purchase click opens moralist page and closes cart
                $(".purchasebtn").click(
                         function() {                                        
                                     //close the cart
                                         $("#mySidenav").css("width", "0");
                                         $("#cartcontent-cart").fadeOut(500, "linear");
                                      
                                     //open moralist page
                                         if (windWidth<=898) {$("#mySidemoral").css("width", "100%");} 
                                         else {$("#mySidemoral").css("width", "50%");}
                                         $(".cartcontent-moral").delay(500).fadeIn(500,"linear" );                                         
                                    }
                );

        //behind the scene button in moralist page fades text out and empties the cart
                $(".moralbtn").click(
                        function() {
                                     $(".cartcontent-moral").fadeOut(500, "linear");
                                        //this empies the cart                               
                                        localStorage.clear();
                                        CheckCartIcon();
                                        FillCart();
                                    } 
                );

        // category color change on hover and background image change
                $(".whiteHover").hover( 
                        function(){  
                                     $(".whiteHover").css({"color": "white", "border": "2px solid white" });
                                     $(".categoryDescr").css("border-top-style", "none");
                                     $(".categoryLinks").css("color", "white");
                                  },

                        function(){  
                                     $(".whiteHover").css({"color": "#F39200", "border": "2px solid #F39200"});
                                     $(".categoryDescr").css("border-top-style", "none");
                                     $(".categoryLinks").css("color", "#F39200");
                                  },                                                                                    
        ); 

        //this function makes the category image appear on hover                         
                $("#MAKE").hover(       
                        function(){     
                                        $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "url('assets/images/category01.jpg')")
                                  },
                        
                        function(){     $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "none")
                                  }
                );

                 $("#LEAVE").hover(
                        function(){
                                        $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "url('assets/images/category02.jpg')")
                                  },
                                
                        function(){     
                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "none")
                                  }
                );

                 $("#SWIM").hover(
                        function(){
                                        $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "url('assets/images/category03.jpg')")
                                  },
                        
                        function(){     
                                        $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "none")
                                  }
                );

                 $("#FEEL").hover(
                        function(){
                                        $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "url('assets/images/category04.jpg')")
                                  },
                        
                        function(){
                                        $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                        $("#CategoryContainer").css("background-image", "none")
                                  }
                );

        //Calendar btn---------------------------------------------------------
                $(".dropbtn-calendar").click(
                        function() {
                                     $(".dropdown-content-calendar").toggle();   
                        }
                );

        //Quantity btn---------------------------------------------------------
                $(".dropbtn").click(
                        function() {
                                        $(".dropdown-content").toggle();
                        }
                );
        //about--------------------------------------------//

                $("#makeyourpresence").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#makeyourpresence_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#makeyourpresence_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #feeltheadrenalina").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#feeltheadrenalina_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#feeltheadrenalina_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #swimagainst").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#swimagainst_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#swimagainst_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #leaveyourmark").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#leaveyourmark_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#leaveyourmark_hover").css("opacity", "0");
                            }
                );
        
});


//Reviews//
$(".show-more a").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    
    
    if(linkText === "SHOW MORE"){
        linkText = "show less";
        $content.switchClass("hideContent", "showContent", 400);
                
    } else {
        linkText = "show more";
        $content.switchClass("showContent", "hideContent", 400);
    };
        
    $this.text(linkText);
        
});

  var windWidth = $(window).width();

function closeNav() {
  $("#mySidenav").css("width", "0");
  $("#main-content, #footer, #nav-content").css("opacity", "1");
  $("body").css("background-color", "black");
  $("#cartcontent-cart").fadeOut(100, "linear");

}

function closeMoral() {
  $("#mySidemoral").css("width", "0");
  $("#main-content, #footer, #nav-content").css("opacity", "1");
  $("body").css("background-color", "black");
  $(".cartcontent-moral").fadeOut(100, "linear");
}

function openNav() { 
  if (windWidth<=898) {$("#mySidenav").css("width", "100%");} 
  else {$("#mySidenav").css("width", "50%");}  
  $("#main-content, #footer, #nav-content").css("opacity", "0.2");
  $("body").css("background-color", "rgb(0,0,0,0.8)");
}

//Menu category//
function showMake() {
         $("#makebtn").css("display", "inline-block");  
         $("#leavebtn, #swimbtn, #feelbtn").css("display", "none"); 
        
};

function showLeave() { 
         $("#leavebtn").css("display", "inline-block"); 
         $("#makebtn, #swimbtn, #feelbtn").css("display", "none");
};

function showSwim() {
         $("#swimbtn").css("display", "inline-block");  
         $("#leavebtn, #makebtn, #feelbtn").css("display", "none");
};

function showFeel() {
         $("#feelbtn").css("display", "inline-block");  
         $("#leavebtn, #swimbtn, #makebtn").css("display", "none");
};


