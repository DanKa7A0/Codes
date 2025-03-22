import { render, html } from '../../../node_modules/lit-html/lit-html.js';

export default function() {
    render(html`<div>Dashboard</div>`, document.querySelector('main'));
}

function DashboardTemplate(){
    return html`
        <!-- Dashboard page -->
        <h2>Users Recommendations</h2>
        <section id="shows">
          <!-- Display a div with information about every post (if any)-->
          <div class="show">
            <img src="./images/vikings.jpg" alt="example1" />
            <div class="show-info">
              <h3 class="title">Vikings</h3>
              <p class="genre">Genre: Historical Drama</p>
              <p class="country-of-origin">Country of Origin: Canada</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
          <div class="show">
            <img src="./images/westworld.jpg" alt="example1" />
            <div class="show-info">
              <h3 class="title">Westworld</h3>
              <p class="genre">Genre: Science Fiction</p>
              <p class="country-of-origin">Country of Origin: United States</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
          <div class="show">
            <img src="./images/friends.jpg" alt="example1" />
            <div class="show-info">
              <h3 class="title">Friends</h3>
              <p class="genre">Genre: Comedy</p>
              <p class="country-of-origin">Country of Origin: United States</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
        </section>
        <!-- Display an h2 if there are no posts -->
        <h2 id="no-show">No shows Added.</h2>
    `;
}