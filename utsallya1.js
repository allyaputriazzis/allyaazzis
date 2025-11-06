// ====== SIDEBAR TOGGLE ======
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// ====== DIGITAL CLOCK ======
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();


// ====== SCROLL SMOOTH NAVIGATION ======
// Saat klik link di navbar, halaman scroll pelan ke bagian tujuan
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// ====== SIMPLE HOVER SOUND EFFECT (optional) ======
// Biar tiap kali mouse ke tombol RSVP atau navigasi, muncul efek klik ringan
const hoverSound = new Audio('https://cdn.pixabay.com/download/audio/2023/04/27/audio_9ab4bcdcf7.mp3?filename=click-124467.mp3');
const clickableElements = document.querySelectorAll('.btn, nav a');

clickableElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.volume = 0.2;
    hoverSound.play();
  });
});


// ====== SCROLL REVEAL EFFECT ======
// Elemen di bagian bawah akan muncul perlahan saat discroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.box-content, .image-card, .articles article').forEach((el) => observer.observe(el));
