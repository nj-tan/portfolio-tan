document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('overlayButton').addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const circleNav = document.getElementById('circleNav'); // Get the circle nav element

        if (overlay) {
            overlay.style.animation = 'slideOut 1s ease-out forwards';
        }

        // Show main content and navigation circle after the overlay slides out
        setTimeout(() => {
            if (overlay) {
                overlay.style.display = 'none'; // Hide overlay
            }
            const mainContent = document.getElementById('mainContent');
            if (mainContent) {
                mainContent.style.display = 'block'; // Show main content
            }
            document.body.style.overflow = 'auto'; // Enable scrolling

            // Make the circle navigation visible
            if (circleNav) {
                circleNav.style.visibility = 'visible';
                circleNav.style.opacity = '1';
            }
        }, 1000); // This should match the duration of the slideOut animation
    });

    // Slide out animation for overlay
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        @keyframes slideOut {
            from { transform: translateY(0); }
            to { transform: translateY(-100vh); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Toggle Menu Options on clicking the menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const menuOptions = document.getElementById('menuOptions');
            this.classList.toggle('active'); // Toggle 'active' class on menuToggle

            if (menuOptions) {
                if (menuOptions.style.visibility === 'hidden' || menuOptions.style.visibility === '') {
                    menuOptions.style.visibility = 'visible';
                    menuOptions.style.opacity = '1';
                } else {
                    menuOptions.style.visibility = 'hidden';
                    menuOptions.style.opacity = '0';
                }
            }
        });
    }
});
