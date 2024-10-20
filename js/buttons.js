const exploreButton = document.getElementById('explore');
const homeButton = document.getElementById('home');

// Check if elements exist in the DOM before adding event listeners
if (exploreButton) {
  exploreButton.addEventListener('mousedown', function(event) {
    window.location.href = "file:///C:/Users/Landon/fleet/Portfolio/about.html";
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
    window.location.href = "file:///C:/Users/Landon/fleet/Portfolio/index.html";
  });

  homeButton.addEventListener('mouseover', function(event) {
    this.style.transform = 'scale(0.90)';
  });

  homeButton.addEventListener('mouseout', function(event) {
    this.style.transform = 'scale(1)';
  });
}