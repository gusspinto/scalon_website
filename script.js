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

    // Close the modal if the user clicks outside the modal content
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
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const statusElement = document.getElementById('form-status');
        statusElement.textContent = 'Sending...';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        emailjs.send("service_vzobj1a", "template_52butb6", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }, "A9sFIunMmv3V6L51B")
        .then(() => {
            statusElement.textContent = "Message sent successfully!";
            document.getElementById('contact-form').reset(); // Reset the form
        }, (error) => {
            statusElement.textContent = "Failed to send the message. Please try again.";
            console.error("Email sending error:", error);
        });
        
    });
});
