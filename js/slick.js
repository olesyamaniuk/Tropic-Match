$(function () {
  $(".r-t-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".r-t-gallery-list-left",
    nextArrow: ".r-t-gallery-list-right",
  });
});

$(function () {
  $(".r-t-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".r-t-reviews-list-left",
    nextArrow: ".r-t-reviews-list-right",
  });
});
