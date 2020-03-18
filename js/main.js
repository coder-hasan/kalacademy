
jQuery(window).scroll(function() {
	if(jQuery(window).scrollTop() > 50) {
		jQuery('.header').addClass('fix');
	}
	else {
		jQuery('.header').removeClass('fix');
	}
});

function openNav() {
  document.getElementById("mySidenav").style.width = "160px";
  document.getElementById("main").style.marginLeft = "150px";
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

$(window).resize(function(){
  if ($(window).width() >= 992) {
    document.getElementById("mySidenav").style.width = "84%";
  }
});

$(window).resize(function(){
  if ($(window).width() > 1199) {
    document.getElementById("mySidenav").style.width = "80%";
  }
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


$(function(){
  $('.details_btn a').click(function(){
      $(this).addClass('details_active').siblings().removeClass('details_active')    
  })
});

$(".bootcamp .all_tab").on("click",function(){
  $(".bootcamp .all").fadeIn(0010);
  $(".bootcamp .ongoing").fadeIn(0010);
  $(".bootcamp .upcoming").fadeIn(0010);
});

$(".bootcamp .ongoing_tab").on("click",function(){
  $(".bootcamp .all").hide();
  $(".bootcamp .ongoing").fadeIn(0010);
  $(".bootcamp .upcoming").hide();
});

$(".bootcamp .upcoming_tab").on("click",function(){
  $(".bootcamp .all").hide();
  $(".bootcamp .ongoing").hide();
  $(".bootcamp .upcoming").fadeIn(0010);
});

$(".individual_course_tab .all_tab").on("click",function(){
  $(".individual_course_tab .all").fadeIn(0010);
  $(".individual_course_tab .ongoing").fadeIn(0010);
  $(".individual_course_tab .upcoming").fadeIn(0010);
});

$(".individual_course_tab .ongoing_tab").on("click",function(){
  $(".individual_course_tab .all").hide();
  $(".individual_course_tab .ongoing").fadeIn(0010);
  $(".individual_course_tab .upcoming").hide();
});

$(".individual_course_tab .upcoming_tab").on("click",function(){
  $(".individual_course_tab .all").hide();
  $(".individual_course_tab .ongoing").hide();
  $(".individual_course_tab .upcoming").fadeIn(0010);
});

$(".calendar .all_tab").on("click",function(){
  $(".calendar .all").fadeIn(0010);
  $(".calendar .ongoing_t").fadeIn(0010);
  $(".calendar .upcoming_t").fadeIn(0010);
});

$(".calendar .ongoing_tab").on("click",function(){
  $(".calendar .all").hide();
  $(".calendar .ongoing_t").fadeIn(0010);
  $(".calendar .upcoming_t").hide();
});

$(".calendar .upcoming_tab").on("click",function(){
  $(".calendar .all").hide();
  $(".calendar .ongoing_t").hide();
  $(".calendar .upcoming_t").fadeIn(0010);
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