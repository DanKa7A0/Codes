import page from '../node_modules/page/page.mjs';

import Navigation from './views/navigation.js';
import Home from './views/home.js';

import Register from './views/user/register.js';
import Login from './views/user/login.js';
import Logout from './views/user/logout.js';

import Dashboard from './views/stamp/dashboard.js';
import Create from './views/stamp/create.js';
import Details from './views/stamp/details.js';
import Edit from './views/stamp/edit.js';
import Delete from './views/stamp/delete.js';

page(Navigation);
page("/", Home);

page("/register", Register);
page("/login", Login);
page("/logout", Logout);

page("/dashboard", Dashboard);
page("/create", Create);
page("details/:id", Details);
page("/edit/:id", Edit);
page("/delete/:id", Delete);

page();