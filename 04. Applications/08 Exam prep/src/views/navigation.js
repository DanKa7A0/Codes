import { render, html } from '../../node_modules/lit-html/lit-html.js';


export default function (ctx, next) {
    render(NavigationTemplate(), document.querySelector("header"));
    next();
}

function NavigationTemplate(){
    return html`
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
        </a>
        <nav>
          <div>
            <a href="/dashboard">TV Shows</a>
            <a href="/search">Search</a>
          </div>

          <!-- Logged-in users -->
          <div class="user">
            <a href="/show/create">Add Show</a>
            <a href="/logout">Logout</a>
          </div>

          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </nav>
    `;
}
