import PizzaSrc from '../img/pizza.jpeg';
import PastaSrc from '../img/pasta.jpg';
import LasagnaSrc from '../img/lasagna.jpg';

const menuLoad = () => {

  document.getElementById('content').insertAdjacentHTML('beforeend',`
    <main>
      <section id="menu">
        <h1>Our Menu</h1>
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
        </div>
      </section>
    </main>
  `);

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