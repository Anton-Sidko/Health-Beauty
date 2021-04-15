// Initialization owl-carousel

$(document).ready(function(){
  $('#owl-carousel-testimonials').owlCarousel({
    items: 1,
    dotsEach: 1,
    nav: true,
  });
});

$(document).ready(function(){
  $('#owl-carousel-masters').owlCarousel({
    items: 2,
    dotsEach: 1,
    nav: true,
    margin: 0,     
  });
});

// Initialization fancy-box

$('[data-fancybox="before-after-photo"]').fancybox({    
    smallBtn: true,
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    clickSlide: "close",
    arrows: false,
    infobar: false,
    fitToView: true,       
});

$('.modal-link').fancybox({ 
    animationEffect: "fade",
    animationDuration: 600,
    'width': 790,
    'height': 650,

});

// Sent message when form has been successfully sent and close modal form
function triggerClick() {
  $.fancybox.defaults.closeExisting = true;
  $('#hidden-modal-link').trigger('click');
}

// Keep position nav-list elements at nav-link:hover

function changeMarginServ() {
  document.getElementById('nav-services').style.marginLeft = '135.5px';
}

function rechangeMarginServ() {
  document.getElementById('nav-services').style.marginLeft = '144px';
}

function changeMarginServFoot() {
  document.getElementById('nav-services-foot').style.marginLeft = '72px';
}

function rechangeMarginServFoot() {
  document.getElementById('nav-services-foot').style.marginLeft = '80px';
}

function changeMarginAbout() {
  document.getElementById('nav-about').style.marginLeft = '61px';
}

function rechangeMarginAbout() {
  document.getElementById('nav-about').style.marginLeft = '68px';
}

function changeMarginAboutFoot() {
  document.getElementById('nav-about-foot').style.marginLeft = '73.5px';
}

function rechangeMarginAboutFoot() {
  document.getElementById('nav-about-foot').style.marginLeft = '80px';
}

function changeMarginRew() {
  document.getElementById('nav-testimonials').style.marginLeft = '58px';
}

function rechangeMarginRew() {
  document.getElementById('nav-testimonials').style.marginLeft = '68px';
}

function changeMarginRewFoot() {
  document.getElementById('nav-testimonials-foot').style.marginLeft = '70.5px';
}

function rechangeMarginRewFoot() {
  document.getElementById('nav-testimonials-foot').style.marginLeft = '80px';
}

function changeMarginCont() {
  document.getElementById('nav-contacts').style.marginLeft = '56px';
}

function rechangeMarginCont() {
  document.getElementById('nav-contacts').style.marginLeft = '68px';
}

function changeMarginNumber() {
  document.getElementById('phone-number').style.marginLeft = '90px';
}

function rechangeMarginNumber() {
  document.getElementById('phone-number').style.marginLeft = '109px';
}
// 

// Scroll up button

$(document).ready(function(){ 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
  }); 
 
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
})
//

/*Toggle between hiding and showing the dropdown answers */

function dropAnswer() {
    var target = event.target.id;
    var questions = document.getElementsByClassName("drop-question");
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);    
    
    if (target == "first-dropdown") {
        document.getElementById("first-answer").classList.add("show");    
        
        for (var i = 0; i < questions.length; i++) {
            questions[i].classList.add("hide");
        }

        // Keep position testimonials-wrapper
        if (browserMinWidth > 1200) {
            document.getElementById("faq-all-wrapper").style.marginBottom = '88px';
        }  
    }

    else if (target == "second-dropdown") {
        document.getElementById("second-answer").classList.add("show");    
        
        for (var i = 0; i < questions.length; i++) {
            questions[i].classList.add("hide");
        }

        // Keep position testimonials-wrapper
        if (browserMinWidth > 1200) {
            document.getElementById("faq-all-wrapper").style.marginBottom = '191px';
        }         
    }

    else if (target == "third-dropdown") {
        document.getElementById("third-answer").classList.add("show");    
        
        for (var i = 0; i < questions.length; i++) {
            questions[i].classList.add("hide");
        }

        // Keep position testimonials-wrapper
        if (browserMinWidth > 1200) {
            document.getElementById("faq-all-wrapper").style.marginBottom = '191px';
        }         
    }

    else if (target == "fourth-dropdown") {
        document.getElementById("fourth-answer").classList.add("show");    
        
        for (var i = 0; i < questions.length; i++) {
            questions[i].classList.add("hide");
        }

        // Keep position testimonials-wrapper
        if (browserMinWidth > 1200) {
            document.getElementById("faq-all-wrapper").style.marginBottom = '191px';
        }     
    }

    else if (target == "fifth-dropdown") {
        document.getElementById("fifth-answer").classList.add("show");    
        
        for (var i = 0; i < questions.length; i++) {
            questions[i].classList.add("hide");
        }

        // Keep position testimonials-wrapper
        if (browserMinWidth > 1200) {
            document.getElementById("faq-all-wrapper").style.marginBottom = '191px';
        }    
    }
}
// 

/* Hide dropdown answers when user click anywhere*/

document.onclick = function() {    
    var target = event.target.id;
    var questions = document.getElementsByClassName("drop-question");

    if (target !== "first-dropdown" && target !== "second-dropdown"
        && target !== "third-dropdown" && target !== "fourth-dropdown"
        && target !== "fifth-dropdown") {        
        var answers=document.getElementsByClassName("drop-content");        
        
        for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
            
                for (var i = 0; i < questions.length; i++) {
                    questions[i].classList.remove("hide");
                }

                // Return margin to testimonials-wrapper back
                document.getElementById("faq-all-wrapper").style.marginBottom = '170px';
            }       
        };
    };
}
// 

// Toggling nav-bar

function togglingNavbar() {
    var x = document.getElementById("site-nav-mobile");
    if (x.className === "topnav") {
        x.className += " toggle-nav-bar";
    } else {
        x.className = "topnav";
    }
} 
// 

