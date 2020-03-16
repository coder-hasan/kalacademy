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


/*------------------------------------------------------------------
                    Courses
--------------------------------------------------------------------*/
$(function(){
  $('.tabs a').click(function(){
      $(this).addClass('tab_active').siblings().removeClass('tab_active')    
  })
});

$("#boot_tab").on("click",function(){
  $(".bootcamp").fadeIn(0001);
  $(".page_area.bootcamp").fadeIn(0001);
  $(".individual_course_tab").hide();
  $(".page_area.individual").hide();
  $(".calendar").hide();
  $(".page_area.calendarhd").hide();
});
$("#individual_tab").on("click",function(){
  $(".individual_course_tab").fadeIn(0001);
  $(".page_area.individual").fadeIn(0001);
  $(".bootcamp").hide();
  $(".page_area.bootcamp").hide();
  $(".calendar").hide();
  $(".page_area.calendarhd").hide();
});
$("#calendar_tab").on("click",function(){
  $(".calendar").fadeIn(0001);
  $(".page_area.calendarhd").fadeIn(0001);
  $(".bootcamp").hide();
  $(".page_area.bootcamp").hide();
  $(".individual_course_tab").hide();
  $(".page_area.individual").hide();
});




$(document).ready(function(){
	$(".according h4").click(function(){
	  $(this).siblings().slideToggle();
	});
  });

  $('.bootcamp_slider').owlCarousel({
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
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});

$('#module_slider').owlCarousel({
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

$('#testimonial_slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots: false,
  navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
  autoplay:false,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:true
      },
      1000:{
          items:1,
          nav:true,
      }
  }
});

$('.owl-nav').click(function(event) {
  $(this).removeClass('disabled');
});