$(document).ready(function(){$(".hero-slider").owlCarousel({loop:!0,margin:0,items:1,dots:!1,navText:["🡸","🢂"],smartSpeed:1e3,autoplay:!0,autoplayTimeout:7e3,responsive:{0:{nav:!1},768:{nav:!0}}}),$("#projects-slider").owlCarousel({loop:!0,nav:!1,items:2,dots:!0,smartSpeed:600,center:!0,autoplay:!0,autoplayTimeout:4e3,responsive:{0:{items:1},768:{items:2,margin:8}}}),$(".reviews-slider").owlCarousel({loop:!0,nav:!1,dots:!0,smartSpeed:900,items:1,margin:24,autoplay:!0,autoplayTimeout:4e3})});