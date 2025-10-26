document.addEventListener("DOMContentLoaded", () => {
    const modeButton = document.getElementById("mode-toggle");
    const navButton = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

    // --- Dark Mode ---
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    if (modeButton) {
        modeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", theme);
        });
    }

    // --- Sidebar Collapse/Expand ---
    if (navButton && sidebar) {
        navButton.addEventListener("click", () => {
            if (window.innerWidth > 768) {
                sidebar.classList.toggle("collapsed");
            } else {
                sidebar.classList.toggle("open");
            }
        });
    }

    // --- Mobile Menu Toggle ---
    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    // Close sidebar on mobile after clicking a link
    const navLinks = sidebar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("open");
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
            if (!sidebar.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });

    // Add click effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});