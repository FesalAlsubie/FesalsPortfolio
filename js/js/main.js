/* main.js
   Small helpers: set current year, enable scroll reveal, smooth anchor scroll
*/
document.addEventListener('DOMContentLoaded', () => {
  // set year
  const y = new Date().getFullYear();
  document.getElementById('year') && (document.getElementById('year').textContent = y);

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({behavior:'smooth', block:'start'});
          target.setAttribute('tabindex','-1');
          target.focus({preventScroll:true});
        }
      }
    });
  });

  // intersection observer for reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, {threshold:0.12});

  document.querySelectorAll('.fade-in, .hero-title, .project-card, .system-card').forEach(el=>{
    observer.observe(el);
  });
});