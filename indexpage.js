document.addEventListener('DOMContentLoaded', function() {
    const dropdownNavbarLink = document.getElementById('dropdownNavbarLink');
    const dropdownNavbar = document.getElementById('dropdownNavbar');
    const doubleDropdownButton = document.getElementById('doubleDropdownButton');
    const doubleDropdown = document.getElementById('doubleDropdown');
    const doubleDropdownButton1 = document.getElementById('doubleDropdownButton1');
    const doubleDropdown1 = document.getElementById('doubleDropdown1');

    dropdownNavbarLink.addEventListener('click', function() {
        dropdownNavbar.classList.toggle('hidden');
    });

    doubleDropdownButton.addEventListener('click', function() {
        doubleDropdown.classList.toggle('hidden');
    });

    doubleDropdownButton1.addEventListener('click', function() {
        doubleDropdown1.classList.toggle('hidden');
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExampleCaptions");
    const carouselItems = carousel.querySelectorAll("[data-twe-carousel-item]");
    const indicators = carousel.querySelectorAll("[data-twe-carousel-indicators] button");
    let currentIndex = 0;
  
    const showItem = (index) => {
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add("relative");
          item.classList.remove("-mr-[100%]", "hidden");
        } else {
          item.classList.remove("relative");
          item.classList.add("-mr-[100%]", "hidden");
        }
      });
      updateIndicators(index);
    };
  
    const updateIndicators = (index) => {
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.setAttribute("aria-current", "true");
        } else {
          indicator.removeAttribute("aria-current");
        }
      });
    };
  
    const slideTo = (index) => {
      if (index < 0) {
        currentIndex = carouselItems.length - 1;
      } else if (index >= carouselItems.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      showItem(currentIndex);
    };
  
    const nextSlide = () => {
      slideTo(currentIndex + 1);
    };
  
    const prevSlide = () => {
      slideTo(currentIndex - 1);
    };
  
    carousel.addEventListener("click", (e) => {
      const target = e.target;
      if (target.dataset.tweSlide === "prev") {
        prevSlide();
      } else if (target.dataset.tweSlide === "next") {
        nextSlide();
      } else if (target.dataset.tweSlideTo) {
        slideTo(parseInt(target.dataset.tweSlideTo));
      }
    });
  
    // Auto slide
    let autoSlideInterval = setInterval(nextSlide, 5000);
  
    carousel.addEventListener("mouseenter", () => {
      clearInterval(autoSlideInterval);
    });
  
    carousel.addEventListener("mouseleave", () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    });
  
    // Show initial item
    showItem(currentIndex);
  });
  
