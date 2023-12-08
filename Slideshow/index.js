let slideIndex = 0;
let slideshowInterval;
let slideshowRunning = false;

const images = [
    "https://wallpapers.com/images/high/moon-and-clouds-minimalist-2922tnmxirzs139t.webp",
    "https://wallpapers.com/images/high/minimalist-man-in-city-ttjxm3v5a4osrs3h.webp",
    "https://wallpapers.com/images/high/minimalist-plug-egg-bubld4xn7assoehm.webp",
    "https://wallpapers.com/images/high/blue-minimalist-deer-and-mountain-2mpm3oxulby8w23a.webp",
    "https://wallpapers.com/images/high/blue-shades-minimalist-nczhsntbaxyjbar4.webp",
    "https://wallpapers.com/images/high/minimalist-blue-giraffe-n90odpqae1ok4x03.webp",
    "https://wallpapers.com/images/high/minimalist-earth-and-stars-azuhiglpab75bebz.webp",
    "https://wallpapers.com/images/high/minimalist-robot-dinosaur-qq7ae4b9904foyh5.webp",
    "https://wallpapers.com/images/high/minimalist-robot-dinosaur-qq7ae4b9904foyh5.webp",
    "https://wallpapers.com/images/high/minimalist-panda-killer-cjj580m67movpn6i.webp",
    "https://wallpapers.com/images/high/minimalist-deer-art-wyaxwd3z5qpshbm9.webp",
    "https://wallpapers.com/images/high/minimalist-black-cartoon-cat-0dd6ao533jede2bq.webp",
    "https://wallpapers.com/images/high/minimalist-izuku-midoriya-deku-i2knkphaeohzuamp.webp",
    "https://wallpapers.com/images/high/luffy-one-piece-minimalist-augvce2x7cj1vwa7.webp",
    "https://wallpapers.com/images/high/4k-minimalist-mountains-9oitratl6gd996za.webp",
    "https://wallpapers.com/images/high/alone-minimalist-4k-rcdbzrzkz7fcljkq.webp",
    "https://wallpapers.com/images/high/glowing-round-minimalist-ga49prmeqydbsdbw.webp",
    "https://wallpapers.com/images/high/plain-blue-plane-5u307gkw50mb870a.webp",
    "https://wallpapers.com/images/high/minimalist-red-mountain-moon-upth6izho558u4t2.webp",
    "https://wallpapers.com/images/high/valorant-jett-vector-art-fbbpysth66w20yas.webp",
];

function createSlides() {
    const slideshowContainer = document.getElementById('slideshow-container');

    images.forEach(imageUrl => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Slide';
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    });
}

function startSlideshow() {
    slideshowRunning = true;
    showSlide(slideIndex);
    slideshowInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % images.length;
        showSlide(slideIndex);
    }, 2000);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function toggleSlideshow() {
    if (slideshowRunning) {
        slideshowRunning = false;
        clearInterval(slideshowInterval);
        document.getElementById('startStopBtn').innerText = 'Start Slideshow';
    } else {
        startSlideshow();
        document.getElementById('startStopBtn').innerText = 'Stop Slideshow';
    }
}

function prevSlide() {
    slideshowRunning = false;
    clearInterval(slideshowInterval);
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    showSlide(slideIndex);
}

function nextSlide() {
    slideshowRunning = false;
    clearInterval(slideshowInterval);
    slideIndex = (slideIndex + 1) % images.length;
    showSlide(slideIndex);
}

createSlides();
startSlideshow(); 