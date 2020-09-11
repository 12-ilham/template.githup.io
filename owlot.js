
	$(document).ready(function () {
		 $(".slick-1").slick({
			slidesToShow: 1,
			arrows: false,
			dots: false,
			asNavFor: ".slick-2",
			vertical: true,
			verticalSwiping: true,
		});
		$(".slick-2").slick({
			slidesToShow: 1,
			arrows: false,
			dots: false,
			asNavFor: ".slick-1",
		});
		  // the above are for silder's settings

		$(".slick-next").click(function () {
			$(".slick-1").slick("slickNext");
			$(".slick-2").slick("slickNext");
		});
		$(".slick-prev").click(function () {
			$(".slick-1").slick("slickPrev");
			$(".slick-2").slick("slickPrev");
		});
    });
	var owl = $('.owl-2');
	owl.owlCarousel({
    items:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:1000,
	autoWidth:true,
    autoplayHoverPause:true,
	nav:true
	});
	$('.owl-3').owlCarousel({
    margin:30,
    loop:true,
    autoWidth:true,
    items:1,
	autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
	})
	$(".togled").click(function(){
		$(".hide").toggle();
	});
	function openlinks(){
		document.getElementById("links").classList.add("active");
	}
	function closelinks(){
		document.getElementById("links").classList.remove("active");
	}
	// Loading Screen 
	$(window).on('load',function(){
		//Loading Elements
		
		$(".preloader .center").fadeOut(2000,
		function()
		{
			$(this).parent().fadeOut(1000,
			function()
			{
				$(this).remove();
			});
		});
	});	
	//trigger nice scroll
	$("body").niceScroll({
		cursorcolor:" #30336b",
		cursorwidth:"9px",
		cursorborder:"1px solid #30336b",
		cursorborderradius: 0
	});
	$(document).ready(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > 300){
				$(".to-top").fadeIn(1000);
			}else{
				$(".to-top").fadeOut(1000);
			}
		});
		$(".to-top").click(function(){
			 $('html, body').animate({scrollTop:0},2000); 
		});
	});
		
	$(document).ready(function(){
		$("#togglediv").click(function(){
			$(".condi-hide").fadeToggle(3000);
		});
	});
		
		
		
		
	