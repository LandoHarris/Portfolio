// buttons.js

// Function to create animated text drop down effect
function animateText(button, newText, url) {
  // Clear existing text
  button.textContent = '';

  // Create a span for each letter with animation class
  newText.split('').forEach((char, index) => {
    let span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`; // Adjust delay as needed
    span.classList.add('animated-text');
    button.appendChild(span);
  });

  // Delay navigation to allow animation to play
  setTimeout(function() {
    window.location.href = url;
  }, newText.length * 100 + 300); // Adjust timing based on animation
}

const exploreButton = document.getElementById('explore');
const homeButton = document.getElementById('home');

// Check if elements exist in the DOM before adding event listeners
if (exploreButton) {
  exploreButton.addEventListener('mousedown', function(event) {
    animateText(exploreButton, 'Enjoy', "https://github.com/LandoHarris");
  });

  exploreButton.addEventListener('mouseover', function(event) {
    this.style.transform = 'scale(0.90)';
  });

  exploreButton.addEventListener('mouseout', function(event) {
    this.style.transform = 'scale(1)';
  });
}

if (homeButton) {
  homeButton.addEventListener('mousedown', function(event) {
    animateText(homeButton, 'Enjoy', "https://landoharris.github.io/Portfolio/index.html");
  });

  homeButton.addEventListener('mouseover', function(event) {
    this.style.transform = 'scale(0.90)';
  });

  homeButton.addEventListener('mouseout', function(event) {
    this.style.transform = 'scale(1)';
  });
}