$(".skill-type").on("click", function () {
  let e = $(this).parent().index();
  $(".skill-type").removeClass("filter-active"),
    $(this).addClass("filter-active"),
    $(".skill-list").removeClass("skill-active"),
    $(".skill-list").eq(e).addClass("skill-active");
});
var swiper = new Swiper(".quartet-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: !0,
  mousewheel: { invert: !1 },
  pagination: { el: ".quartet-slider__pagination", clickable: !0 },
});
