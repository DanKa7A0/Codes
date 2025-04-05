import { render, html } from '../../../node_modules/lit-html/lit-html.js';

export default function() {
    render(DashboardTemplate(), document.querySelector('main'));
}

function DashboardTemplate(){
    return html`
        <!-- Dashboard page -->
        <h2>Collection</h2>
        <section id="collection">
            <!-- Display a div with information about every post (if any)-->
            <div class="stamp">
            <img src="./images/Austria 1858.webp" alt="example1" />
            <div class="stamp-info">
                <h3 class="name">KK Blue</h3>
                <p class="year-description">
                Year of oldest stamps - <span class="year">1858</span> 
                </p>
                <a class="learn-more-btn" href="#">Learn More</a>
            </div>
            </div>
            <div class="stamp">
            <img src="./images/France 1858.webp" alt="example2" />
            <div class="stamp-info">
                <h3 class="name">Bordeaux 40c</h3>
                <p class="year-description">
                Year of oldest stamps - <span class="year">1870</span> 
                </p>
                <a class="learn-more-btn" href="">Learn More</a>
            </div>
            </div>
            <div class="stamp">
            <img src="./images/Austria 1945.webp" alt="example3" />
            <div class="stamp-info">
                <h3 class="name">Losenstein 5Pf</h3>
                <p class="year-description">
                Year of oldest stamps - <span class="year">1945</span> 
                </p>
                <a class="learn-more-btn" href="#">Learn More</a>
            </div>
            </div>
            <!-- Display an h2 if there are no posts -->
        <h2 id="no-stamp">No Stamps Added.</h2>
        </section>     
    `;
}