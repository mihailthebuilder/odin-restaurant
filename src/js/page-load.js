
const pageLoad = () => {
  
  document.getElementById('content').insertAdjacentHTML('beforeend',`
    <header>
      <nav><h1>Odin Restaurants</h1></nav>
    </header>

    <section id="hero">
      <h1>The Best Place to Eat Nordic Food</h1><button type="button">Find out more...</button>
    </section>
  
    <section id="intro">
      <h2>Why we're amazing</h2>
      <div id="features">
        <div id="chefs">
        </div>
      </div>
    </section>
  `);
}

export {pageLoad}