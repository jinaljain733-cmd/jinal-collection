/**
 * Jinal Collection – script.js
 * Features: Sticky navbar, hamburger menu, tabs, scroll animations,
 *           counter animation, form validation & WhatsApp integration
 */

/* ── DOM Ready ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initTabs();
  initScrollReveal();
  initCounters();
  initContactForm();
  initFooterYear();
  initSmoothScroll();
});

/* ── 1. Sticky Navbar ───────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── 2. Hamburger / Mobile Menu ─────────────── */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ── 3. Product Tabs ────────────────────────── */
function initTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Update buttons
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panels
      tabPanels.forEach(panel => {
        if (panel.id === `tab-${target}`) {
          panel.classList.remove('hidden');
          panel.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 50);
          });
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

/* ── 4. Scroll Reveal Animations ─────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* ── 5. Counter Animation ───────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target    = parseFloat(el.dataset.target);
    const isDecimal = !Number.isInteger(target);
    const duration  = 2000;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const value    = target * eased;

      el.textContent = isDecimal
        ? value.toFixed(1)
        : Math.floor(value).toLocaleString('en-IN');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = isDecimal
          ? target.toFixed(1)
          : target.toLocaleString('en-IN');
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

/* ── 6. Contact Form Validation & WhatsApp ───── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Real-time validation on blur
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur',  () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameEl     = document.getElementById('name');
    const phoneEl    = document.getElementById('phone');
    const messageEl  = document.getElementById('message');
    const interestEl = document.getElementById('interest');

    const nameOk    = validateField(nameEl);
    const phoneOk   = validateField(phoneEl);
    const messageOk = validateField(messageEl);

    if (nameOk && phoneOk && messageOk) {
      sendViaWhatsApp(
        nameEl.value.trim(),
        phoneEl.value.trim(),
        interestEl.value,
        messageEl.value.trim()
      );
      resetForm(form);
    }
  });
}

function validateField(field) {
  const id    = field.id;
  const value = field.value.trim();
  let errorMsg = '';

  if (id === 'name') {
    if (!value)              errorMsg = 'Please enter your name.';
    else if (value.length < 2) errorMsg = 'Name must be at least 2 characters.';
    else if (!/^[a-zA-Z\s.''\-]+$/.test(value)) errorMsg = 'Please enter a valid name.';
  }

  if (id === 'phone') {
    if (!value) errorMsg = 'Please enter your phone number.';
    else if (!/^[6-9]\d{9}$/.test(value.replace(/\s|-/g, '')))
      errorMsg = 'Enter a valid 10-digit Indian mobile number.';
  }

  if (id === 'message') {
    if (!value)               errorMsg = 'Please enter your message.';
    else if (value.length < 10) errorMsg = 'Message must be at least 10 characters.';
  }

  const errorEl = document.getElementById(id + 'Error');
  if (errorMsg) {
    field.classList.add('error');
    if (errorEl) errorEl.textContent = errorMsg;
    return false;
  } else {
    field.classList.remove('error');
    if (errorEl) errorEl.textContent = '';
    return true;
  }
}

function sendViaWhatsApp(name, phone, interest, message) {
  const interestLine = interest ? `\nFabric Category: ${interest}` : '';
  const text = `Hi, I am ${name} (${phone}).${interestLine}\n\n${message}\n\n— Sent from Jinal Collection Website`;
  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/918369476952?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function resetForm(form) {
  form.reset();
  form.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

  const btn = document.getElementById('submitBtn');
  if (btn) {
    const originalHTML = btn.innerHTML;
    btn.innerHTML  = '✓ Opening WhatsApp...';
    btn.disabled   = true;
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.disabled  = false;
    }, 3000);
  }
}

/* ── 7. Footer Year ─────────────────────────── */
function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ── 8. Smooth Scroll ───────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 70;
      const top = targetEl.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}