import page from '../../../node_modules/page/page.mjs';
import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { post } from '../../api/api.js';
import { setUserData } from '../../utility/local storage.js';


export default function() {
    render(RegisterTemplate(), document.querySelector('main'));
}

function RegisterTemplate(){
    return html`
        <!-- Register Page (Only for Guest users) -->
        <section id="register">
            <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${SubmitRegister}>
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
            </div>
        </section>
    `
}

async function SubmitRegister(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log(data);
        
        if (data.email === "" || data.password === "" || data["re-password"] === "") {
            alert("All fields are required!");
            return 0;
        }

        if (data.password !== data["re-password"]) {
            alert("Passwords do not match!");
            return 0;
        }

        const response = await post("/users/register", data);
        setUserData(response);
        page.redirect("/");
        
    } catch (error) {}
}