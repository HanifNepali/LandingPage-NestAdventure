/*background cover*/
function initBgCover(context) {
  if (!context) context = jQuery("body");
  context.find(".bg-cover").each(function () {
    var holder = jQuery(this);
    var image = holder.find("> img").hide();
    var imageSrc = image.prop("src");
    holder.css({
      backgroundImage: "url(" + imageSrc + ")",
    });
  });
}

function initDropDown(ref) {
  $this = ref;
  $target = $this.next();

  if (!$target.hasClass("active")) {
    $(".dropdown__menu").removeClass("active");
    $(".dropdown__toggle").removeClass("active");
  }
  $target.toggleClass("active");
  $this.toggleClass("active");
}

jQuery(function () {
  initBgCover();

  const navMenuBtn = $(".js-menu-btn");
  const btnToggle = $(".js-menu-btn span");
  const nav = $(".header__bottom__nav");

  navMenuBtn.click(function () {
    btnToggle.toggleClass("btn-toggle");
    nav.toggleClass("nav-toggle");
  });

  $(".header__bottom__nav .dropdown__toggle").click(function () {
    initDropDown($(this));
    return false;
  });

  $(".specials .owl-carousel").owlCarousel({
    margin: 30,
    nav: true,
    dots: false,
    loop: true,
    autoHeight: false,
    stagePadding: 68,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1480: {
        items: 3,
      },
    },
  });
  $(".testimonials .owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    loop: true,
    autoHeight: false,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        stagePadding: 20,
      },
      480: {
        items: 1,
        stagePadding: 50,
        margin: 20,
      },
      1480: {
        items: 1,
        stagePadding: 175,
        margin: 40,
      },
    },
  });
});
