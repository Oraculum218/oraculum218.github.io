const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', function() {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.href;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    if (item.href === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

/*Toast*/
(function() {
  let toastEl = document.querySelector('.toast-message');

  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast-message';
    toastEl.setAttribute('role', 'status');
    toastEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(toastEl);
  }

  let hideTimer = null;

  function showToast(message) {
    if (message === undefined || message === null) return;
    const text = String(message).trim();
    if (text === '') return;

    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }

    toastEl.textContent = text;

    if (!toastEl.classList.contains('show')) {
      toastEl.classList.add('show');
    }

    hideTimer = setTimeout(() => {
      toastEl.classList.remove('show');
      hideTimer = null;
    }, 3500);
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-toast]');
    if (!target) return;

    const toastMessage = target.getAttribute('data-toast');
    showToast(toastMessage);
  });
})();
