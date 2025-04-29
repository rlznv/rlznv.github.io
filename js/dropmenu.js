document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links and dropdown elements
    const navLinks = document.querySelectorAll('.nav-link');
    const navDropdowns = document.querySelectorAll('.nav-drop');
  
    // Add click event listeners to each navigation link
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        // Prevent the click from propagating to the document
        event.stopPropagation();
        
        // Toggle the visibility of the corresponding dropdown
        const dropdown = navDropdowns[index];
        
        // First close all other dropdowns
        navDropdowns.forEach((drop, i) => {
          if (i !== index) {
            drop.classList.remove('active');
          }
        });
        
        // Then toggle the current dropdown
        dropdown.classList.toggle('active');
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      navDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    });
  });
  