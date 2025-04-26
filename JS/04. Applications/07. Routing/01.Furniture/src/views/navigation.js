import { html, render } from "../../../node_modules/lit-html/lit-html.js"

const header = document.querySelector("header");

export default function Navigation(ctx, next){
    render(Navigation_Template(ctx), header);
    next();
}

function Navigation_Template(ctx){
    return html`
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/" >Dashboard</a>
            ${localStorage["GlobalToken"]
                ? 
                html`
                    <div id="user">
                        <a id="createLink" href="/createPost">Create Furniture</a>
                        <a id="profileLink" href="/myPosts" >My Publications</a>
                        <a id="logoutBtn" href="/logout">Logout</a>
                    </div>
                    `
                :
                html`
                    <div id="guest">
                        <a id="loginLink" href="/login">Login</a>
                        <a id="registerLink" href="/register">Register</a>
                    </div>
                `
            }
        </nav>
    `;
}