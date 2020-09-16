const shareButton = document.querySelector('#shareButton');

shareButton.addEventListener('click', () => {
  // console.log('click');
  document.querySelector('.bubble-container').classList.toggle('show');
});
