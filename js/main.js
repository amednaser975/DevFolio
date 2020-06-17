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
      // $(".navbar .navbar-collapse ul li a::before").css("color", "#0078ff"); //Don't Work
      $(".navbar-brand,.navbar-collapse ul li a").css("color", "#0078ff");
      $(".navbar-toggler span").css("backgroundColor", "#1B1B1B");
      $('.navbar .navbar-collapse ul li a').css('borderColor', "#0078ff");
      // $('.navbar .navbar-collapse ul li a.active2').css('borderWidth', "2px");
    } else {
      $(".navbar").css({
        backgroundColor: "transparent",
        boxShadow: "none"
      });
      $(".navbar .navbar-collapse ul li a::before").css("color", "#FFF");
      $(".navbar-brand,.navbar-collapse ul li a").css("color", "#FFF");
      $(".navbar-toggler span").css("backgroundColor", "#FFF");
      // $('.navbar .navbar-collapse ul li a.active2').css('borderWidth', "2px");
      $('.navbar .navbar-collapse ul li a').css('borderColor', "#FFF");
    }
  });

  // Toggler Button
  $('#togglerBtn').on('click', function () {

    $(".navbar").css({
      backgroundColor: "#FFF",
      boxShadow: "0px 6px 9px 0px rgba(0,0,0,.1)"
    });
    // $(".navbar .navbar-collapse ul li a::before").css("color", "#0078ff"); //Don't Work
    $(".navbar-brand,.navbar-collapse ul li a").css("color", "#0078ff");
    $(".navbar-toggler span").css("backgroundColor", "#1B1B1B");
    $('.navbar .navbar-collapse ul li a').css('borderColor', "#0078ff");
  })
  if(window.innerWidth < 992)
  {
    $('.nav-item').on('click', function () {

      $('#navbarDefault').removeClass('show');
    })
  }
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

  // Click On scrollToTop To Go Up 
  scrollToTop.click(function(event) {
    event.preventDefault();
    $("html , body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

$('.nav-link').click(function () {

  let linkHref = $(this).attr('href');
  let sectionOffset = $(linkHref).offset().top;
  $('html, body').animate({scrollTop: sectionOffset}, 1000);
  var arr = $('.nav-link');
  arr.forEach = Array.prototype.forEach;
  arr.forEach(function(ele){
    ele.classList.remove('active2')
  })
  $(this).addClass('active2');

})
  // Add Active link on Element when reaching its Section
  $(window).scroll( function () {
  
    let hrefOfLink;
  
    $('.block').each(function (index, element) {

        hrefOfLink = $(element).attr('id');

        if($(window).scrollTop() > $(this).offset().top - 400)
        {
          var arr = $('.nav-link');
          arr.forEach = Array.prototype.forEach;
          arr.forEach(function (element) { 
            element.classList.remove('active2');
          })
          $(`a[href="#${hrefOfLink}"]`).addClass('active2');
        }
    })
    
  if($(window).scrollTop() > $('#acheivements').offset().top - 1)
  {
    console.log("Ahmed")
    counter(450);
    counter(120);
    counter(550);
    counter(206);
  }
  })
  

  // Counter 
  function counter (num) 
  {
    let i = 0;
    let count = setInterval(()=>{
      switch(num) {
        case 450:
          $('#first').html(`${i++}`);
          if(i == 451) {
            i = 0;
            clearInterval(count);
          }
          break;
        case 120:
          $('#second').html(`${i++}`);
          if(i == 121) {
            i = 0;
            clearInterval(count);
          }
          break;
        case 550:
          $('#third').html(`${i++}`);
          if(i == 551) {
            i = 0;
            clearInterval(count);
          }
          break;
        case 206:
          $('#fourth').html(`${i++}`);
          if(i ==  207) {
            i = 0;
            clearInterval(count);
          }
          break;
      }
    }, 5)
  }
  

// Popups

var lightboxContainer = document.getElementById("lightbox-container");
var lightboxItem = document.getElementById("lightbox-item");
var currentSlideIndex = 0;
var imgsList =  document.querySelectorAll(".work-img img") ;
var imgArray = [];
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

for(var i=0;i<imgsList.length ;i++)
{
    imgArray.push(imgsList[i]);

    imgsList[i].addEventListener("click" , function(eventInfo){

        currentSlideIndex =  imgArray.indexOf(eventInfo.target) ;

        var imgSrc =  eventInfo.target.getAttribute("src");
        lightboxContainer.style.display ="flex";
        lightboxItem.style.backgroundImage = "url("+imgSrc+")"
    })
}

function nextSlide ()
{
    currentSlideIndex++;
    if (currentSlideIndex == imgArray.length)
    {
        currentSlideIndex = 0;
    }

    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = "url("+imgSrc+")";
}
function prevSlide ()
{
    currentSlideIndex--;
    if (currentSlideIndex < 0)
    {
        currentSlideIndex = imgArray.length-1;
    }

    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = "url("+imgSrc+")";
}
function closeSlide ()
{
    lightboxContainer.style.display ="none";
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
closeBtn.addEventListener('click', closeSlide);


document.addEventListener('keydown', function (eventInfo)
{
    if(eventInfo.keyCode == 37)
    {
        prevSlide();
    }
    else if (eventInfo.keyCode == 39)
    {
        nextSlide();
    }
    else if (eventInfo.keyCode == 27)
    {
        closeSlide();
    }
})
});

