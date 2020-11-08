import html from '../html/page-load.html';

const pageLoad = () => {
  document.getElementById('content').insertAdjacentHTML('beforeend',html);
  document.querySelector('li:first-child').classList.add('selected');
}

export {pageLoad}