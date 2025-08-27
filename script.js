document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".card-slider");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");
    const coursesSection = document.querySelector(".courses-section");

    const cardWidth = document.querySelector(".course-card").offsetWidth + 20; // Adjust gap if needed
    const scrollAmount = cardWidth * 2; // Moves by 2 cards at a time

    // Function to scroll to the next card
    function scrollNext() {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }

    // Function to scroll to the previous card
    function scrollPrev() {
        if (slider.scrollLeft === 0) {
            slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
        } else {
            slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    }

    // Show slider buttons when mouse enters the course section
    coursesSection.addEventListener("mouseenter", function () {
        document.querySelector(".slider-buttons").style.display = "flex";
    });

    // Hide slider buttons when mouse leaves the course section
    coursesSection.addEventListener("mouseleave", function () {
        document.querySelector(".slider-buttons").style.display = "none";
    });

    // Button controls for Next and Previous
    nextButton.addEventListener("click", scrollNext);
    prevButton.addEventListener("click", scrollPrev);
});


// EXISTING SLIDESHOW CODE
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

// Function to change slides manually
function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= totalSlides) slideIndex = 0;
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    showSlide(slideIndex);
}

// Auto-change slides every 4 seconds
setInterval(() => changeSlide(1), 4000);

// Initialize first slide
showSlide(slideIndex);

// NEW SCROLL DETECTION CODE
document.addEventListener("scroll", function () {
    const heroSection = document.querySelector(".hero");
    const rect = heroSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
        heroSection.classList.add("in-view");
    } else {
        heroSection.classList.remove("in-view");
    }
});


// Function to open the lightbox with the clicked image and its description
function openLightbox(imageSrc, description) {
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxDescription = document.getElementById("lightboxDescription");

  // Set the source of the modal image to the clicked image's source
  lightboxImage.src = imageSrc;

  // Set the description in the lightbox
  lightboxDescription.innerText = description;

  // Display the modal
  lightboxModal.style.display = "flex"; // Use flex to center content
}

// Function to close the lightbox
function closeLightbox() {
  const lightboxModal = document.getElementById("lightboxModal");
  lightboxModal.style.display = "none";
}

// Toggle Sidebar visibility on small screens
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebarr');
  sidebar.classList.toggle('active');
}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

 // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in, .fade-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    