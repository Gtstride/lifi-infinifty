$(document).ready(function () {
  // variables
  let menuIcon = $("#menu-icon2");
  let menuBar = $("#header");
  let cancelIcon = $("#close-icon");

  // functions to display and hide menu bar on mobile
  menuIcon.on("click", function () {
    menuBar.show();
  });

  cancelIcon.on("click", function () {
    menuBar.hide();
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

  // function to indicate active page
  const currentPath = window.location.pathname.split("/").pop(); // e.g., about-us.php
  const navLinks = document.querySelectorAll("#nav-ul a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop(); // Remove folder paths
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  //scroll to top feature

  const scrollBtn = document.getElementById("scrollToTopBtn");

  // Show/hide button on scroll
  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  // Scroll to top smoothly
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //  set logo as home screen
  let logoIcons = document.querySelectorAll(".logo");

  logoIcons.forEach((el) => {
    el.addEventListener("click", () => {
      window.location.href = "./index.php";
    });
  });
});
