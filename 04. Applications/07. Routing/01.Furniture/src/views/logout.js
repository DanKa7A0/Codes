import page from "../../../node_modules/page/page.mjs"

// const main = document.querySelector("main");

export default async function Logout(){
    try {
        await fetch("http://localhost:3030/users/logout", {
            headers: {
                "X-Authorization": localStorage.getItem("GlobalToken")
            }
        });

        localStorage.clear();
        page.redirect("/");
    }
    catch(err){ alert(err); }
}
