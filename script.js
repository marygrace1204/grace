// REMINDER!! ANG GAGALAWIN NYO LANG DITO IS YUNG TYPING ANIMATION YUNG LANG WALA NG IBA.
// ICONNECT NYO DIN SA ASSIGNMENT NINYO YUNG ILALAGAY NYO SA TYPING ANIMATION PARA MAS MAGANDANG TIGNAN.
// MARAMING SALAMAT !!

// JavaScript PARA SA TYPING ANIMATION
// Typing Animation
const messages = [
    "ALINDAHAW TUKURAN ZAMBOANGA DEL SUR",
    
];
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingOutput = document.getElementById('typing-output');

function typeMessage() {
    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        typingOutput.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingOutput.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 50;

    if (!isDeleting && charIndex === currentMessage.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typeSpeed = 500;
    }

    setTimeout(typeMessage, typeSpeed);
}

// Start typing animation
typeMessage();

// Image Slideshow
function initSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow-container');
    
    slideshows.forEach((slideshow, index) => {
        const slides = slideshow.querySelectorAll('.slide');
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000 + (index * 500)); // Stagger the slideshows
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.42)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.42)';
        header.style.backdropFilter = 'blur(10px)';
    }
});


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const galleryImages = Array.from(document.querySelectorAll(".gallery img"));

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modalImg.src = galleryImages[currentIndex].src;
  modalImg.alt = galleryImages[currentIndex].alt;
  modal.style.display = "flex";
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  modalImg.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ✅ Add Keyboard support
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowRight") {
      showNext();
    } else if (e.key === "ArrowLeft") {
      showPrev();
    } else if (e.key === "Escape") {
      modal.style.display = "none";
    }
  }
});

