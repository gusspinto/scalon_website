document.addEventListener("DOMContentLoaded", function() {
    // Get all elements that can open a modal
    const openModalButtons = document.querySelectorAll(".open-modal");

    // Add click event listener to each button
    openModalButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the default link behavior
            const modalId = this.getAttribute("data-target");
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.style.display = "flex";  // Show the modal
            }
        });
    });

    // Get all elements that can close a modal
    const closeModalButtons = document.querySelectorAll(".close-modal");

    // Add click event listener to each button
    closeModalButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modalId = this.getAttribute("data-target");
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.style.display = "none";  // Hide the modal
            }
        });
    });
    window.addEventListener("click", function(event) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";  // Hide the modal
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const statusElement = document.getElementById('form-status');
        statusElement.textContent = 'Sending...';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        emailjs.send("service_vzobj1a", "template_52butb6", {
            from_name: name,
            from_email: email,
            phone: phone,
            company: company,
            subject: subject,
            message: message
        }, "A9sFIunMmv3V6L51B")
        .then(() => {
            statusElement.textContent = "Message sent successfully!";
            statusElement.style.color = "green"; // Optional: Change text color for success
            document.getElementById('contact-form').reset(); // Reset the form after submission
        }, (error) => {
            statusElement.textContent = "Failed to send the message. Please try again.";
            statusElement.style.color = "red"; // Optional: Change text color for failure
            console.error("Email sending error:", error);
        });
    });
});

function scrollToSection() {
    document.getElementById("web-address").scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');
    // Your existing code
    document.addEventListener('DOMContentLoaded', () => {
        const slidesContainer = document.querySelector('.testimonial-slides-container');
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
});

document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loading-container');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Matches the fade-out duration
    }, 3000); // Loading time
});





