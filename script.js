function getRandomGreen() {
    const hue = Math.floor(Math.random() * 90 + 90); // Random hue in the green spectrum (90-180)
    const saturation = Math.floor(Math.random() * 50 + 50); // Random saturation (50-100)
    const lightness = Math.floor(Math.random() * 30 + 40); // Random lightness (40-70)
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 52; j++) {
        const cell = document.createElement('div');
        cell.style.backgroundColor = getRandomGreen();
        gridContainer.appendChild(cell);
    }
}
