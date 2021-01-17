const toggleButton = document.querySelector('.toggle-button');
const toggleCircle = document.querySelector('.toggle-circle');
const html = document.querySelector('html');

toggleButton.addEventListener('click', function () {
    toggleCircle.classList.toggle('toggle-off');
    toggleCircle.classList.toggle('toggle-on');
    html.classList.toggle('light-mode');
    html.classList.toggle('dark-mode');
});
