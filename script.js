document.addEventListener('DOMContentLoaded', () => {
  // 1. Mouse Spotlight Effect (Desktop only)
  const spotlight = document.querySelector('.spotlight');
  
  if (spotlight) {
    // Only update on mouse moves to avoid calculations on mobile touch scrolls
    window.addEventListener('mousemove', (e) => {
      spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  }

  // 2. Scroll Spy (Scroll-Tracking Navigation)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const spyObserverOptions = {
    root: null,
    rootMargin: '-25% 0px -55% 0px', // Triggers when section occupies the active focal area
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, spyObserverOptions);

  sections.forEach(section => spyObserver.observe(section));

  // Fallback for reaching bottom of page (highlights last section link)
  window.addEventListener('scroll', () => {
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 10);
    if (isAtBottom && navLinks.length > 0) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[navLinks.length - 1].classList.add('active');
    }
  });

  // 3. Scroll Reveal Animations (Fade in up)
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserverOptions = {
    root: null,
    threshold: 0.05, // Trigger as soon as a tiny part is visible
    rootMargin: '0px 0px -80px 0px' // Adjust to trigger slightly early
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => revealObserver.observe(el));
});
