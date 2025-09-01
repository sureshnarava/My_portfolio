// Typing animation
const typing = document.getElementById("typing");
const roles = ["Junior DevOps Engineer", "Cloud Enthusiast", "Automation Lover"];
let roleIndex = 0, charIndex = 0;
function typeRole(){
  if(charIndex < roles[roleIndex].length){
    typing.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}
function eraseRole(){
  if(charIndex > 0){
    typing.textContent = roles[roleIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex+1)%roles.length;
    setTimeout(typeRole, 500);
  }
}
document.addEventListener("DOMContentLoaded", typeRole);

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", ()=>{
  reveals.forEach(r=>{
    const top = r.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) r.classList.add("active");
  });
});

// Animated skill bars (trigger when in view)
const skillBars = document.querySelectorAll(".skill-bar");
function animateSkills(){
  skillBars.forEach(bar => {
    const value = bar.getAttribute("data-skill");
    bar.style.width = value + "%";
  });
}

// Trigger skill animation on scroll
window.addEventListener("scroll", ()=>{
  const skillsSection = document.querySelector(".skills");
  const top = skillsSection.getBoundingClientRect().top;
  if(top < window.innerHeight - 100) animateSkills();
});

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navbar");
hamburger.addEventListener("click", ()=> nav.classList.toggle("show"));

// Gradient Wave Background
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let waveOffset = 0;
function drawWave() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#0a0f1c');
  gradient.addColorStop(0.5, '#112240');
  gradient.addColorStop(1, '#0a0f1c');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2);
  for(let x=0; x <= canvas.width; x+=1){
    ctx.lineTo(x, canvas.height/2 + Math.sin((x + waveOffset)/50) * 30);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0,191,255,0.15)';
  ctx.fill();

  waveOffset += 2;
  requestAnimationFrame(drawWave);
}
drawWave();
window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
