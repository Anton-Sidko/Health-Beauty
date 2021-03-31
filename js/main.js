 // Initialization AOS
 
 AOS.init({
 	duration: 500,
 	easing: 'slide',
 	once: true,
 	disable: 'mobile'
 });
 // ...


/* Toggle between adding and removing the "responsive" class when the user clicks on the icon */

function togglingNavbar() {
    var x = document.getElementById("site-nav-ipad");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
} 
// ...




// Keep position nav-list elements at nav-link:hover

function changeMarginServ() {
  document.getElementById('nav-services').style.marginLeft = '135.5px';
}

function rechangeMarginServ() {
  document.getElementById('nav-services').style.marginLeft = '144px';
}

function changeMarginAbout() {
  document.getElementById('nav-about').style.marginLeft = '61px';
}

function rechangeMarginAbout() {
  document.getElementById('nav-about').style.marginLeft = '68px';
}

function changeMarginRew() {
  document.getElementById('nav-reviews').style.marginLeft = '58px';
}

function rechangeMarginRew() {
  document.getElementById('nav-reviews').style.marginLeft = '68px';
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

/*Initialize lazyYT*/
$('.lazyYT').lazyYT();