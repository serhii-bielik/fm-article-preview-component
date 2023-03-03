const shareBtn = document.querySelector('.share');
const sharePanel = document.querySelector('.share-panel');

shareBtn.addEventListener('click', function () {
  shareBtn.classList.toggle('share-active');
  sharePanel.classList.toggle('show-share');
});
