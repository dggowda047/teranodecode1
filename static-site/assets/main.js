/* ============================================
   Teranode1 — Static site JavaScript
   ============================================ */
(function () {
  'use strict';

  /* ---- Navigation ---- */
  var navbar = document.getElementById('navbar');
  var mobileToggle = document.getElementById('mobile-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileIconOpen = document.getElementById('mobile-icon-open');
  var mobileIconClose = document.getElementById('mobile-icon-close');

  // Scroll effect
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      mobileIconOpen.style.display = isOpen ? 'none' : '';
      mobileIconClose.style.display = isOpen ? '' : 'none';
    });
  }

  // Close mobile menu on link click
  var mobileLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu .btn');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      mobileIconOpen.style.display = '';
      mobileIconClose.style.display = 'none';
    });
  });

  /* ---- Reveal animations ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- Contact form ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    var submitBtn = document.getElementById('submit-btn');
    var btnText = document.getElementById('btn-text');
    var btnSpinner = document.getElementById('btn-spinner');
    var errorBox = document.getElementById('form-error');
    var errorMsg = document.getElementById('form-error-msg');
    var formContainer = document.getElementById('form-container');
    var successBox = document.getElementById('form-success');
    var sendAnotherBtn = document.getElementById('send-another');

    function showError(msg) {
      errorMsg.textContent = msg;
      errorBox.style.display = 'flex';
    }

    function hideError() {
      errorBox.style.display = 'none';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      hideError();

      var name = form.elements['name'].value.trim();
      var email = form.elements['email'].value.trim();

      if (!name || !email) {
        showError('Please provide at least your name and email.');
        return;
      }

      // Loading state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      btnSpinner.style.display = 'inline-block';

      var formData = new FormData(form);

      fetch('send-mail.php', {
        method: 'POST',
        body: formData
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          submitBtn.disabled = false;
          btnText.textContent = 'Submit Request';
          btnSpinner.style.display = 'none';

          if (data.success) {
            formContainer.style.display = 'none';
            successBox.style.display = 'flex';
            form.reset();
          } else {
            showError(data.message || 'Something went wrong. Please try again or email us directly.');
          }
        })
        .catch(function () {
          submitBtn.disabled = false;
          btnText.textContent = 'Submit Request';
          btnSpinner.style.display = 'none';
          showError('Network error. Please try again or email us directly at info@teranode1.com');
        });
    });

    if (sendAnotherBtn) {
      sendAnotherBtn.addEventListener('click', function () {
        successBox.style.display = 'none';
        formContainer.style.display = 'block';
      });
    }
  }
})();
