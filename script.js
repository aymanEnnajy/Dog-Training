// Toggle navigation menu on mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Toggle the 'active' class for both the menu and hamburger icon
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");  // Ajoutez cette ligne pour l'icône hamburger
});






var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Shows 3 images at a time
    spaceBetween: 20, // Spacing between images
    loop: true, // Infinite loop
    autoplay: {
        delay: 5000, // Scrolls every 5 seconds
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 }, // 1 image on small screens
        768: { slidesPerView: 2 }, // 2 images on tablets
        1024: { slidesPerView: 3 } // 3 images on large screens
    }
});








const serviceData = {
    1: { title: "Training", description: "We provide expert dog training to improve behavior and obedience.", icon: "images/dog-training.png" },
    2: { title: "Grooming", description: "Pamper your pet with our professional grooming services.", icon: "images/groming.png" },
    3: { title: "Vet Care", description: "Ensure your dog's health with our veterinary check-ups.", icon: "images/veterinary.png" }
};

function showService(id) {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("services").style.display = "block";
    document.getElementById("service-details").style.display = "flex";
    document.getElementById("service-title").innerText = serviceData[id].title;
    document.getElementById("service-description").innerText = serviceData[id].description;
    document.getElementById("service-icon").innerHTML = `<img src="${serviceData[id].icon}" width="60">`;
}

function hideService() {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("services").style.display = "flex";
    document.getElementById("service-details").style.display = "none";
}




/*go top*/
// Récupère le bouton
var mybutton = document.getElementById("goTopBtn");

// Lorsque l'utilisateur fait défiler la page, montre ou cache le bouton
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Affiche le bouton
    } else {
        mybutton.style.display = "none"; // Cache le bouton
    }
};

// Lorsque l'utilisateur clique sur le bouton, il revient en haut de la page
mybutton.onclick = function() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour les autres navigateurs
}






document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("video-modal");
    let videoFrame = document.getElementById("video-frame");
    let closeBtn = document.querySelector(".close");

    document.querySelectorAll(".cam-box").forEach(box => {
        box.addEventListener("click", function () {
            let videoUrl = this.getAttribute("data-video");
            videoFrame.src = videoUrl + "?autoplay=1"; // Auto-play la vidéo
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        videoFrame.src = ""; // Stop video playback
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoFrame.src = "";
        }
    });
});