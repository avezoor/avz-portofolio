// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                skillBar.style.width = `${level}%`;
            }
        });
    });

    document.querySelectorAll('.skill-progress').forEach((skillBar) => {
        observer.observe(skillBar);
    });

    // Search functionality for certifications
    const certSearchInput = document.getElementById('cert-search');
    const certItems = document.querySelectorAll('.cert-card');

    if (certSearchInput) {
        certSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let visibleCount = 0;

            certItems.forEach(item => {
                const title = item.querySelector('h4').textContent.toLowerCase();
                const issuer = item.querySelector('p').textContent.toLowerCase();
                const matches = title.includes(searchTerm) || issuer.includes(searchTerm);

                if (matches && visibleCount < 6) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Search functionality for projects
    const projectSearchInput = document.getElementById('project-search');
    const projectItems = document.querySelectorAll('.project-card');
    const viewMoreBtn = document.getElementById('view-more-projects');
    let showingAll = false;

    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let visibleCount = 0;

            projectItems.forEach(item => {
                const title = item.querySelector('h4').textContent.toLowerCase();
                const desc = item.querySelector('p').textContent.toLowerCase();
                const matches = title.includes(searchTerm) || desc.includes(searchTerm);

                if (matches && (visibleCount < 6 || showingAll)) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            showingAll = !showingAll;
            if (showingAll) {
                projectItems.forEach(item => item.style.display = '');
                this.textContent = 'Show Less';
            } else {
                let visibleCount = 0;
                projectItems.forEach(item => {
                    if (visibleCount < 6) {
                        item.style.display = '';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });
                this.textContent = 'View More';
            }
        });
    }

    // Initial display limitation
    document.querySelectorAll('.cert-container .cert-card').forEach((item, index) => {
        item.style.display = index < 6 ? '' : 'none';
    });

    document.querySelectorAll('.project-container .project-card').forEach((item, index) => {
        item.style.display = index < 6 ? '' : 'none';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Investment chart using Chart.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('investmentChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Investments', 'Savings', 'Needs'],
                datasets: [{
                    data: [35, 15, 50],
                    backgroundColor: ['#39FF14', '#00FF41', '#59eb05']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#E5E5E5'
                        }
                    }
                }
            }
        });
    }
});