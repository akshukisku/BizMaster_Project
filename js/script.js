$(document).ready(function () {
  const $menuToggle = $("#menuToggle");
  const $navbarItems = $("#navbarItems");
  const $icon = $menuToggle.find("i");

  // Toggle menu on click
  $menuToggle.on("click", function () {
    $navbarItems.toggleClass("active");

    if ($navbarItems.hasClass("active")) {
      $icon.removeClass("ri-menu-3-line").addClass("ri-close-line");
    } else {
      $icon.removeClass("ri-close-line").addClass("ri-menu-3-line");
    }
  });

  // Close menu when clicking a nav link (on small screens)
  $(".nav-list a").on("click", function () {
    if ($(window).width() <= 991) {
      $navbarItems.removeClass("active");
      $icon.removeClass("ri-close-line").addClass("ri-menu-3-line");
    }
  });

  // Close menu when window is resized above 991px
  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $navbarItems.removeClass("active");
      $icon.removeClass("ri-close-line").addClass("ri-menu-3-line");
    }
  });
  
  let stickyNavTop = $(".navbar").offset().top;
  console.log(stickyNavTop)
  function stickyNav() {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop)

    if (scrollTop > stickyNavTop) {
      $(".navbar").addClass("sticky");
      console.log("added");
    } else {
      $(".navbar").removeClass("sticky");
    }
  }

  stickyNav();

  $(window).on("scroll", function () {
    stickyNav();
  });
});
