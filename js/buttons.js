document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");

  // Get buttons by ID
  const exploreButton = document.getElementById('explore');
  const linkedinButton = document.getElementById('linkedIn');
  const contactButton = document.getElementById('contact'); // Get the contact button by ID

  console.log("explore Button:", exploreButton);
  console.log("linkedin Button:", linkedinButton);
  console.log("contact Button:", contactButton); // Log the contact button

  // Function to add events (with console log for debugging)
  function addEventsToButton(button, buttonName, buttonText, url, hoverScale) {
    if (button) {
      console.log(`${buttonName} found!`);
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default navigation behavior
        console.log(`Clicked on ${buttonName}, navigating shortly...`);
        animateText(button, buttonText, url);
      });

      button.addEventListener('mouseover', function(event) {
        this.style.transform = `scale(${hoverScale})`;
      });

      button.addEventListener('mouseout', function(event) {
        this.style.transform = 'scale(1)';
      });
    } else {
      console.log(`${buttonName} not found!`);
    }
  }

  // Add events to buttons
  addEventsToButton(exploreButton, 'Explore Button', 'Enjoy', "https://github.com/LandoHarris", 0.80);
  addEventsToButton(linkedinButton, 'LinkedIn Button', 'Enjoy', "https://www.linkedin.com/in/landon-harris-55190a256/", 0.90);
  addEventsToButton(contactButton, 'Contact Button', 'Talk Soon', "file:///C:/Users/Landon/fleet/Portfolio/contact.html", 1.05); // Add event for contact button
});

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
  const animationDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration')) || 0.1;
  const delay = newText.length * animationDuration * 1000 + 300; // Adjust based on CSS animation duration
  console.log(`Navigating to ${url} in ${delay} ms`);

  setTimeout(function() {
    console.log(`Navigating to: ${url}`);
    window.location.href = url;
  }, delay);
}