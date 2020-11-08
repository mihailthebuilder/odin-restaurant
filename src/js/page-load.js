import PizzaSrc from '../img/pizza.jpeg';
import PastaSrc from '../img/pasta.jpg';
import LasagnaSrc from '../img/lasagna.jpg';

const pageLoad = () => {
  
  let container = document.getElementById("content");

  //add header div
  let header = document.createElement("header");
  header.innerHTML = `<nav><h1>Odin Restaurants</h1></nav>`;
  container.appendChild(header);

  //create main container div
  let main = document.createElement("main");

  //create hero section and append it to main element
  let hero = document.createElement("section");
  hero.id = "hero";
  hero.innerHTML = `<h1>The Best Place to Eat Nordic Food</h1><button type="button">See Menu</button>`;
  main.appendChild(hero);

  let menu = document.createElement('section');
  menu.id = 'menu';
  menu.insertAdjacentHTML('beforeend', 
  `<h1>Our Menu</h1>
    <div id="menu-options">
      <div class="text-img">
        <h2>Pizza</h2>
        <p>This pizza is the best pizza on the planet. It's made by Nordic people, which is why it's so amazing</p>
      </div>
      <div id="img-pizza">
      </div>
      <div id="img-pasta">
      </div>
      <div class="text-img">
        <h2>Pasta</h2>
        <p>This pasta is the best pasta on the planet. It's made by Nordic people, which is why it's so amazing</p>
      </div>
      <div class="text-img">
        <h2>Lasagna</h2>
        <p>This lasagna is the best lasagna on the planet. It's made by Nordic people, which is why it's so amazing</p>
      </div>
      <div id="img-lasagna">
      </div>
    </div>`);
    main.appendChild(menu);
    container.appendChild(main);

  //TOP / other participants are just putting images in dist; I'm going to put them into
  const PizzaImg = new Image();
  PizzaImg.src = PizzaSrc;
  document.getElementById("img-pizza").appendChild(PizzaImg);

  const PastaImg = new Image();
  PastaImg.src = PastaSrc;
  document.getElementById('img-pasta').appendChild(PastaImg);

  const LasagnaImg = new Image();
  LasagnaImg.src = LasagnaSrc;
  document.getElementById('img-lasagna').appendChild(LasagnaImg);

}

export {pageLoad}