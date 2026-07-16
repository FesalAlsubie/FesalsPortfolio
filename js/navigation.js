/* navigation.js
   Handles the mobile nav toggle and accessible behavior.
*/
(function(){
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.hidden = expanded;
    mobileMenu.style.display = expanded ? 'none' : 'block';
    // Focus the first link for accessibility
    if (!expanded) {
      const first = mobileMenu.querySelector('a');
      if (first) first.focus();
    }
  });

  // close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      mobileMenu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.style.display = 'none';
    }
  });
})();