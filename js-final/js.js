function generateMaze() {
    const mazeContainer = document.getElementById('mazeContainer');
    mazeContainer.innerHTML = ''; // Clear previous maze
    const volumeLevels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const blockSize = 30;

    volumeLevels.forEach(volume => {
        const path = document.createElement('div');
        path.classList.add('maze-path');
        path.style.width = `${blockSize}px`;
        path.style.height = `${blockSize}px`;
        path.style.left = `${Math.floor(Math.random() * 10) * blockSize}px`;
        path.style.top = `${Math.floor(Math.random() * 10) * blockSize}px`;

        path.addEventListener('mouseover', () => {
            document.getElementById('volumeDisplay').textContent = volume;
        });

        mazeContainer.appendChild(path);
    });
}

generateMaze(); // Initial maze generation
setInterval(generateMaze, 15000); // Regenerate maze every 15 seconds
