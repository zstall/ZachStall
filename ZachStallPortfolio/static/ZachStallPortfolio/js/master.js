// ****************************************************************************
// Smooth Scroll for all navbar items
// ****************************************************************************
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, .pcbuilds-container a[href='#zero'], footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})


// ****************************************************************************
// Slide in elements
// ****************************************************************************
$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });


  // ****************************************************************************
  // Modal Js
  // ****************************************************************************
  // Open the Modal
  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('myModal1').style.display = "none";
    document.getElementById('myModal2').style.display = "none";
    document.getElementById('myModal3').style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n,name,thumb) {
    showSlides(slideIndex += n,cls=name,thm=thumb);
  }

  function currentSlide(n,name,thumb) {
    showSlides(slideIndex = n,cls=name,thm=thumb);
  }

  function showSlides(n,cls,thm) {
    var i;
    var slides = document.getElementsByClassName(cls);
    var dots = document.getElementsByClassName(thm);
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
