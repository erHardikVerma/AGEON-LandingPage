// Scroll to top, focus on the name input, and highlight the form area
function scrollToForm() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        // Focus the name input
        const nameInput = document.getElementById('nameInput');
        if (nameInput) nameInput.focus();

        // Trigger the teal glow highlight
        const highlight = document.getElementById('formHighlight');
        if (highlight) {
            highlight.classList.remove('active');
            void highlight.offsetWidth;
            highlight.classList.add('active');
        }
    }, 600);
}

// Scroll to top and highlight the Schedule A Call button
function scrollToSchedule() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        const scheduleBtn = document.querySelector('.hero-schedule-btn');
        if (scheduleBtn) {
            scheduleBtn.classList.remove('highlight');
            void scheduleBtn.offsetWidth;
            scheduleBtn.classList.add('highlight');
        }
    }, 600);
}
