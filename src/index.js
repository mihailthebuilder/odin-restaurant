import './css/style.css'
import {pageLoad} from './js/page-load.js'
import {menuLoad} from './js/menu.js'
import {contactLoad} from './js/contact.js'

pageLoad();

[...document.getElementsByClassName('link')].forEach(element => {
  element.addEventListener('click', event=>{
    document.getElementById('content').innerHTML = '';

    [...document.getElementsByClassName('link')].forEach(element => {element.className = 'link'});
    
    element.classList.add('selected');

    switch(element.getAttribute('linkTo')) {
      case 'about':
        pageLoad();
        break;
      case 'menu':
        menuLoad();
        break;
      default:
        contactLoad();
    }
  })
});