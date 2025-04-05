import page from '../../../node_modules/page/page.mjs';
import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { get, put } from '../../api/api.js';

export default async function(ctx) {   
     // const data = getRowData();
     const id = ctx.params.id;
     const response = await get("/data/stamps/" + id);     
     render(EditTemplate(response, id), document.querySelector('main'));
}

function EditTemplate(row, id){
    return html`
          <!-- Edit Page (Only for logged-in users) -->
          <section id="edit">
               <div class="form">
                    <h2>Edit Post Stamp</h2>
                    <form class="edit-form" @submit=${(e) => SubmitEdit(e, id)}>
                         <input type="text" name="name-input" id="name" placeholder="Stamp Name" value="${row.name}"  />
                         <input type="text" name="image-url-input" id="image-url" placeholder="Image URL" value="${row.imageUrl}" />
                         <input type="number" id="year-input" name="year-input" placeholder="Year"  value="${row.year}"/> />
                         <textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10">${row.learnMore}</textarea>
                         <button type="submit" >Edit</button>
                    </form>
               </div>
          </section>
    `;
}

async function SubmitEdit(e, id) {
     try {
             e.preventDefault();
             const data = Object.fromEntries(new FormData(e.currentTarget));
             
             if (data["image-url-input"] === "" || data["more-info-textarea"] === "" || data["name-input"] === "" || data["year-input"] === "") {
                 alert("All fields are required!");
                 return 0;
             }
             
             const sendData = {
                 name: data["name-input"],
                 imageUrl: data["image-url-input"],
                 year: data["year-input"],
                 learnMore: data["more-info-textarea"],
             };
             await put("/data/stamps/" + id, sendData);
             page.redirect("/details/" + id);
             
         } catch (error) {}
}