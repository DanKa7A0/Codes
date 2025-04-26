import { html, render } from "../../../node_modules/lit-html/lit-html.js"
import page from "../../../node_modules/page/page.mjs"

const main = document.querySelector("main");

export default async function DetailsFurnitures(ctx){
    try {
        const response = await fetch("http://localhost:3030/data/catalog/" + ctx.params.id).then(response => response.json());
        if (response.code >= 400){
            throw new Error(response.message);
        }
        render(DetailsFurnituresTemplate(response, ctx), main);
    }
    catch(err){ alert(err); }
}

function DetailsFurnituresTemplate(source, ctx){
    return html`
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Furniture Details</h1>
                </div>
            </div>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="card text-white bg-primary">
                        <div class="card-body">
                            <img src="${source.img}" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p>Make: <span>${source.make}</span></p>
                    <p>Model: <span>${source.model}</span></p>
                    <p>Year: <span>${source.year}</span></p>
                    <p>Description: <span>${source.description}</span></p>
                    <p>Price: <span>${source.price}</span></p>
                    <p>Material: <span>${source.material}</span></p>                    
                    ${source._ownerId === localStorage.getItem("User_ID") 
                        ? 
                        html`
                            <div>
                                <a href="/edit/${source._id}" class="btn btn-info">Edit</a>
                                <a class="btn btn-red" @click="@submit=${(e) => DeleteAskDialog(e, ctx)}">Delete</a>
                            </div>
                        ` 
                        : ""
                    }                    
                </div>
            </div>
        </div>
    `;

    function DeleteAskDialog(e, ctx){
        if (confirm('Are you sure you want to delete this ?')) {
            page.redirect("/delete/" + ctx.params.id);
        }
    }
}