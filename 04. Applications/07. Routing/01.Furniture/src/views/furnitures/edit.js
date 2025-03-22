import { html, render } from "../../../node_modules/lit-html/lit-html.js"
import page from "../../../node_modules/page/page.mjs"

const main = document.querySelector("main");

export default async function EditFurnitures(ctx){
    try {
        const response = await fetch("http://localhost:3030/data/catalog/" + ctx.params.id).then(response => response.json());
        if (response.code >= 400){
            throw new Error(response.message);
        }
        render(EditFurnitureTemplate(response, ctx), main);
    }
    catch(err){ alert(err); }    
}

function EditFurnitureTemplate(response, ctx){
    return html`
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Edit Furniture</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form @submit=${(e) => EditSubmit(e, ctx)}>
                <div class="row space-top">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="new-make">Make</label>
                            <input class="form-control" id="new-make" type="text" name="make" value="${response.make}">
                        </div>
                        <div class="form-group has-success">
                            <label class="form-control-label" for="new-model">Model</label>
                            <input class="form-control" id="new-model" type="text" name="model" value="${response.model}">
                        </div>
                        <div class="form-group has-danger">
                            <label class="form-control-label" for="new-year">Year</label>
                            <input class="form-control" id="new-year" type="number" name="year" value="${response.year}">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-description">Description</label>
                            <input class="form-control" id="new-description" type="text" name="description" value="${response.description}">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="new-price">Price</label>
                            <input class="form-control" id="new-price" type="number" name="price" value="${response.price}">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-image">Image</label>
                            <input class="form-control" id="new-image" type="text" name="img" value="${response.img}">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="new-material">Material (optional)</label>
                            <input class="form-control" id="new-material" type="text" name="material" value="${response.material}">
                        </div>
                        <input type="submit" class="btn btn-info" value="Edit"/>
                    </div>
                </div>
            </form>
        </div>
    `;

    async function EditSubmit(e, ctx){
        try {
            e.preventDefault();
            const formVals = Object.fromEntries(new FormData(e.currentTarget));
            if (formVals.model.length < 4 || formVals.make.length < 4){
                throw new Error("Make and Model must be at least 4 symbols long");
            }
            if (formVals.year <= 1950 || formVals.year >= 2050){
                throw new Error("Year must be between 1950 and 2050");
            }
            if (formVals.description.length <= 10){
                throw new Error("Description must be more than 10 symbol");
            }
            if (formVals.price < 0){
                throw new Error("Price must be a positive number");
            }
            if (formVals.img === ""){
                throw new Error("Image URL is required");
            }

            const response = await fetch("http://localhost:3030/data/catalog/" + ctx.params.id, {
                method: "PUT"
              , headers: {
                  "Content-Type": "application/json",
                  "X-Authorization": localStorage.getItem("GlobalToken")
              }
              , body: JSON.stringify({
                    make: formVals.make
                  , model: formVals.model
                  , year: formVals.year
                  , description: formVals.description
                  , price: formVals.price
                  , img: formVals.img
                  , material: formVals.material
              })
          }).then(response => response.json());
            if (response.code >= 400){
                throw new Error(response.message);
            }
            page.redirect("/details/" + ctx.params.id);
        }
        catch(err){ alert(err); }
    }
}

