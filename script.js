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
