// Mobile menu + current year
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (btn && nav){
  btn.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
