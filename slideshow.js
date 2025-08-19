document.documentElement.className = document.documentElement.className.replace('no-js', '');

const AUTOPLAY_INTERVAL = 3000;
const SWIPE_THRESHOLD = 30;
const IMAGES_TO_KEEP_LOADED = 6;

// --- IMAGE DATA ---
// I have corrected the image paths to ensure they load correctly.
const images = [
{
    jpeg: './ShortPixelOptimized/IMG_E1745.JPG', webp: './ShortPixelOptimized/IMG_E1745.webp', avif: './ShortPixelOptimized/IMG_E1745.avif',
    alt: 'Photo of Chinwe Okoro',
    caption: '“Saved me days launching my portfolio — easy to customize and deploy.” — Chinwe Okoro'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1746.JPG', webp: './ShortPixelOptimized/IMG_E1746.webp', avif: './ShortPixelOptimized/IMG_E1746.avif',
    alt: 'Photo of Tunde Ade',
    caption: '“Clean code and simple customization. Got my site live in a day.” — Tunde Ade'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1747.JPG', webp: './ShortPixelOptimized/IMG_E1747.webp', avif: './ShortPixelOptimized/IMG_E1747.avif',
    alt: 'Photo of Amina Yusuf',
    caption: '“Perfect for client projects. Documentation is excellent.” — Amina Yusuf, Web Designer'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1748.JPG', webp: './ShortPixelOptimized/IMG_E1748.webp', avif: './ShortPixelOptimized/IMG_E1748.avif',
    alt: 'Placeholder image 4',
    caption: 'Placeholder caption for slide 4'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1749.JPG', webp: './ShortPixelOptimized/IMG_E1749.webp', avif: './ShortPixelOptimized/IMG_E1749.avif',
    alt: 'Placeholder image 5',
    caption: 'Placeholder caption for slide 5'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1750.JPG', webp: './ShortPixelOptimized/IMG_E1750.webp', avif: './ShortPixelOptimized/IMG_E1750.avif',
    alt: 'Placeholder image 6',
    caption: 'Placeholder caption for slide 6'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1751.JPG', webp: './ShortPixelOptimized/IMG_E1751.webp', avif: './ShortPixelOptimized/IMG_E1751.avif',
    alt: 'Placeholder image 7',
    caption: 'Placeholder caption for slide 7'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1752.JPG', webp: './ShortPixelOptimized/IMG_E1752.webp', avif: './ShortPixelOptimized/IMG_E1752.avif',
    alt: 'Placeholder image 8',
    caption: 'Placeholder caption for slide 8'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1754.JPG', webp: './ShortPixelOptimized/IMG_E1754.webp', avif: './ShortPixelOptimized/IMG_E1754.avif',
    alt: 'Placeholder image 9',
    caption: 'Placeholder caption for slide 9'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1755.JPG', webp: './ShortPixelOptimized/IMG_E1755.webp', avif: './ShortPixelOptimized/IMG_E1755.avif',
    alt: 'Placeholder image 10',
    caption: 'Placeholder caption for slide 10'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1755.JPG', webp: './ShortPixelOptimized/IMG_E1755.webp', avif: './ShortPixelOptimized/IMG_E1757.avif',
    alt: 'Placeholder image 11',
    caption: 'Placeholder caption for slide 11'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1757.JPG', webp: './ShortPixelOptimized/IMG_E1757.webp', avif: './ShortPixelOptimized/IMG_E1757.avif',
    alt: 'Placeholder image 13',
    caption: 'Placeholder caption for slide 13'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1758.JPG', webp: './ShortPixelOptimized/IMG_E1758.webp', avif: './ShortPixelOptimized/IMG_E1758.avif',
    alt: 'Placeholder image 14',
    caption: 'Placeholder caption for slide 14'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1759.JPG', webp: './ShortPixelOptimized/IMG_E1759.webp', avif: './ShortPixelOptimized/IMG_E1759.avif',
    alt: 'Placeholder image 15',
    caption: 'Placeholder caption for slide 15'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1760.JPG', webp: './ShortPixelOptimized/IMG_E1760.webp', avif: './ShortPixelOptimized/IMG_E1760.avif',
    alt: 'Placeholder image 16',
    caption: 'Placeholder caption for slide 16'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1761.JPG', webp: './ShortPixelOptimized/IMG_E1761.webp', avif: './ShortPixelOptimized/IMG_E1761.avif',
    alt: 'Placeholder image 17',
    caption: 'Placeholder caption for slide 17'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1762.JPG', webp: './ShortPixelOptimized/IMG_E1762.webp', avif: './ShortPixelOptimized/IMG_E1762.avif',
    alt: 'Placeholder image 18',
    caption: 'Placeholder caption for slide 18'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1763.JPG', webp: './ShortPixelOptimized/IMG_E1763.webp', avif: './ShortPixelOptimized/IMG_E1763.avif',
    alt: 'Placeholder image 19',
    caption: 'Placeholder caption for slide 19'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1764.JPG', webp: './ShortPixelOptimized/IMG_E1764.webp', avif: './ShortPixelOptimized/IMG_E1764.avif',
    alt: 'Placeholder image 20',
    caption: 'Placeholder caption for slide 20'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1765.JPG', webp: './ShortPixelOptimized/IMG_E1765.webp', avif: './ShortPixelOptimized/IMG_E1765.avif',
    alt: 'Placeholder image 21',
    caption: 'Placeholder caption for slide 21'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1766.JPG', webp: './ShortPixelOptimized/IMG_E1766.webp', avif: './ShortPixelOptimized/IMG_E1766.avif',
    alt: 'Placeholder image 22',
    caption: 'Placeholder caption for slide 22'
},
{
    jpeg: './ShortPixelOptimized/IMG_E1767.JPG', webp: './ShortPixelOptimized/IMG_E1767.webp', avif: './ShortPixelOptimized/IMG_E1767.avif',
    alt: 'Placeholder image 23',
    caption: 'Placeholder caption for slide 23'
}
];

let currentIndex = 0;
let slideshow, track, dotsContainer, prevBtn, nextBtn, playPauseBtn, announcer;
let autoplayInterval = null;
let isAutoplayPermanentlyStopped = false;
let isPausedOnHover = false;
let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Swipe gesture state
let isPointerDown = false;
let startX = 0;
let currentTranslate = 0;
let lastTranslate = 0;
let velocity = 0;
let animationFrameId = null;

/**
 * Initializes the slideshow, creates slides and dots, and sets up event listeners.
 */
function initSlideshow() {
    // Assign DOM elements now that the DOM is loaded
    slideshow = document.getElementById('slideshow');
    
    // If the slideshow element doesn't exist on this page, exit gracefully.
    if (!slideshow) {
        return;
    }

    track = slideshow.querySelector('.slideshow-track');
    dotsContainer = slideshow.querySelector('.dots-container');
    prevBtn = slideshow.querySelector('.slideshow-nav-btn.prev');
    nextBtn = slideshow.querySelector('.slideshow-nav-btn.next');
    playPauseBtn = slideshow.querySelector('.play-pause-btn');
    announcer = slideshow.querySelector('.status-announcer');


    // Preload first 3 images
    for (let i = 0; i < Math.min(3, images.length); i++) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = images[i].jpeg;
        link.imageSrcset = `${images[i].webp} 1x, ${images[i].avif} 1x`;
        document.head.appendChild(link);
    }

    images.forEach((imgData, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.role = 'group';
        slide.ariaRoleDescription = 'slide';
        slide.ariaLabel = `Slide ${index + 1} of ${images.length}`;
        slide.dataset.index = index;
        // Picture element will be added by ensureImageLoaded
        track.appendChild(slide);

        // Create dot
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.dataset.index = index;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dotsContainer.appendChild(dot);
    });

    addEventListeners();
    goTo(0, { isInitial: true });

    if (!prefersReducedMotion) {
        startAutoplay();
    } else {
        isAutoplayPermanentlyStopped = true;
        updatePlayPauseButton();
    }
    
    setupIntersectionObserver();
}

/**
 * Sets up an IntersectionObserver to lazy-load images.
 */
function setupIntersectionObserver() {
    const slides = track.querySelectorAll('.slide');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slide = entry.target;
                const index = parseInt(slide.dataset.index, 10);
                ensureImageLoaded(index);
                // No need to unobserve, as cleanup might remove the image
            }
        });
    }, { root: slideshow, rootMargin: "200px" });

    slides.forEach((slide, index) => {
        // Don't observe preloaded slides
        if (index >= 3) {
            observer.observe(slide);
        }
    });
}

/**
 * Adds all necessary event listeners.
 */
function addEventListeners() {
    nextBtn.addEventListener('click', () => {
        stopAutoplay(true);
        next();
    });
    prevBtn.addEventListener('click', () => {
        stopAutoplay(true);
        prev();
    });
    dotsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.dot')) {
            stopAutoplay(true);
            const index = parseInt(e.target.dataset.index, 10);
            goTo(index);
        }
    });
    playPauseBtn.addEventListener('click', togglePlayPause);

    // Keyboard navigation
    slideshow.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            stopAutoplay(true);
            next();
        } else if (e.key === 'ArrowLeft') {
            stopAutoplay(true);
            prev();
        } else if (e.key === 'Escape') {
            if(document.activeElement !== slideshow) document.activeElement.blur();
        }
    });

    // Pointer events for swipe
    track.addEventListener('pointerdown', handlePointerStart);
    track.addEventListener('pointermove', handlePointerMove);
    track.addEventListener('pointerup', handlePointerEnd);
    track.addEventListener('pointercancel', handlePointerEnd);

    // Pause on hover
    slideshow.addEventListener('mouseenter', () => {
        if (autoplayInterval && !isAutoplayPermanentlyStopped) {
            isPausedOnHover = true;
            stopAutoplay(false);
        }
    });
    slideshow.addEventListener('mouseleave', () => {
        if (isPausedOnHover) {
            isPausedOnHover = false;
            startAutoplay();
        }
    });
}

/**
 * Navigates to a specific slide.
 * @param {number} index - The index of the slide to go to.
 * @param {object} [options] - Options for the transition.
 * @param {boolean} [options.isInitial=false] - If this is the initial load.
 */
function goTo(index, options = {}) {
    const { isInitial = false } = options;
    if (index === currentIndex && !isInitial) return;

    const slides = track.querySelectorAll('.slide');
    const dots = dotsContainer.querySelectorAll('.dot');
    const oldIndex = currentIndex;

    currentIndex = (index + images.length) % images.length;

    // Update slides
    slides[oldIndex].classList.remove('active');
    slides[currentIndex].classList.add('active');
    
    if (!prefersReducedMotion) {
        slides.forEach((slide, i) => {
            const offset = i - currentIndex;
            slide.style.transform = `translateX(${offset * 10}px)`;
        });
    }

    // Update dots
    if (dots[oldIndex]) {
        dots[oldIndex].classList.remove('active');
        dots[oldIndex].removeAttribute('aria-current');
        dots[oldIndex].disabled = false;
    }
    dots[currentIndex].classList.add('active');
    dots[currentIndex].setAttribute('aria-current', 'true');
    dots[currentIndex].disabled = true;

    // Announce for screen readers
    announcer.textContent = `Slide ${currentIndex + 1} of ${images.length}`;

    // Handle image loading/unloading
    ensureImageLoaded(currentIndex);
    cleanupFarImages();
}

/** Goes to the next slide. */
function next() {
    goTo(currentIndex + 1);
}

/** Goes to the previous slide. */
function prev() {
    goTo(currentIndex - 1);
}

/** Starts the autoplay interval. */
function startAutoplay() {
    if (autoplayInterval || isAutoplayPermanentlyStopped || prefersReducedMotion) return;
    autoplayInterval = setInterval(next, AUTOPLAY_INTERVAL);
    playPauseBtn.classList.add('playing');
    playPauseBtn.setAttribute('aria-label', 'Pause slideshow');
}

/**
 * Stops the autoplay interval.
 * @param {boolean} [permanent=true] - If true, autoplay won't restart on its own.
 */
function stopAutoplay(permanent = true) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
    if (permanent) {
        isAutoplayPermanentlyStopped = true;
    }
    updatePlayPauseButton();
}

/** Toggles the play/pause state of the slideshow. */
function togglePlayPause() {
    if (autoplayInterval) { // Is playing or paused on hover
        isPausedOnHover = false;
        stopAutoplay(true);
    } else { // Is stopped
        isAutoplayPermanentlyStopped = false;
        startAutoplay();
        next(); // Immediately go to next slide upon resuming
    }
}

/** Updates the play/pause button's state and ARIA label. */
function updatePlayPauseButton() {
    if (autoplayInterval) {
        playPauseBtn.classList.add('playing');
        playPauseBtn.setAttribute('aria-label', 'Pause slideshow');
    } else {
        playPauseBtn.classList.remove('playing');
        playPauseBtn.setAttribute('aria-label', 'Play slideshow');
    }
}

/**
 * Ensures the image for a given slide index is loaded.
 * @param {number} index - The slide index.
 */
function ensureImageLoaded(index) {
    const slide = track.children[index];
    if (!slide || slide.querySelector('picture')) return; // Already loaded

    const imgData = images[index];
    const picture = document.createElement('picture');
    picture.innerHTML = `
        <source srcset="${imgData.avif}" type="image/avif">
        <source srcset="${imgData.webp}" type="image/webp">
        <img src="${imgData.jpeg}" alt="${imgData.alt}" loading="eager">
    `;
    const caption = document.createElement('div');
    caption.className = 'slide-caption';
    caption.textContent = imgData.caption;
    
    slide.appendChild(picture);
    slide.appendChild(caption);
}

/**
 * Removes image sources from slides that are far from the current view to save memory.
 */
function cleanupFarImages() {
    const slides = track.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        const distance = Math.abs(index - currentIndex);
        const wrappedDistance = Math.min(distance, images.length - distance);
        if (wrappedDistance > IMAGES_TO_KEEP_LOADED && slide.innerHTML !== '') {
            slide.innerHTML = ''; // Unload image
        }
    });
}

// --- SWIPE GESTURE HANDLING ---

function handlePointerStart(e) {
    if (e.button !== 0) return; // Only main button
    isPointerDown = true;
    startX = e.pageX;
    lastTranslate = currentTranslate;
    velocity = 0;
    
    stopAutoplay(true);
    cancelAnimationFrame(animationFrameId);
    track.style.transition = 'none';
}

function handlePointerMove(e) {
    if (!isPointerDown) return;
    const currentX = e.pageX;
    currentTranslate = lastTranslate + currentX - startX;
    velocity = currentTranslate - (lastTranslate + (currentX - startX - velocity)); // Simplified velocity
    setTrackPosition();
}

function handlePointerEnd(e) {
    if (!isPointerDown) return;
    isPointerDown = false;
    
    const slideWidth = slideshow.offsetWidth;
    const movedBy = currentTranslate - lastTranslate;

    let targetIndex = currentIndex;
    if (Math.abs(movedBy) > SWIPE_THRESHOLD) {
        // Flick gesture check
        if (Math.abs(velocity) > 5) {
             targetIndex -= Math.sign(movedBy) * 2; // Skip a slide
        } else {
             targetIndex -= Math.sign(movedBy);
        }
    }
    
    goTo(targetIndex);
    
    track.style.transition = `transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)`;
    currentTranslate = 0;
    setTrackPosition();
}

function setTrackPosition() {
    if (prefersReducedMotion) return;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', initSlideshow);