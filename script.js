// ---- Basic DOM helpers ----
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Typing animation ----
const typingEl = document.getElementById('typing');
const roles = ['Junior DevOps Engineer', 'Cloud Enthusiast', 'Automation Lover'];
let r = 0, c = 0, typingActive = true;

function typeLoop() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typingEl.textContent = roles[0];
    return;
  }
  if (c < roles[r].length) {
    typingEl.textContent += roles[r].charAt(c++);
    setTimeout(typeLoop, 80);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (c > 0) {
    typingEl.textContent = roles[r].substring(0, c - 1);
    c--;
    setTimeout(erase, 40);
  } else {
    r = (r + 1) % roles.length;
    setTimeout(typeLoop, 400);
  }
}
document.addEventListener('DOMContentLoaded', typeLoop);

// ---- Mobile nav toggle (with ARIA) ----
const hamburger = $('#hamburger');
const nav = $('#navbar');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });
  // close nav on link click (mobile)
  $$('#navbar a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  }));
}

// ---- IntersectionObserver for reveal and skill bars ----
const revealEls = document.querySelectorAll('.reveal');
const options = {threshold: 0.12};
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      obs.unobserve(entry.target);
    }
  });
}, options);
revealEls.forEach(el => revealObserver.observe(el));

// Skill bar animation
const barFills = document.querySelectorAll('.bar-fill');
const skillsObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      barFills.forEach(b => {
        const v = b.getAttribute('data-skill');
        b.style.width = v + '%';
      });
      obs.disconnect(); // animate once
    }
  });
}, {threshold: 0.2});
const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);

// ---- Smooth scroll offset for fixed header (optional for browsers without native support) ----
(function adjustAnchorScroll(){
  const shiftWindow = () => {
    if (location.hash) {
      window.scrollTo(window.scrollX, window.scrollY - 72);
    }
  };
  window.addEventListener("hashchange", shiftWindow);
  window.setTimeout(shiftWindow, 10);
})();

// ---- Canvas background (wave) ----
const canvas = document.getElementById('bg');
let ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null;

if (canvas && ctx && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  function resizeCanvas(){
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  let waveOffset = 0;
  function drawWave(){
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);
    ctx.clearRect(0,0,w,h);
    const grad = ctx.createLinearGradient(0,0,w,h);
    grad.addColorStop(0, '#061226');
    grad.addColorStop(0.5, '#0b1626');
    grad.addColorStop(1, '#061226');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,w,h);

    ctx.beginPath();
    ctx.moveTo(0, h * 0.6);
    for (let x = 0; x <= w; x += 1) {
      ctx.lineTo(x, h * 0.6 + Math.sin((x + waveOffset) / 60) * 28);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,191,255,0.08)';
    ctx.fill();

    waveOffset += 1.8;
    requestAnimationFrame(drawWave);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  drawWave();
} else if (canvas) {
  canvas.style.display = 'none';
}

// ---- Contact form via EmailJS ----
document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS - replace 'YOUR_EMAILJS_USER_ID' with your EmailJS user id
  if (typeof emailjs !== 'undefined') {
    try {
      emailjs.init('E0DvwYrNJypi6nk_V'); // <-- replace
    } catch (e) {
      // ignore init errors
    }
  }

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'Sending...';

      // Replace service ID and template ID with your EmailJS values
      const SERVICE_ID = 'service_xuy8dhl';
      const TEMPLATE_ID = 'template_opxkuye';

      if (typeof emailjs === 'undefined') {
        // fallback: simple mailto link if EmailJS not configured
        status.textContent = 'Email service not configured. Installing EmailJS is recommended.';
        // For user convenience, open the mail client
        const name = form.from_name.value || '';
        const mail = form.from_email.value || '';
        const msg = form.message.value || '';
        window.location.href = `mailto:sureshbabunarava@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + mail)}`;
        return;
      }

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
        .then(() => {
          status.textContent = 'Message sent — thank you!';
          form.reset();
        }, (err) => {
          status.textContent = 'Error sending. Please try again later.';
          console.error('EmailJS error:', err);
        });
    });
  }
});
