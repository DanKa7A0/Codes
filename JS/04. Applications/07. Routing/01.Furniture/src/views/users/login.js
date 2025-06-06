import { html, render } from "../../../node_modules/lit-html/lit-html.js"
import page from "../../../node_modules/page/page.mjs"

const main = document.querySelector("main");

export default function Login(){
    render(LoginTemplate(), main);
}

function LoginTemplate(){
    return html`
        <div class="container">
            <div class="row space-top">
                <div class="col-md-12">
                    <h1>Login User</h1>
                    <p>Please fill all fields.</p>
                </div>
            </div>
            <form @submit=${LoginSubmit}>
                <div class="row space-top">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="form-control-label" for="email">Email</label>
                            <input class="form-control" id="email" type="text" name="email">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="password">Password</label>
                            <input class="form-control" id="password" type="password" name="password">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    `;
}

async function LoginSubmit(e){
    e.preventDefault();
    const formVals = Object.fromEntries(new FormData(e.currentTarget));

    try {
        if (formVals.email === "" || formVals.password === ""){
            throw new Error("Fill all inputs");
        }

        const response = await fetch("http://localhost:3030/users/login", {
              method: "POST"
            , headers: {
                "Content-Type": "application/json",
            }
            , body: JSON.stringify({ 
                    email: formVals.email
                , password: formVals.password
            })
        }).then(response => response.json());

        if (response.code >= 400){
            throw new Error(response.message);
        }

        localStorage.setItem("GlobalToken", response.accessToken);
        localStorage.setItem("Email", response.email);
        localStorage.setItem("User_ID", response._id);
        page.redirect("/");
    }
    catch(err){ alert(err); }
}