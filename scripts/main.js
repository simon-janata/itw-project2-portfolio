const menuToggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector("nav");
const navbarLinks = document.querySelectorAll("nav a");
const friendsImages = document.querySelectorAll(".friend-img");
const rivalsImages = document.querySelectorAll(".rival-img");
const socialIcons = document.querySelectorAll(".socials a");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");



menuToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggleBtn.classList.toggle("active");
});




navbarLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("data-target").substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - 50;

      navbar.classList.remove("active");
      menuToggleBtn.classList.remove("active");

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});


friendsImages.forEach(img => {
  const color = img.getAttribute("data-color");
  img.style.color = color;
});

rivalsImages.forEach(img => {
  const color = img.getAttribute("data-color");
  img.style.color = color;
});


socialIcons.forEach(icon => {
  const color = icon.getAttribute("data-color");
  icon.style.color = "#1f1f1f"; // Default color

  icon.addEventListener("mouseover", () => {
    icon.style.color = color; // Change to red on hover
  });
  icon.addEventListener("mouseout", () => {
    icon.style.color = "#1f1f1f"; // Revert to original color
  });
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
})

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
