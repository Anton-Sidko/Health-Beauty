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

$('[data-fancybox="before-after-photo-mobile"]').fancybox({    
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
});

// Sent message when form has been successfully sent and close modal form
function triggerClick() {
    $.fancybox.defaults.closeExisting = true;
    $('#hidden-modal-link').trigger('click');
}

// Keep position nav-list elements at nav-link:hover

function changeMarginServ() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

    if (browserMinWidth > 1024) {
        document.getElementById('nav-services').style.marginLeft = '135.5px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('nav-services').style.marginLeft = '41.5px';
    }
}

function rechangeMarginServ() {
   var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

    if (browserMinWidth > 1024) {
        document.getElementById('nav-services').style.marginLeft = '144px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('nav-services').style.marginLeft = '50px';
    }  
}

function changeMarginServFoot() {
  document.getElementById('nav-services-foot').style.marginLeft = '72px';
}

function rechangeMarginServFoot() {
  document.getElementById('nav-services-foot').style.marginLeft = '80px';
}

function changeMarginAbout() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

     if (browserMinWidth > 1024) {
        document.getElementById('nav-about').style.marginLeft = '61px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('nav-about').style.marginLeft = '43px';
    }  
}

function rechangeMarginAbout() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

     if (browserMinWidth > 1024) {
        document.getElementById('nav-about').style.marginLeft = '68px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('nav-about').style.marginLeft = '50px';
    }  
}

function changeMarginAboutFoot() {
  document.getElementById('nav-about-foot').style.marginLeft = '73.5px';
}

function rechangeMarginAboutFoot() {
  document.getElementById('nav-about-foot').style.marginLeft = '80px';
}

function changeMarginRew() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

     if (browserMinWidth > 1024) {
        document.getElementById('nav-testimonials').style.marginLeft = '58px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('nav-testimonials').style.marginLeft = '40px';
    }  
}

function rechangeMarginRew() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

     if (browserMinWidth > 1024) {
        document.getElementById('nav-testimonials').style.marginLeft = '68px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('nav-testimonials').style.marginLeft = '50px';
    } 
}

function changeMarginRewFoot() {
  document.getElementById('nav-testimonials-foot').style.marginLeft = '70.5px';
}

function rechangeMarginRewFoot() {
  document.getElementById('nav-testimonials-foot').style.marginLeft = '80px';
}

function changeMarginCont() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

     if (browserMinWidth > 1024) {
        document.getElementById('nav-contacts').style.marginLeft = '56px';
    } else if (browserMinWidth == 1024) {
       document.getElementById('nav-contacts').style.marginLeft = '38px';
    }  
}

function rechangeMarginCont() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

     if (browserMinWidth > 1024) {
        document.getElementById('nav-contacts').style.marginLeft = '68px';
    } else if (browserMinWidth == 1024) {
       document.getElementById('nav-contacts').style.marginLeft = '50px';
    }
}

function changeMarginNumber() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);
    
    if (browserMinWidth >= 1280) {        
        document.getElementById('phone-number').style.marginLeft = '90px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('phone-number').style.marginLeft = '51px';
    } else if (browserMinWidth == 768) {
        document.getElementById('logo-header').style.marginRight = '173px';
    }

}

function rechangeMarginNumber() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);    
    
    if (browserMinWidth >= 1280) {
        document.getElementById('phone-number').style.marginLeft = '109px';
    } else if (browserMinWidth == 1024) {
        document.getElementById('phone-number').style.marginLeft = '70px';
    } else if (browserMinWidth == 768) {
        document.getElementById('logo-header').style.marginRight = '192px';
    }    
}
// 

// Scroll up button

$(document).ready(function() { 
  $(window).scroll(function() {
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);

    if (browserMinWidth > 700) {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
            }
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
    var browserMinWidth = parseInt($('.header-wrapper').css('width'), 10);
    var navBar = document.getElementById("site-nav-mobile-768w");
    var navBarMobile = document.getElementById("site-nav-mobile");

    if (browserMinWidth > 414) {
        if (navBar.className == "top-nav") {
            navBar.className += " toggle-nav-bar";
        } else {
            navBar.className = "top-nav";
        }
    } else {
        if (navBarMobile.className == "top-nav") {
            navBarMobile.className += " toggle-nav-bar";
        } else {
            navBarMobile.className = "top-nav";
        }
    }
} 
// 

