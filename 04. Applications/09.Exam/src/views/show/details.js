import { render, html } from '../../../node_modules/lit-html/lit-html.js';

export default function() {
    render(DetailsTemplate(), document.querySelector('main'));
}

function DetailsTemplate(){
    html`
        <!-- Details page -->
        <section id="details">
            <div id="details-wrapper">
            <img id="details-img" src="./images/France 1858.webp" alt="example1" />
            <div>
                <p id="details-name">Bordeaux 40c</p>
                <div id="info-wrapper">
                <div id="details-year-description">
                    <p id="year-description">
                    Year of oldest stamps - <span id="year">1870</span> 
                    </p>
                    <p id="more-info">
                    France 1870 - Yvert & Tellier No. 48 - Bordeaux Issue - 40 centimes Orange
                    This is a 40 centimes orange stamp from the Bordeaux issue, released during the Franco-Prussian War in
                    1870. Printed under emergency conditions, Bordeaux issue stamps are known for their crude yet
                    historically significant production.
                    Mint Condition (new), with original gum.
                    </p>
                </div>
                </div>
                <h3>Stamp total likes:<span id="likes">0</span></h3>

                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                <a href="#" id="edit-btn">Edit</a>
                <a href="#" id="delete-btn">Delete</a>

                <!--Bonus - Only for logged-in users ( not authors )-->
                <a href="#" id="like-btn">Like</a>
                </div>
            </div>
            </div>
        </section>
    `;
}