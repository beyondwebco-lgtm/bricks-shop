/**
 * SSN Constructions — Main JavaScript
 * Lightweight, accessible, and fast Vanilla JS interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '919912349200';

  // --- Sticky Header Shadow & Blur on Scroll ---
  const header = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // --- Mobile Hamburger Navigation ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  const openMenu = () => {
    menuToggle.classList.add('is-active');
    menuToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    mobileOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    mobileOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }

  // Close menu on pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // --- Smooth Anchor Navigation with Sticky Header Offset ---
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          closeMenu();

          const headerOffset = header.offsetHeight + 10;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // --- Active Nav Link Highlighting via IntersectionObserver ---
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((navLink) => {
            if (navLink.getAttribute('href') === `#${id}`) {
              navLink.classList.add('active');
            } else {
              navLink.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // --- Scroll Reveal Animations (.fade-in-up) ---
  const animatedElements = document.querySelectorAll('.fade-in-up');
  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    animatedElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    animatedElements.forEach((el) => el.classList.add('is-visible'));
  }

  // --- Toast Notification Helper ---
  const toast = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastNoticeText');

  const showToast = (message) => {
    if (!toast) return;
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  // --- Contact & Enquiry Form Handling ---
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const product = document.getElementById('formProduct').value;
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !phone) {
        showToast('Please enter your name and phone number.');
        return;
      }

      // Build WhatsApp message
      let text = `*New Material Enquiry — SSN Constructions*\n\n`;
      text += `👤 *Customer Name:* ${name}\n`;
      text += `📞 *Phone Number:* ${phone}\n`;
      text += `🧱 *Product Required:* ${product || 'General Enquiry'}\n`;
      if (message) {
        text += `💬 *Project Details:* ${message}\n`;
      }
      text += `\n_Submitted via SSN Constructions Website_`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

      showToast('Opening WhatsApp with your enquiry details...');
      
      // Delay opening slightly so user sees the notification
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 400);
    });
  }
});
