import page from '../../../node_modules/page/page.mjs';
import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { post } from '../../api/api.js';
import { setUserData } from '../../utility/local storage.js';

export default function() {
    render(CreateTemplate(), document.querySelector('main'));
}

function CreateTemplate(){
    return html`
        <!-- Create Page (Only for logged-in users) -->
      <section id="create">
        <div class="form">
          <h2>Add Post Stamp</h2>
          <form class="create-form" @submit=${SumbitCreateStamp}>
            <input type="text" name="name-input" id="name-input" placeholder="Stamp Name" />
            <input type="text" name="image-url-input" id="image-url-input" placeholder="Image URL" />
            <input type="number" id="year-input" name="year-input" placeholder="year" />
            <textarea id="more-info-textarea" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
            <button type="submit">Add Stamp</button>
          </form>
        </div>
      </section>
    `;
}

async function SumbitCreateStamp(e){
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
        await post("/data/stamps", sendData);
        page.redirect("/dashboard");
        
    } catch (error) {}
}