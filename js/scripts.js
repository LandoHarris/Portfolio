const background = document.getElementById('background');

function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';

    // Generate random sizes and positions
    const size = Math.random() * 100 + 50;
    const top = Math.random() * 100;
    const left = -size;

    cloud.style.width = `${size}px`;
    cloud.style.height = `${size}px`;
    cloud.style.top = `${top}%`;
    cloud.style.left = `${left}px`;

    background.appendChild(cloud);

    // Animate the cloud
    animateCloud(cloud, size);
}

function animateCloud(cloud, size) {
    const speed = Math.random() * 5 + 2; // Random speed between 2 and 7
    let left = parseFloat(cloud.style.left);

    function move() {
        left += speed;
        cloud.style.left = `${left}px`;

        // Remove cloud if it's out of view
        if (left > window.innerWidth + size) {
            background.removeChild(cloud);
        } else {
            requestAnimationFrame(move);
        }
    }
    move();
}

// Generate clouds continuously
setInterval(createCloud, 2000); // Every 2 seconds
