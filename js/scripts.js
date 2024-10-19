document.addEventListener('DOMContentLoaded', function() {
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');

    // Add a delay to start the animation
    setTimeout(function() {
        leftDoor.style.transform = 'translateX(-100%)';
        rightDoor.style.transform = 'translateX(100%)';
    }, 500); // Adjust delay as needed
});
