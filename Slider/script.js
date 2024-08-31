const slidesData = [
    {
        backgroundColor: "#FF5733",
        title: "Slide 4",
        subtitle: "This is the fourth slide"
    },
    {
        backgroundColor: "#33C1FF",
        title: "Slide 5",
        subtitle: "This is the fivth slide"
    },
    {
        backgroundColor: "#8D33FF",
        title: "Slide 6",
        subtitle: "This is the sixth slide"
    },
    {
        backgroundColor: "#8D33FF",
        title: "Slide 6",
        subtitle: "This is the sixth slide"
    }
];

const slidesContainer = document.querySelector('.slides');
const addSlideButton = document.querySelector('#addSlide');
let index = 0;

function initializeSlides() {
    slidesData.forEach(data => {
        const slide = createSlide(data);
        slidesContainer.appendChild(slide);
    });
}

initializeSlides();

const slides = document.querySelectorAll('.slides > div');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
    const translateXValue = -index * 100;
    slidesContainer.style.transform = `translateX(${translateXValue}%)`;
}

function createSlide(data) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundColor = data.backgroundColor;

    const title = document.createElement('h1');
    title.textContent = data.title;

    const subtitle = document.createElement('p');
    subtitle.textContent = data.subtitle;

    slide.appendChild(title);
    slide.appendChild(subtitle);

    return slide;
}

addSlideButton.addEventListener('click', () => {
    if (slidesData.length > 0) {
        const newSlideData = slidesData.shift(); // Remove the first slide from the array
        const newSlide = createSlide(newSlideData);
        slidesContainer.appendChild(newSlide); // Append the new slide

        // Re-select all slides to include the new one
        const newSlides = document.querySelectorAll('.slide');
        index = newSlides.length - 1;
        showSlide(index);
    } else {
        alert('No more slides to add!');
    }
});

next.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index += 1;
    } else {
        index = 0;
    }
    showSlide(index);

    console.log(slides.length);
    console.log(index);
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index -= 1;
    } else {
        index = slides.length - 1;
    }
    showSlide(index);
});