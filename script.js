// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get all "No" buttons
    const noButtons = document.querySelectorAll(".btn.no");

    // Add click event listener to each "No" button
    noButtons.forEach((button) => {
        button.addEventListener("click", function () {
            moveButtonRandomly(button);
        });
    });

    // Function to move the button to a random position
    function moveButtonRandomly(button) {
        const container = button.closest(".letter"); // Get the parent letter container
        const containerRect = container.getBoundingClientRect(); // Get the container's dimensions

        // Calculate random position within the container
        const maxX = containerRect.width - button.offsetWidth; // Maximum X position
        const maxY = containerRect.height - button.offsetHeight; // Maximum Y position

        const randomX = Math.floor(Math.random() * maxX); // Random X position
        const randomY = Math.floor(Math.random() * maxY); // Random Y position

        // Apply the new position to the button with smooth transition
        button.style.position = "absolute";
        button.style.transition = "left 0.5s ease, top 0.5s ease"; // Smooth transition for left and top
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
});

const letter1 = document.getElementById('letter1')
const letter2 = document.getElementById('letter2')
const yes1 = document.getElementById('yesY1')
const yes2 = document.getElementById('yesY2')

yes1.addEventListener('click', () => letter1.style.animationPlayState = "running")
yes2.addEventListener('click', () => letter2.style.animationPlayState = "running")
