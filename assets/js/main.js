(() => {
  const menuBtn = document.querySelector('.menu-button');
  const menu = document.querySelector('#mobile-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.hidden = true;
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  const reveals = document.querySelectorAll('.reveal, .project-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px' });
    reveals.forEach((el, index) => {
      if (el.classList.contains('project-card')) {
        el.classList.add('reveal');
        el.style.transitionDelay = `${Math.min((index % 6) * 55, 220)}ms`;
      }
      observer.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const img = lightbox.querySelector('img');
    const close = lightbox.querySelector('.lightbox-close');
    const openLightbox = (src, alt) => {
      img.src = src;
      img.alt = alt || 'Ảnh minh chứng phóng lớn';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      close.focus();
    };
    const closeLightbox = () => {
      lightbox.hidden = true;
      img.removeAttribute('src');
      document.body.style.overflow = '';
    };
    document.querySelectorAll('.image-zoom').forEach((button) => {
      button.addEventListener('click', () => {
        const thumb = button.querySelector('img');
        openLightbox(button.dataset.image, thumb?.alt);
      });
    });
    close?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  }
})();
