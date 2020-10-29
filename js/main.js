
$('.carousel').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	prevArrow:'.switch',
	
	margin:40,
	cssEase: 'linear',
	fade: true,
	responsive: [
		{
				breakpoint:576,
				settings: {
					slidesToShow:1,
					slidesToScroll:1,
					adaptiveHeight:true,
				}
			},
		]
  });


  $('.test-items').on("init",function(event, slick){
	$(this).append('<div class="slider-count"><p><span id="current">1</span> <p class="line"></p> <span id="total">'+slick.slideCount+'</span></p></div>');
});

$('.test-items')
	.on('afterChange', function(event, slick, currentSlide, nextSlide){
		// finally let's do this after changing slides
		$('.slider-count #current').html(currentSlide+1);
	});



$(".test-items").slick({
	dots:false,
	slidesToShow:2,
	slidesToScroll: 2,
	autoplay:false,
	
	autoplaySpeed: 2000,
    prevArrow: $('.next'),
	nextArrow: $('.prev'),
	
	responsive: [
    {
			breakpoint:767,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				adaptiveHeight:true,
			}
		},
    {
			breakpoint:576,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				adaptiveHeight:true,
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				adaptiveHeight:true,
			}
		},
		{
			breakpoint:1200,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				
			}
		},
		
		
	]
});

// $('.test-items').on('init afterChange', function(event, slick, currentSlide){
//     let total = $('.test-items .item').length;
//     var first = $('.slick-active:first > div:first').get(0);
//     var last = $('.slick-active:last > div:last').get(0);
//   if($(last).html() == '')
//     last = $('.slick-active:last > div:not(:empty)').get(0);
//     let start,end;
//     $('.slick-slide > div').each(function(i,v){
//         if(first === $(v).get(0)) {
//             start = i+1;
//         } 
//         if(last === $(v).get(0)) {
//             end = i++;
//         }
//     });
//   $('.results').html(` ${start} <span> </span> ${end} `);
// })

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });




$('.logo').click(function(){
    $('nav ul.nav').toggleClass('change');
   
});

$('a.carousel').click(function (e) {
  e.preventDefault();
});





 $(document).on('click', '.tab-content ul li', function () {
	var $el = $(this);
	$el.siblings().removeClass('active');
	$el.addClass('active');

});


// function onClickVid($this){
// 	$('.iframe').toggleClass('active');

// 	$('.glyphicon-play-circle').show();
// 	$('.glyphicon-play-pause').hide();
// }



var top0 = $('.heroe').offset().top;
var top1 = $('#about').offset().top;
var top2 = $('#service').offset().top;
var top3 = $('#work').offset().top;
var top4 = $('#test').offset().top;
var top5 = $('#ambition').offset().top;

$(document).scroll(function() {
	var scrollPos = $(document).scrollTop();
	if (scrollPos >= top0 && scrollPos < top1) {
		$('nav').css('background-color', 'transparent');
	  }
	if (scrollPos >= top1 && scrollPos < top2) {
	  $('nav').css('background-color', '#572D14');
	} else if (scrollPos >= top2 && scrollPos < top3) {
	  $('nav').css('background-color', 'transparent');
	} else if (scrollPos >= top3 && scrollPos < top4) {
	  $('nav').css('background-color', '#572D14');
	} else if (scrollPos >= top4 && scrollPos < top5) {
	  $('nav').css('background-color', 'transparent');
	}else if (scrollPos >= top5) {
	  $('nav').css('background-color', '#572D14');
	}
	
	 

  });


  $(window).scroll(function() {
	$('nav ul.nav').removeClass('change');
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('nav').css('background-color', 'transparent');
	}
 });
 
$(document).on('click', '.nav-pills li', function () {
		var $el = $(this);
		$el.siblings().removeClass('active');
		$el.addClass('active');

});

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);
        e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
            scrollTop: e.offset().top
        }, 600, function () {
            var t = $(e);
            if (t.focus(), t.is(":focus")) return !1;
            t.attr("tabindex", "-1"), t.focus()
        }))
    }
});