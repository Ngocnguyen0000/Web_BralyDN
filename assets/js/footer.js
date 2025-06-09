document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    
    // Fetch the footer content from footer.html
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
            
            // Initialize back to top button functionality
            const backToTopButton = document.getElementById('backToTop');
            if (backToTopButton) {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 300) {
                        backToTopButton.style.display = 'block';
                    } else {
                        backToTopButton.style.display = 'none';
                    }
                });

                backToTopButton.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            footerContainer.innerHTML = '<p class="text-center text-muted">Error loading footer content</p>';
        });
}); 