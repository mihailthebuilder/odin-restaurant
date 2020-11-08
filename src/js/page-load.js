import html from '../html/page-load.html';

const pageLoad = () => {
  document.getElementById('content').insertAdjacentHTML('beforeend',html);
}

export {pageLoad}