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
        if (buttonName === 'Contact Button') {
          // Copy preselected email to clipboard
          navigator.clipboard.writeText('landonharris979@gmail.com').then(() => {
            console.log('Email copied to clipboard');
          }).catch(err => {
            console.log('Failed to copy email: ', err);
          });

          // Perform the "Copied" animation
          animateText(button, buttonText, 'drop-down', () => {
            // After the "Copied" animation, revert back to "Contact" with animation from bottom
            animateText(button, 'Contact', 'drop-up');
          });
        } else {
          console.log(`Clicked on ${buttonName}, navigating shortly...`);
          animateText(button, buttonText, 'drop-down', () => {
            window.location.href = url;
          });
        }
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
  addEventsToButton(contactButton, 'Contact Button', 'Copied', '', 1.05); // Add event for contact button
});

// Function to create animated text drop down effect
function animateText(button, newText, animationClass, callback) {
  // Clear existing text
  button.textContent = '';

  // Create a span for each letter with animation class
  newText.split('').forEach((char, index) => {
    let span = document.createElement('span');
    span.textContent = char;

    // Adjust delay and animation class based on direction
    span.style.animationDelay = `${index * 0.1}s`; // Adjust delay as needed
    span.classList.add('animated-text', animationClass ? animationClass : 'drop-down');
    button.appendChild(span);
  });

  // Determine the duration of the animation
  const animationDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration')) || 0.1;
  const delay = newText.length * animationDuration * 1000 + 300; // Adjust based on CSS animation duration

  // Callback after animation is done
  if (callback) {
    setTimeout(callback, delay);
  }
}