$(document).ready(function () {
  // variables
  let menuIcon = $("#menu-icon2");
  let menuBar = $("#header");
  let cancelIcon = $("#close-icon");

  // functions to display and hide menu bar on mobile
  menuIcon.on("click", function () {
    menuBar.slideDown();
  });

  cancelIcon.on("click", function () {
    menuBar.slideUp();
  });

  //function to add background-color to the header at a scroll lever
  let header = $("#header");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      header.css({
        "background-color": "rgb(156, 61, 125)",
        transition: "all 1s ease",
      });
    } else {
      header.css({
        "background-color": "transparent",
      });
    }
  });
});
