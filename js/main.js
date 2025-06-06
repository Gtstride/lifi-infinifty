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
});
