import page from '../../../node_modules/page/page.mjs';
import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { post } from '../../api/api.js';
import { setUserData } from '../../utility/local storage.js';


export default function() {
    render(LoginTemplate(), document.querySelector('main'));
}

function LoginTemplate(){
    return html`
        <!-- Login Page (Only for Guest users) -->
        <section id="login">
            <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${SubmitLogin}>
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
            </div>
        </section>
    `
}

async function SubmitLogin(e){
    try {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        if (data.email === "" || data.password === "") {
            alert("All fields are required!");
            return 0;
        }

        const response = await post("/users/login", data);
        setUserData(response);
        page.redirect("/dashboard");
        
    } catch (error) {
        
    }
}