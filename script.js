// Scroll to top and focus on the name input field
function scrollToForm() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Wait for scroll to finish, then focus the name input
    setTimeout(() => {
        const nameInput = document.getElementById('nameInput');
        if (nameInput) {
            nameInput.focus();
        }
    }, 600);
}
