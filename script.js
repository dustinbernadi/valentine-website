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

// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get all "Yes" buttons
    const yesButtons = document.querySelectorAll(".btn.yes");

    // Add click event listener to each "Yes" button
    yesButtons.forEach((button) => {
        button.addEventListener("click", function () {
            showNextLetter(button);
        });
    });

    // Function to show the next letter
    function showNextLetter(button) {
        const currentLetter = button.closest(".letter"); // Get the current letter
        const nextLetter = currentLetter.nextElementSibling; // Get the next letter

        if (nextLetter) {
            // Hide the current letter
            currentLetter.style.display = "none";
            // Show the next letter
            nextLetter.style.display = "block";
        } else {
            alert("No more letters!"); // Notify if there are no more letters
        }
    }
});

function animateLetter(letterId) {
    const letter = document.getElementById(letterId);
    if (letter) {
      // Add the animation class to the letter
      letter.classList.add("slide-out");
  
      // Remove the letter from the DOM after the animation completes
      setTimeout(() => {
        letter.remove();
      }, 1000); // 1000ms = 1s (duration of the animation)
    }
  }