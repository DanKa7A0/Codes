import { render, html } from '../../../node_modules/lit-html/lit-html.js';

export default function() {
    render(EditTemplate(), document.querySelector('main'));
}

function EditTemplate(){
    html`
       <!-- Edit Page (Only for logged-in users) -->
      <section id="edit">
        <div class="form">
          <h2>Edit Post Stamp</h2>
          <form class="edit-form">
            <input type="text" name="name-input" id="name" placeholder="Stamp Name" />
            <input type="text" name="image-url-input" id="image-url" placeholder="Image URL" />
            <input type="number" id="year-input" name="year-input" placeholder="Year"  />
            <textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
    `;
}