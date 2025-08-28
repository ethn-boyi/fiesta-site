document.addEventListener("DOMContentLoaded", function () {
    // ======= CARD SLIDER =======
    const slider = document.querySelector(".card-slider");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");
    const coursesSection = document.querySelector(".courses-section");

    if (slider) {
        const card = document.querySelector(".course-card");
        const cardWidth = card ? card.offsetWidth + 20 : 0;
        const scrollAmount = cardWidth * 2;

        function scrollNext() {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }

        function scrollPrev() {
            if (slider.scrollLeft === 0) {
                slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        }

        coursesSection.addEventListener("mouseenter", () => {
            document.querySelector(".slider-buttons").style.display = "flex";
        });

        coursesSection.addEventListener("mouseleave", () => {
            document.querySelector(".slider-buttons").style.display = "none";
        });

        nextButton.addEventListener("click", scrollNext);
        prevButton.addEventListener("click", scrollPrev);
    }

    // ======= SLIDESHOW =======
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function changeSlide(direction) {
        slideIndex += direction;
        if (slideIndex >= totalSlides) slideIndex = 0;
        if (slideIndex < 0) slideIndex = totalSlides - 1;
        showSlide(slideIndex);
        resetSlideInterval();
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => changeSlide(1), 4000);
    }

    if (slides.length > 0) {
        showSlide(slideIndex);
        slideInterval = setInterval(() => changeSlide(1), 4000);
    }

    // ======= HERO SCROLL DETECTION =======
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        const heroObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("in-view", entry.isIntersecting);
            });
        }, { threshold: 0.1 });

        heroObserver.observe(heroSection);
    }

    // ======= LIGHTBOX =======
    window.openLightbox = function (imageSrc, description) {
        const lightboxModal = document.getElementById("lightboxModal");
        const lightboxImage = document.getElementById("lightboxImage");
        const lightboxDescription = document.getElementById("lightboxDescription");

        if (lightboxModal && lightboxImage && lightboxDescription) {
            lightboxImage.src = imageSrc;
            lightboxDescription.innerText = description;
            lightboxModal.style.display = "flex";
        }
    }

    window.closeLightbox = function () {
        const lightboxModal = document.getElementById("lightboxModal");
        if (lightboxModal) lightboxModal.style.display = "none";
    }

    // ======= SIDEBAR TOGGLE =======
    window.toggleSidebar = function () {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.toggle('active');
    }

    window.showSidebar = function () {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.style.display = 'flex';
    }

    window.hideSidebar = function () {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.style.display = 'none';
    }

    // ======= SCROLL ANIMATIONS =======
    const fadeElements = document.querySelectorAll('.fade-in, .fade-up');
    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        fadeElements.forEach(el => observer.observe(el));
    }

    // ======= SIDEBAR DROPDOWN TOGGLE =======
    const sidebarDropdowns = document.querySelectorAll(".sidebar-dropdown");
    sidebarDropdowns.forEach(drop => {
        const arrow = drop.querySelector(".arrow");
        arrow.addEventListener("click", (e) => {
            e.preventDefault(); // stop link navigation
            drop.classList.toggle("open");
        });
    });
});
