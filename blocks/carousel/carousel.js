export default async function decorate(block) {
  // fetch carousel content
  // function createDivElement(className, IDName) {
  //   const divEl = document.createElement('div');
  //   divEl.setAttribute('class', className);
  //   divEl.setAttribute('id', IDName);
  //   return divEl;
  // }
  var slideIndex = 1;
  var myTimer;
  var slideshowContainer;
  window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () {
      plusSlides(1);
    }, 4000);
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName("slideshow-inner")[0];
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    if(slideshowContainer) {
      slideshowContainer.addEventListener("mouseenter", pause);
      slideshowContainer.addEventListener("mouseleave", resume);
    }
  });
  // NEXT AND PREVIOUS CONTROL
  function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
      showSlides((slideIndex -= 1));
    } else {
      showSlides((slideIndex += 1));
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    if (n === -1) {
      myTimer = setInterval(function () {
        plusSlides(n + 2);
      }, 4000);
    } else {
      myTimer = setInterval(function () {
        plusSlides(n + 1);
      }, 4000);
    }
  }
  //Controls the current slide and resets interval if needed
  function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 4000);
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(slides.length) {
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // slides[slideIndex - 1].className.replace('slide', '');
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      setInterval(function () {
        slides[slideIndex - 1].classList.add('slide');
      }, 1000)
      slides[slideIndex - 1].classList.add('slide');
      dots[slideIndex - 1].className += " active";
    }
  }

  // Use constants and destructuring to make code cleaner
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const cards = document.querySelectorAll(".carousel-wrapper-card");
  const cardWidth = cards[0] ? cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight): 0;
  const dotsContainer = document.querySelector(".carousel-dots-container");
  // const prevButton = document.querySelector(".prev-button");
  // const nextButton = document.querySelector(".next-button");
  const dots = [];
}
