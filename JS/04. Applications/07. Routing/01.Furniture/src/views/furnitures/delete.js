import page from "../../../node_modules/page/page.mjs"

export default async function DeleteFurnitures(ctx){
    try {
        const response = await fetch("http://localhost:3030/data/catalog/" + ctx.params.id, {
              method: "DELETE"
            , headers: {
                "X-Authorization": localStorage.getItem("GlobalToken")
            }
        }).then(response => response.json());

        if (response.code >= 400){
            throw new Error(response.message);
        }

        page.redirect("/");
    }
    catch(err){ alert(err); }
}