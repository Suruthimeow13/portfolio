// Typing Effect
const typingText = "Suruthivimal";
let i = 0;
const speed = 100;

function typeEffect() {
  if (i < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  } else {
    document.getElementById("typing").style.borderRight = "none"; // remove blinking cursor
  }
}

window.onload = typeEffect;

// Scroll Animations
const faders = document.querySelectorAll('.fade-in');

function handleScroll() {
  faders.forEach((fade, index) => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        fade.classList.add('visible');
      }, index * 150); // stagger the fade-ins
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.fade-para').forEach(p => {
  observer.observe(p);
});

const fadeIns = document.querySelectorAll('.fade-in-scroll');

const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // run animation once
    }
  });
}, {
  threshold: 0.2
});

fadeIns.forEach(el => observer.observe(el));
