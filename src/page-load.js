import PizzaSrc from './img/pizza.jpeg';
import PastaSrc from './img/pasta.jpg';
import LasagnaSrc from './img/lasagna.jpg';

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
  menu.innerHTML = `<h1>Our Menu</h1>
    <div id="menu-options">
      <div>
        <h2>Pizza</h2>
        <p>This pizza is the best pizza on the planet. It's made by Nordic people, which is why it's so amazing</p>
      </div>
      <div id="img-pizza">
      </div>
      <div id="img-pasta">
      </div>
      <div>
        <h2>Pasta</h2>
        <p>This pasta is the best pasta on the planet. It's made by Nordic people, which is why it's so amazing</p>
      </div>
      <div>
        <h2>Lasagna</h2>
        <p>This lasagna is the best lasagna on the planet. It's made by Nordic people, which is why it's so amazing</p>
      </div>
      <div id="img-lasagna">
      </div>
    </div>`

  //TOP / other participants are just putting images in dist; I'm going to put them into
  const PizzaImg = new Image();
  PizzaImg.src = PizzaSrc;
  menu.querySelector("img-pizza").appendChild(PizzaImg);

  const PastaImg = new Image();
  PastaImg.src = PastaSrc;
  menu.querySelector('img-pasta').appendChild(PastaImg);

  const LasagnaImg = new Image();
  LasagnaImg.src = LasagnaSrc;
  menu.querySelector('img-lasaga').appendChild(LasagnaImg);

  main.appendChild(menu);
  container.appendChild(main);
}

export {pageLoad}