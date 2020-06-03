/*global $, window , document, setInterval, clearInterval, console */

$(function() {
  "use strict";
  // Sync Navbar Links with Sections
  $(window).scroll(function() {
    var navHeight = $("#mainNav").innerHeight();
    $(".block").each(function() {
      if ($(window).scrollTop() + (navHeight + 20) > $(this).offset().top) {
        var blockID = $(this).attr("id");
        $(".navbar li a").removeClass("active");
        $(".navbar li a[data-scroll='" + blockID + "']").addClass("active");
      }
    });

    // Change Coloring Properties of Navbar On Scrolling
    if ($(window).scrollTop() >= 40) {
      $(".navbar").css({
        backgroundColor: "#FFF",
        boxShadow: "0px 6px 9px 0px rgba(0,0,0,.1)"
      });
      $(".navbar .navbar-collapse ul li a::before").css("color", "#0078ff"); //Don't Work
      $(".navbar-brand,.navbar-collapse ul li a").css("color", "#0078ff");
      $(".navbar-toggler span").css("backgroundColor", "#1B1B1B");
    } else {
      $(".navbar").css({
        backgroundColor: "transparent",
        boxShadow: "none"
      });
      $(".navbar .navbar-collapse ul li a::before").css("color", "#FFF");
      $(".navbar-brand,.navbar-collapse ul li a").css("color", "#FFF");
      $(".navbar-toggler span").css("backgroundColor", "#FFF");
    }
  });

  // Smoothly Scroll To an Element
  $(".navbar li a").click(function(e) {
    e.preventDefault();

    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");

    // Don't work...please, check it
    $("html , body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
      },
      1000
    );
  });

  // Scroll To Top button
  var scrollToTop = $(".back-to-top");
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 1000) {
      if (scrollToTop.is(":hidden")) {
        scrollToTop.css("display", "block");
      }
    } else {
      scrollToTop.css("display", "none");
    }
  });

  // Click On scrollToTop To Go Up (Don't Work)
  scrollToTop.click(function(event) {
    event.preventDefault();
    $("html , body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
