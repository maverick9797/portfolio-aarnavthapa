const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const clickSound = document.getElementById("click-sound");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    clickSound.play();  
});

// FORM MESSAGE FEEDBACK
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});