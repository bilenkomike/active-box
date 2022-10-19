$(function() {
	// header
	let header = $('#header');
	let intro = $('#intro');
	let introh = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");


	checkScroll(scrollPos,introh);

	$(window).on("scroll resize", function () {
		let introh = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos,introh);
	});

function checkScroll(scrollPos,introh) {
		if(scrollPos > introh ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
}
	// smoth scroll

$("[data-scroll]").on("click", function(event){
	event.preventDefault();

	let elementid = $(this).data('scroll');
	let elemofset = $(elementid).offset().top;

	nav.removeClass("show");

	$('html, body').animate({
		scrollTop: elemofset - 80
	},700);
	
});

// navToggle


navToggle.on("click", function(event) {
	event.preventDefault();

	nav.toggleClass("show");
});



// reviews
let slider = $("#reviewsSlider");
	
slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  arrows:false,
  dots:true
});
		

});