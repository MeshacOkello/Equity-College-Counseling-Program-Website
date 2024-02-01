// JavaScript function to navigate to the selected college section
function navigateToCollege(collegeId) {
    if (collegeId) {
        var section = document.getElementById(collegeId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
