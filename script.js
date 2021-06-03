// get necessary elements
const popupContainer = document.querySelector('.popup-container');
const openBtn = document.querySelector('#open-btn');

// add click listener to open/close button
openBtn.addEventListener('click', () => {
  // unhide the form
  popupContainer.classList.toggle('shown');
  // change button style and content depending on the state of the form
  if (popupContainer.classList.contains('shown')) {
    openBtn.classList.add('red');
    openBtn.textContent = 'Close Form';
  } else {
    openBtn.classList.remove('red');
    openBtn.textContent = 'Open Form';
  }
});