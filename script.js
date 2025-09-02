document.addEventListener('DOMContentLoaded', () => {

  /* 1. BURGER TOGGLE */
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  /* 2. SCROLL-SPY (Active Link Highlighting) */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  if (sections.length && navAnchors.length) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navAnchors.forEach((a) => a.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px' }
    );
    sections.forEach((s) => spyObserver.observe(s));
  }
  
  /* 3. FADE/SLIDE-IN ANIMATION ON SCROLL */
  const animatedElements = document.querySelectorAll('.scroll-animate');
  if (animatedElements.length) {
    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );
    animatedElements.forEach((el) => animationObserver.observe(el));
  }

  /* 4. TYPING ANIMATION */
  const typedSpan = document.getElementById('typed-role');
  if (typedSpan) {
    const roles = ['Full-Stack Developer', 'API Integrator', 'Cloud Enthusiast', 'Database Designer'];
    let roleIdx = 0;
    let charIdx = 0;
    const TYPING_SPEED = 80, PAUSE_TIME = 1500;
    
    function type() {
      if (charIdx < roles[roleIdx].length) {
        typedSpan.textContent += roles[roleIdx].charAt(charIdx);
        charIdx++;
        setTimeout(type, TYPING_SPEED);
      } else {
        setTimeout(erase, PAUSE_TIME);
      }
    }
    
    function erase() {
      if (charIdx > 0) {
        typedSpan.textContent = roles[roleIdx].substring(0, charIdx - 1);
        charIdx--;
        setTimeout(erase, TYPING_SPEED / 1.5);
      } else {
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(type, TYPING_SPEED);
      }
    }
    
    setTimeout(type, 600);
  }

  /* 5. FOOTER YEAR */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* 6. CONTACT FORM */
  const contactForm = document.getElementById('contact-form');
  if(contactForm) {
      const statusEl = document.getElementById('form-status');
      contactForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          statusEl.textContent = 'Sending…';
          try {
              const formData = new FormData(contactForm);
              const response = await fetch(contactForm.action, {
                  method: 'POST',
                  body: formData,
                  headers: {'Accept': 'application/json'}
              });
              if (response.ok) {
                  statusEl.textContent = 'Message sent successfully!';
                  statusEl.style.color = 'limegreen';
                  contactForm.reset();
              } else {
                  statusEl.textContent = 'Oops! There was a problem.';
                  statusEl.style.color = 'red';
              }
          } catch (error) {
              statusEl.textContent = 'Oops! There was a problem.';
              statusEl.style.color = 'red';
          }
      });
  }

  /* ✅ 7. CERTIFICATE MODAL GALLERY (FIXED) */
  const certImages = document.querySelectorAll('.cert-card img');
  const modal = document.getElementById('cert-modal');
  if (modal && certImages.length) {
    const modalImg = document.getElementById('cert-modal-img');
    const btnNext = document.getElementById('cert-next');
    const btnPrev = document.getElementById('cert-prev');
    const btnClose = document.getElementById('cert-close');

    let currentIndex = 0;

    const showImage = (index) => {
      // Loop around using the modulo operator
      currentIndex = (index + certImages.length) % certImages.length;
      modalImg.src = certImages[currentIndex].src;
    };

    certImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        showImage(index);
      });
    });

    btnClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    btnNext.addEventListener('click', () => {
      showImage(currentIndex + 1);
    });

    btnPrev.addEventListener('click', () => {
      showImage(currentIndex - 1);
    });

    // Close modal by clicking background or pressing Escape key
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (modal.style.display === 'flex') {
        if (e.key === 'Escape') {
          modal.style.display = 'none';
        }
        if (e.key === 'ArrowRight') {
          showImage(currentIndex + 1);
        }
        if (e.key === 'ArrowLeft') {
          showImage(currentIndex - 1);
        }
      }
    });
  }
  
});