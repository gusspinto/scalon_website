document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    // MODALS
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeModalButtons = document.querySelectorAll(".close-modal");

    openModalButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const modalId = this.getAttribute("data-target");
            const modal = document.querySelector(modalId);
            if (modal) modal.style.display = "flex";
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = this.getAttribute("data-target");
            const modal = document.querySelector(modalId);
            if (modal) modal.style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            if (event.target === modal) modal.style.display = "none";
        });
    });

    // SCROLL TO SECTION
    const scrollToSection = () => {
        const section = document.getElementById("web-address");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };
    window.scrollToSection = scrollToSection;

    // SLIDER / TESTIMONIALS
    document.addEventListener("DOMContentLoaded", function () {
        const slidesContainer = document.querySelector('.testimonial-slider');
        const slides = document.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;
        let currentIndex = 0;
      
        function updateSlidePosition() {
          // Calculate the horizontal offset for the slides container
          const offset = -currentIndex * 100; // Offset in percentage
          slidesContainer.style.transform = `translateX(${offset}%)`;
        }
      
        document.querySelector('.next-slide').addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateSlidePosition();
        });
      
        document.querySelector('.prev-slide').addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateSlidePosition();
        });
      
        // Initialize the slide position
        updateSlidePosition();
      });
      

    // LOADER
    const loader = document.querySelector(".loading-container");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 3000);
    }

    // TOGGLE MORE SERVICES
    const toggleMoreServices = () => {
        const moreServices = document.getElementById("more-services");
        if (moreServices) {
            if (moreServices.classList.contains("open")) {
                moreServices.classList.remove("open");
                moreServices.style.maxHeight = null;
            } else {
                moreServices.classList.add("open");
                moreServices.style.maxHeight = moreServices.scrollHeight + "px";
            }
        }
    };
    window.toggleMoreServices = toggleMoreServices;

    // DROPDOWN
    const moreDropdown = document.getElementById("moreDropdown");
    if (moreDropdown) {
        moreDropdown.addEventListener("click", function (event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains("dropdown-menu")) {
                dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in-section');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: If you want it to only animate once
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  