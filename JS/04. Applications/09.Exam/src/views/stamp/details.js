import page from '../../../node_modules/page/page.mjs';
import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { get } from '../../api/api.js';
import { getUserData } from '../../utility/local storage.js';

export default async function(ctx) {
    try {
        const response = await get("/data/stamps/" + ctx.params.id);
        render(DetailsTemplate(response), document.querySelector('main'));
    }
    catch (error) {}
}

function DetailsTemplate(row){
    return html`
        <!-- Details page -->
        <section id="details">
            <div id="details-wrapper">
            <img id="details-img" src="${row.imageUrl}" alt="example1" />
            <div>
                <p id="details-name">${row.name}</p>
                <div id="info-wrapper">
                    <div id="details-year-description">
                        <p id="year-description">
                        Year of oldest stamps - <span id="year">${row.year}</span> 
                        </p>
                        <p id="more-info">${row.learnMore}</p>
                    </div>
                </div>
                <h3>Stamp total likes:<span id="likes">0</span></h3>

                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                    ${
                        row._ownerId === getUserData()?._id
                            ?                                
                                html`
                                    <a href="/edit/${row._id}" id="edit-btn">Edit</a>
                                    <a id="delete-btn" @click=${(e) => DeleteAskDialog(e, row._id)}>Delete</a>
                                ` 
                            :
                                html`
                                    <a href="/like" id="like-btn">Like</a>
                                `
                    }                
                </div>
            </div>
            </div>
        </section>
    `;
}

function DeleteAskDialog(e, id){
    if (confirm('Are you sure you want to delete this ?')) {
        page.redirect("/delete/" + id);
    }
}