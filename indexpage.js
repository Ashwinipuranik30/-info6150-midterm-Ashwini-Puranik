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




  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".col-span-full button");
    const form = document.querySelector("form");
  
    submitButton.addEventListener("click", function () {
      // Validate the form fields
      if (form.checkValidity()) {
        // If the form is valid, submit it
        alert("submitted successfully")
        form.submit();
      } else {
        // If the form is not valid, display an error message or perform other actions
        alert("Please fill out all required fields.");
      }
    });
  });



 
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get the values of the name, email, and message fields
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("textarea").value.trim();

      // Check if the name, email, and message fields are not empty
      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
      } else {
        // If all fields are filled out, you can submit the form
        alert("your form has been submitted")
        form.submit();
      }
    });
  });

  
