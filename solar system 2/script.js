const solarSystem = document.querySelector('.solar-system');

document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', function() {
        const planetId = this.id;
        const angle = getPlanetAngle(planetId);
        solarSystem.style.transform = `rotateX(45deg) rotateY(${angle}deg)`;
    });
});

function getPlanetAngle(planetId) {
    // Define rotation angles for each planet
    switch (planetId) {
        case 'planet1':
            return 45;
        case 'planet2':
            return 90;
        // Add more cases for other planets as needed
        default:
            return 0;
    }
}
