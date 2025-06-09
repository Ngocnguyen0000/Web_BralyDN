// Load navigation from index.html
fetch('index.html')
    .then(response => response.text())
    .then(data => {
        // Create a temporary div to parse the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        
        // Get the navigation from index.html
        const navigation = tempDiv.querySelector('nav');
        
        if (navigation) {
            // Only insert navigation if the container is empty
            const container = document.getElementById('navigation-container');
            if (container && !container.querySelector('nav')) {
                container.innerHTML = navigation.outerHTML;
            }
            
            // Add active class to current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === 'index.html')) {
                    link.parentElement.classList.add('active');
                } else {
                    link.parentElement.classList.remove('active');
                }
            });
        }
    })
    .catch(error => console.error('Error loading navigation:', error)); 