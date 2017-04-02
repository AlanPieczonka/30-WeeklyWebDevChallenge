$(document).ready(function(){
             var closed= true;
  $('#nav-icon').click(function(){
            /*if closed*/
            if(closed===true){
                $(this).toggleClass('open'); 
                console.log("Otwarty");
                
                $('.little').show();
                                console.log("closed=false")
                                console.log("-");
                closed=false;
            }
            
            /*if opened*/
      
            else if(closed===false){
                $(this).toggleClass('open');
                console.log("Zamkniety");
                
                $('.little').hide();
                                console.log("closed=true")
                                console.log("-");
                closed=true;
            }
      
        });

    /*Scrolling to sections*/
    $('.moonspeak').click(() => {
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 400);
    });
    
    $('.scroll-portfolio').click(() => {
    $('html, body').animate({
        scrollTop: $('.section-photos').offset().top
    }, 400);
    });
    
     $('.scroll-about').click(() => {
    $('html, body').animate({
        scrollTop: $('.section-two-columns').offset().top
    }, 400);
    });
     
     $('.scroll-articles').click(() => {
    $('html, body').animate({
        scrollTop: $('.section-three-columns').offset().top
    }, 400);
    });
                                
     $('.scroll-contact').click(() => {
    $('html, body').animate({
        scrollTop: $('.section-contact').offset().top
    }, 400);
    });
        
});


/*Map*/
function initMap() {
        var uluru = {lat: 52.2297700, lng: 21.0117800}; //Warsaw ;)
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
};