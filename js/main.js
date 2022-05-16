// slick settings
$(document).ready(function () {
	$(window).load(function () {
		$("#loading").hide();
	});
	$(".slick-items").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		arrows: false,
		dots: true,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	//service-slick
	$(".slick-service-items").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	//testi-slick

	$(".slick-testi-items").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	//counter
});
// progressbar
let percent1 = document.querySelector(".percent");
let percent2 = document.querySelector(".percent2");

let counter1 = 0;
let counter2 = 0;
setInterval(() => {
	if (percent2) {
		if (counter2 == 75) {
			clearInterval();
		} else {
			counter2 += 1;
			percent2.innerHTML = counter2 + "%";
		}
	}
	if (percent1) {
		if (counter1 == 80) {
			clearInterval();
		} else {
			counter1 += 1;
			percent1.innerHTML = counter1 + "%";
		}
	}
}, 50);
//counter
const counterUp = window.counterUp.default;

const callback = (entries) => {
	entries.forEach((entry) => {
		const el = entry.target;
		if (entry.isIntersecting && !el.classList.contains("is-visible")) {
			counterUp(el, {
				duration: 2000,
				delay: 16,
			});
			el.classList.add("is-visible");
		}
	});
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

document.querySelectorAll(".counter").forEach((el) => IO.observe(el));
