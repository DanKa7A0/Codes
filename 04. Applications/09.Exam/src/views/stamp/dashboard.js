import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { get } from '../../api/api.js';

export default async function() {
    try {        
        const response = await get("/data/stamps?sortBy=_createdOn%20desc");
        render(DashboardTemplate(response), document.querySelector('main')); 
    } catch (error) {}
}

function DashboardTemplate(data) {
    return html`
        <!-- Dashboard page -->
        <h2>Collection</h2>
        <section id="collection">
            <!-- Display a div with information about every post (if any)-->
            ${  
                data.length == 0 
                ? html`<h2>>No Stamps Added.</h2>`  
                : data.map(row => StampTemplate(row))
            }            
        </section>     
    `;
}
function StampTemplate(row) {
    return html`
         <div class="stamp">
            <img src="${row.imageUrl}" alt="example1" />
            <div class="stamp-info">
                <h3 class="name">${row.name}</h3>
                <p class="year-description">
                Year of oldest stamps - <span class="year">${row.year}</span> 
                </p>
                <a class="learn-more-btn" href="/details/${row._id}">Learn More</a>
            </div>                
        </div>
    `;
}