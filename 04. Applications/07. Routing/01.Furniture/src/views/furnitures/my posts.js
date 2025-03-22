import { html, render } from "../../../node_modules/lit-html/lit-html.js"

const main = document.querySelector("main");

export default async function MyPosts(){    
    try {
            const response = await fetch(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${localStorage.getItem("User_ID")}%22`).then(response => response.json());
            if (response.code >= 400){
                throw new Error(response.message);
            }
            render(MyFurnituresTemplate(response), main);
        }
        catch(err){ alert(err); }
}




function MyFurnituresTemplate(source){
    return html`
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Welcome to Furniture System</h1>
                    <p>Select furniture from the catalog to view details.</p>
                </div>
            </div>
            <div class="row space-top">
                ${source.map((row) => Furniture(row))}
            </div>
        </div>
    `;

    function Furniture(row){
        return html`
            <div item_ID="${row._id}" class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${row.img}/>
                        <p>${row.description}</p>
                        <footer>
                            <p>Price: <span>${row.price}</span></p>
                        </footer>
                        <div>
                            <a href="details/${row._id}" class="btn btn-info">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}