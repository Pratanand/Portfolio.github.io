document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    var typed = new Typed(".text", {
      strings: ["Full Stack Developer", "Frontend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  });
  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
const menuButton = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});