const menuToggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
  });

  // ===== Dark/Light Mode Toggle =====
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check saved mode in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }});