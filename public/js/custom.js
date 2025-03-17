// Hide loader immediately when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

// Ensure all navigation elements are visible
document.addEventListener('DOMContentLoaded', function() {
  // Fix z-index issues
  const header = document.querySelector('header');
  if (header) {
    header.style.zIndex = '10001';
    header.style.position = 'relative';
  }

  const menu = document.querySelector('.open');
  if (menu) {
    menu.style.zIndex = '10002';
  }

  const subMenu = document.querySelector('.sub-menu');
  if (subMenu) {
    subMenu.style.zIndex = '10003';
  }

  const registerButton = document.querySelector('.register_button');
  if (registerButton) {
    registerButton.style.zIndex = '10002';
  }

  // Ensure main content is visible
  const main = document.querySelector('main');
  if (main) {
    main.style.position = 'relative';
    main.style.zIndex = '1';
  }
}); 