const popupContainer = document.querySelector('.popup-container');
const openBtn = document.querySelector('#open-btn');


openBtn.addEventListener('click', () => {
  popupContainer.classList.toggle('shown');
  if (popupContainer.classList.contains('shown')) {
    openBtn.classList.add('red');
    openBtn.textContent = 'Close Form';
  } else {
    openBtn.classList.remove('red');
    openBtn.textContent = 'Open Form';
  }
});