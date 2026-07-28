const ORDER_FORM_URL='https://forms.google.com/YOUR-FORM-LINK';
document.querySelectorAll('[data-order]').forEach(a=>{a.href=ORDER_FORM_URL;a.target='_blank';a.rel='noopener'});
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
