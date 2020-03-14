jQuery(window).scroll(function() {
	if(jQuery(window).scrollTop() > 50) {
		jQuery('.header').addClass('fix');
	}
	else {
		jQuery('.header').removeClass('fix');
	}
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

jQuery("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = jQuery(jQuery(this).attr("href")).offset().top;

	jQuery("body, html").animate({
		scrollTop: position
	});
});

$(document).ready(function(){
	$(".according h4").click(function(){
	  $(this).siblings().slideToggle();
	});
  });

  $('#bootcamp_slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    autoplay:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});

$('.owl-nav').click(function(event) {
  $(this).removeClass('disabled');
});