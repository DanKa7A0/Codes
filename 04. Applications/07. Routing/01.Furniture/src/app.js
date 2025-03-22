import page from "../node_modules/page/page.mjs"

import Navigation from "./views/navigation.js";

import Login from "./views/users/login.js";
import Register from "./views/users/register.js";
import Logout from "./views/logout.js";

import Catalog from "./views/furnitures/catalog.js";
import MyPosts from "./views/furnitures/My posts.js";
import CreatePost from "./views/furnitures/create.js";
import DetailsFurnitures from "./views/furnitures/details.js";
import EditFurnitures from "./views/furnitures/edit.js";
import DeleteFurnitures from "./views/furnitures/delete.js";


// dani@gmail.com
page(Navigation);

page("/login", Login);
page("/register", Register);
page("/logout", Logout);

page("/", Catalog);
page("/myPosts", MyPosts);
page("/createPost", CreatePost);
page("/details/:id", DetailsFurnitures)
page("/edit/:id", EditFurnitures)
page("/delete/:id", DeleteFurnitures)

page();