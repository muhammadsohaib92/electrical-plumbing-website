
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ===== Form validation + submit ===== */
 /* ===== Form Validation + WhatsApp Submit ===== */

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){

  e.preventDefault();
  e.stopPropagation();

  if(!form.checkValidity()){
    form.classList.add('was-validated');
    return;
  }

  let name = document.getElementById('nameInput').value;
  let phone = document.getElementById('phoneInput').value;
  let service = document.getElementById('serviceInput').value;
  let details = document.getElementById('detailsInput').value;

  let message =
`الاسم: ${name}
رقم الجوال: ${phone}
الخدمة: ${service}
التفاصيل: ${details}`;

  let whatsappNumber = "966537512816"; // Yahan owner ka number lagao

  let whatsappURL =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');

  form.reset();
  form.classList.remove('was-validated');
});

/* Remove invalid state as user types */

form.querySelectorAll('.form-control').forEach(el=>{
  el.addEventListener('input', ()=>{
    el.classList.remove('is-invalid');
  });
});

  // Remove invalid state as user types
  form.querySelectorAll('.form-control').forEach(el=>{
    el.addEventListener('input', ()=> el.classList.remove('is-invalid'));
  });

  /* ===== Smooth scroll for nav links + close mobile menu ===== */
  document.querySelectorAll('a.nav-link, a.btn-call').forEach(link=>{
    link.addEventListener('click', function(){
      const menu = document.getElementById('navMenu');
      if(menu.classList.contains('show')){
        new bootstrap.Collapse(menu).hide();
      }
    });
  });

  /* ===== Navbar shrink on scroll ===== */
  const mainNav = document.getElementById('mainNav');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', function(){
    if(window.scrollY > 60){
      mainNav.classList.add('scrolled');
      scrollTopBtn.classList.add('show');
    } else {
      mainNav.classList.remove('scrolled');
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ===== Active nav link highlight on scroll ===== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink(){
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      if(scrollPos >= section.offsetTop){
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + current){
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  /* ===== Reveal on scroll (Intersection Observer) ===== */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));
