// Apply navigation styles and color overrides
document.addEventListener('DOMContentLoaded', function() {
  // Inject color override CSS if not already present
  if (!document.querySelector('link[href="/css/color-override.css"]')) {
    const colorOverrideLink = document.createElement('link');
    colorOverrideLink.rel = 'stylesheet';
    colorOverrideLink.href = '/css/color-override.css';
    document.head.appendChild(colorOverrideLink);
  }
  
  // Update theme color meta tag if present
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', '#EF334C');
  } else {
    const newThemeColorMeta = document.createElement('meta');
    newThemeColorMeta.name = 'theme-color';
    newThemeColorMeta.content = '#EF334C';
    document.head.appendChild(newThemeColorMeta);
  }
  
  // Hide register button
  const registerButton = document.querySelector('.register_button');
  if (registerButton) {
    registerButton.style.display = 'none';
  }
  
  // Fix navigation menu
  const subMenu = document.querySelector('.sub-menu');
  if (subMenu) {
    subMenu.style.borderRadius = '0';
    subMenu.style.backgroundColor = 'rgba(31, 31, 31, 0.9)';
    subMenu.style.paddingLeft = '40px';
    subMenu.style.transform = 'scale(0)';
    subMenu.style.transformOrigin = 'top left';
    subMenu.style.transition = 'transform 0.3s ease';
    
    // Clear existing menu items and add only the ones we want
    if (subMenu.children.length > 0) {
      // Keep track of existing items to avoid duplicates
      const existingItems = [];
      
      // Remove all items except the ones we want to keep
      Array.from(subMenu.children).forEach(item => {
        const link = item.querySelector('a');
        if (link) {
          const href = link.getAttribute('href');
          const text = link.textContent.trim().toLowerCase();
          
          // Keep only Home, Achievements, Team, Alumni, and Register
          if (href === '/' || 
              text === 'home' || 
              text === 'achievements' || 
              href === '/achievements' || 
              text === 'team' || 
              href === '/team' || 
              text === 'alumni' || 
              href === '/alumni' || 
              text === 'register' || 
              href === '/registration') {
            existingItems.push(text);
          } else {
            subMenu.removeChild(item);
          }
        }
      });
      
      // Create missing items
      const requiredItems = [
        { text: 'Home', href: '/' },
        { text: 'Achievements', href: '/achievements' },
        { text: 'Team', href: '/team' },
        { text: 'Alumni', href: '/alumni' },
        { text: 'Register', href: '/registration' }
      ];
      
      requiredItems.forEach((item, index) => {
        if (!existingItems.includes(item.text.toLowerCase())) {
          const li = document.createElement('li');
          li.style.paddingLeft = '40px';
          li.style.marginLeft = '100px';
          li.style.width = '250px';
          li.style.textAlign = 'left';
          li.style.marginBottom = '15px';
          
          if (index === 0) {
            li.style.marginTop = '150px';
          }
          
          const link = document.createElement('a');
          link.href = item.href;
          link.textContent = item.text;
          link.style.display = 'block';
          link.style.width = '100%';
          link.style.textAlign = 'left';
          link.style.padding = '8px 0';
          
          // Style the register link
          if (item.text === 'Register') {
            link.style.color = '#EF334C';
            link.style.fontWeight = 'bold';
          }
          
          li.appendChild(link);
          subMenu.appendChild(li);
        }
      });
    }
  }

  // Fix navigation items
  const subMenuItems = document.querySelectorAll('.sub-menu li');
  if (subMenuItems.length > 0) {
    subMenuItems.forEach((item, index) => {
      item.style.paddingLeft = '40px';
      item.style.marginLeft = '100px';
      item.style.width = '250px';
      item.style.textAlign = 'left';
      item.style.marginBottom = '15px'; // Increased spacing
      
      // Adjust first item position
      if (index === 0) {
        item.style.marginTop = '150px';
      }
      
      // Style the link inside the list item
      const link = item.querySelector('a');
      if (link) {
        link.style.display = 'block';
        link.style.width = '100%';
        link.style.textAlign = 'left';
        link.style.padding = '8px 0';
        link.style.transition = 'all 0.3s ease';
        
        // Style the register link (last item)
        if (index === subMenuItems.length - 1 || link.textContent.trim().toLowerCase() === 'register') {
          link.style.color = '#EF334C';
          link.style.fontWeight = 'bold';
        }
      }
    });
  }

  // Fix the opened menu shape
  const menuToggle = document.querySelector('.open');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      setTimeout(() => {
        const expandedMenu = document.querySelector('.open span:nth-child(2)');
        if (expandedMenu) {
          expandedMenu.style.borderRadius = '0';
          expandedMenu.style.backgroundColor = 'rgba(239, 51, 76, 0.9)';
          expandedMenu.style.height = '600px'; // Increased height
          expandedMenu.style.width = '400px';
          expandedMenu.style.transition = 'all 0.3s ease';
        }
        
        const openedSubMenu = document.querySelector('.oppenned .sub-menu');
        if (openedSubMenu) {
          openedSubMenu.style.height = '600px'; // Increased height
          openedSubMenu.style.width = '400px';
          openedSubMenu.style.transform = 'scale(1)';
        }
      }, 100);
    });
  }
  
  // Replace any remaining blue colors with red
  replaceBlueWithRed();
});

// Function to replace any remaining blue colors with red
function replaceBlueWithRed() {
  // Replace inline styles with blue colors
  const allElements = document.querySelectorAll('*');
  
  allElements.forEach(element => {
    const style = element.getAttribute('style');
    if (style && (
        style.includes('#1672cc') || 
        style.includes('rgb(22, 114, 204)') || 
        style.includes('#0d5ca9') ||
        style.includes('rgb(13, 92, 169)')
      )) {
      const newStyle = style
        .replace(/#1672cc/g, '#EF334C')
        .replace(/rgb\(22,\s*114,\s*204\)/g, 'rgb(239, 51, 76)')
        .replace(/#0d5ca9/g, '#d42a3f')
        .replace(/rgb\(13,\s*92,\s*169\)/g, 'rgb(212, 42, 63)');
      
      element.setAttribute('style', newStyle);
    }
    
    // Replace class names containing 'blue'
    if (element.className && typeof element.className === 'string' && element.className.includes('blue')) {
      element.classList.add('red-override');
    }
  });
  
  // Add a style tag to override any remaining blue colors
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .red-override {
      color: #EF334C !important;
    }
    .blue, .blue-text, .text-blue, .blue-color {
      color: #EF334C !important;
    }
    .blue-bg, .bg-blue, .blue-background {
      background-color: #EF334C !important;
    }
    .blue-border {
      border-color: #EF334C !important;
    }
    
    /* Override for SVG elements */
    svg path[fill="#1672cc"],
    svg rect[fill="#1672cc"],
    svg circle[fill="#1672cc"] {
      fill: #EF334C !important;
    }
    
    svg path[stroke="#1672cc"],
    svg rect[stroke="#1672cc"],
    svg circle[stroke="#1672cc"] {
      stroke: #EF334C !important;
    }
    
    /* Override for buttons */
    .btn-primary, .btn-info {
      background-color: #EF334C !important;
      border-color: #EF334C !important;
    }
    
    .btn-primary:hover, .btn-info:hover {
      background-color: #d42a3f !important;
      border-color: #c8293c !important;
    }
    
    /* Override for links */
    a {
      color: #EF334C !important;
    }
    
    a:hover {
      color: #d42a3f !important;
    }
    
    /* Override for headers */
    h1 span, h2 span, h3 span, h4 span, h5 span, h6 span {
      color: #EF334C !important;
    }
  `;
  
  document.head.appendChild(styleTag);
} 