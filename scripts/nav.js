const hamButtons = document.querySelectorAll('.menu');
const navigationElements = document.querySelectorAll('.navigation'); 
const main = document.querySelector('main');
const logo = document.querySelector('.logo');

hamButtons.forEach(hamButton => {
    hamButton.addEventListener('click', () => {
        navigationElements.forEach(navigation => {
            navigation.classList.toggle('open');
        });

        hamButton.classList.toggle('open');

        if (Array.from(navigationElements).some(nav => nav.classList.contains('open'))) {
            main.style.filter = 'blur(50px)';
            if (logo) {
                logo.style.display = 'none';
            }
        } else {
            main.style.filter = 'none';
            if (logo) {
                logo.style.display = 'block';
            }
        }
    });
});
