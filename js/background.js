const colors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a18cd1', '#fbc2eb', '#a6c0fe', '#88d3ce'];
let currentColorIndex = 0;

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.querySelector('.background').style.background = `
        linear-gradient(to top , rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.8)),
        ${colors[currentColorIndex]}
    `;
}
// Set the initial color
document.querySelector('.background').style.background = `
    linear-gradient(to top , rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.8)),
    ${colors[currentColorIndex]}
`;

setInterval(changeColor, 3000); // Change color every 3 seconds
