import { render, html } from '../../node_modules/lit-html/lit-html.js';

export default function () {
    render(HomeTemplate(), document.querySelector('main'));    
}

function HomeTemplate(){
    return html`
        <!-- Home page -->
        <section id="home">
        <h1>
          Explore a world of rare and historic vintage stamps, where collectors connect to exchange knowledge and unique
          finds. Preserve the art of philately while discovering hidden gems from different eras and regions.
        </h1>
        <img id="home-img" src="./images/logo.webp" alt="home-img" />
      </section>
    `;
}