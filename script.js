function getRandomGreen() {
    const hue = Math.floor(Math.random() * 90 + 90); // Random hue in the green spectrum (90-180)
    const saturation = Math.floor(Math.random() * 50 + 50); // Random saturation (50-100)
    const lightness = Math.floor(Math.random() * 30 + 40); // Random lightness (40-70)
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// write function to return any one color from the list of colors
/*
#196127 dark green
#7BC96F green
#BDE4B7 light green
#C6E48B yellow green
#EBEDF0 grey
*/
function getContributionsColor() {
    // lets generate count randomly
    let count = Math.floor(Math.random() * 10);
    // return '#EBEDF0';
    if (count < 2) {
        return '#EBEDF0';
    } else if (count <= 5) {
        return '#C6E48B';
    } else if (count <= 8) {
        return '#BDE4B7';
    } else if (count <= 9) {
        return '#7BC96F';
    } else {
        return '#196127';
    }
}


function createGridContainer() {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    // const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 52; j++) {
            const cell = document.createElement('div');
            // cell.style.backgroundColor = getRandomGreen();
            cell.style.backgroundColor = getContributionsColor();
            gridContainer.appendChild(cell);
        }
    }
    return gridContainer;
}

// Create the parent container
const rowContainer = document.querySelector('.row-container');

// Create and append 7 grid containers to the parent container
for (let i = 0; i < 7; i++) {
    const gridContainer = createGridContainer();
    rowContainer.appendChild(gridContainer);
}
