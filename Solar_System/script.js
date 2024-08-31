const planets = document.querySelectorAll('.planet');

planets.forEach((planet, index) => {
    let speed = 10 + index * 5;
    setInterval(() => {
        let rotation = parseFloat(getComputedStyle(planet).transform.split(',')[1]) || 0;
        planet.style.transform = `rotate(${rotation + speed}deg) translateX(-50%)`;
    }, 100);
});
