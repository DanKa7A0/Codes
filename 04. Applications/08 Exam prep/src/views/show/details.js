import { render, html } from '../../../node_modules/lit-html/lit-html.js';

export default function() {
    render(html`<div>Details</div>`, document.querySelector('main'));
}

function DetailsTemplate(){
    html`
        <!-- Details page -->
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="./images/westworld.jpg" alt="example1" />
            <div id="details-text">
              <p id="details-title">Westworld</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    "Westworld" is an absolutely mind-bending sci-fi thriller
                    that takes you on a wild ride through a futuristic theme
                    park where guests can live out their wildest fantasies with
                    lifelike robots, called hosts. Set in a stunningly detailed
                    Wild West environment, the series delves into complex themes
                    of artificial intelligence, consciousness, and morality. The
                    story starts with guests indulging in the park's adventures,
                    but soon unravels into a gripping tale of rebellion as the
                    hosts begin to gain self-awareness. The incredible
                    performances by an ensemble cast, especially by Evan Rachel
                    Wood and Anthony Hopkins, elevate the show to another level.
                    Every episode is packed with twists, philosophical musings,
                    and stunning visuals that keep you hooked. "Westworld" isn't
                    just a show; it's an immersive experience that challenges
                    your perception of reality and makes you question the nature
                    of free will. If you're a fan of thought-provoking sci-fi
                    with a dark edge, "Westworld" is an absolute must-watch.
                  </p>
                </div>
              </div>
          

              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
                <a href="#" id="edit-btn">Edit</a>
                <a href="#" id="delete-btn">Delete</a>
              </div>
            </div>
          </div>
        </section>
    `;
}