import html from '../html/contact.html'

const contactLoad = () => {
  document.getElementById('content').insertAdjacentHTML('beforeend',html);
};

export {contactLoad}