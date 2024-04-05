$(document).ready(function() {
    // Function to fetch image URLs from the server or an external source
    function fetchImageUrls() {

        const imageUrls = ["DSC_3724.jpg", "DSC_3725.jpg", "DSC_3726.jpg", "screen1.png", "screen2.png", "screen3.png", "screen4.png"];
        return imageUrls;
    }

    // Function to dynamically add images to the gallery
    function addImagesToGallery(imageUrls) {
        const gallery = $(".gallery");
        imageUrls.forEach(function(url) {
            // Create a button element
            const imageButton = document.createElement("button");
            // Add class to the button element
            imageButton.classList.add("image-button");
            // Create an image element
            const image = document.createElement("img");
            // Set src attribute of the image element
            image.src = url;
            // Set alt attribute of the image element
            image.alt = "Drone Image";
            // Append the image element to the button element
            imageButton.appendChild(image);
            // Append the button element to the gallery
            gallery.append(imageButton);

            // Add click event listener to each image button
            imageButton.addEventListener("click", function() {
                displayFullscreenImage(url);
            });
        });
    }

    // Function to display image in fullscreen mode
    function displayFullscreenImage(url) {
        // Create fullscreen modal overlay
        const overlay = document.createElement("div");
        overlay.classList.add("fullscreen-overlay");

        // Create image element for fullscreen view
        const fullscreenImage = document.createElement("img");
        fullscreenImage.src = url;
        fullscreenImage.alt = "Fullscreen Image";

        // Create close button
        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.textContent = "Close";

        // Add event listener to close button
        closeButton.addEventListener("click", function() {
            closeFullscreenImage(overlay);
        });

        // Append elements to overlay
        overlay.appendChild(fullscreenImage);
        overlay.appendChild(closeButton);

        // Append overlay to body
        document.body.appendChild(overlay);
    }

    // Function to close fullscreen modal
    function closeFullscreenImage(overlay) {
        // Remove overlay from DOM
        overlay.remove();
    }

    // Fetch image URLs and add them to the gallery
    const imageUrls = fetchImageUrls();
    addImagesToGallery(imageUrls);
});

// Validation for contact form
$("#contactForm").submit(function(event) {
    const name = $("input[name='name']").val();
    const email = $("input[name='email']").val();
    const message = $("textarea[name='message']").val();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
