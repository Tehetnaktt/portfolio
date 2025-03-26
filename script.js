const toggle = document.getElementById('navbarToggle');
const menu = document.getElementById('navbarMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function showDescription() {
    const topic = getQueryParam('topic');
    const crudDescription = document.getElementById('crud-description');
    const tourDescription = document.getElementById('tour-description');

    if (topic === 'crud') {
        crudDescription.style.display = 'block';
        tourDescription.style.display = 'none';
    } else if (topic === 'tour') {
        crudDescription.style.display = 'none';
        tourDescription.style.display = 'block';
    } else {
        crudDescription.style.display = 'none';
        tourDescription.style.display = 'none'; // Hide both if no valid topic is found
    }
}

// Load the appropriate description on page load
window.onload = showDescription;
