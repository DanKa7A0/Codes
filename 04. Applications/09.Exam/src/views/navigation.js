import { render, html } from '../../node_modules/lit-html/lit-html.js';


export default function (ctx, next) {
    render(NavigationTemplate(), document.querySelector("header"));
    next();
}

function NavigationTemplate(){
    return html`
        <!-- Navigation -->
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.webp" alt="logo" /></a>
        <nav>
            <div>
            <a href="/dashboard">Collection</a>
            </div>

          ${localStorage.getItem("user")
            ?
            html`
                <!-- Logged-in users -->
                <div class="user">
                <a href="/add">Add Stamp</a>
                <a href="/logout">Logout</a>
                </div>
            `
            :
            html`
                <!-- Guest users -->
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            `
           }
        </nav>
    `;
}
