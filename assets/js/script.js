$('.home-hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    
    appendDots: $(".slide-m-dots"),
    prevArrow: $(".slide-m-prev"),
    nextArrow: $(".slide-m-next")

});