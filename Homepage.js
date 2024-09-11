
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sideMenu = document.getElementById('side-menu');

    hamburgerMenu.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
    });

   
    document.addEventListener('click', function(event) {
        if (!sideMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    });
});
