document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.toc-link');

    // Smooth scroll
    links.forEach(link => {
        link.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target-id');
            const target = document.getElementById(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Collect headings
    const headings = Array.from(links).map(link => {
        return document.getElementById(link.getAttribute('data-target-id'));
    });

    // Scroll spy
    window.addEventListener('scroll', function () {
        let activeIndex = -1;
        let threshold = window.innerHeight * 0.1;

        headings.forEach((heading, index) => {
            const rect = heading.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= threshold) {
                activeIndex = index;
            }
        });

        if (activeIndex === -1) {
            headings.forEach((heading, index) => {
                const rect = heading.getBoundingClientRect();
                if (rect.top > 0 && rect.top < window.innerHeight) {
                    activeIndex = index;
                    return;
                }
            });
        }

        links.forEach(l => l.classList.remove('active'));
        if (activeIndex !== -1) {
            links[activeIndex].classList.add('active');
        }
    });
});
