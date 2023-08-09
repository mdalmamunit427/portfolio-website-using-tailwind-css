const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");


mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
});

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
      // header.classList.toggle("sticky", window.scrollY > 100);

      if (window.scrollY > 100) {
            header.classList.toggle("sticky", window.scrollY > 0);
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          } else {
            header.style.backgroundColor = 'transparent';
      }
});



// smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetSection = document.querySelector(this.getAttribute('href'));
          const navHeight = document.querySelector('nav').offsetHeight; // Adjust selector
          let extraPadding = 0;
          if (window.innerWidth >= 768) {
            extraPadding = 50; // Apply extra padding only on larger devices
        }
  
          window.scrollTo({
              top: targetSection.offsetTop - navHeight - extraPadding,
              behavior: 'smooth'
          });

          // Reset URL to root path when a link is clicked
        if (window.location.hash) {
            window.location.replace(window.location.pathname);
        }

      });
  });
  