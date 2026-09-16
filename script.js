// ===== Плавающие сердечки =====
const heartsBg = document.getElementById('heartsBg');
const heartEmojis = ['💖', '💕', '💗', '🩷', '💞', '🤍'];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (14 + Math.random() * 22) + 'px';
  heart.style.animationDuration = (8 + Math.random() * 8) + 's';
  heart.style.animationDelay = Math.random() * 5 + 's';
  heartsBg.appendChild(heart);

  setTimeout(() => heart.remove(), 20000);
}

setInterval(createHeart, 600);

// Приятный старт — сразу сердечки
for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 200);
}

// ===== Появление блоков при скролле =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

reveals.forEach((el) => observer.observe(el));