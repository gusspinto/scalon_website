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
