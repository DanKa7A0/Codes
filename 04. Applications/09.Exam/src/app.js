import page from '../node_modules/page/page.mjs';

import Navigation from './views/navigation.js';
import Home from './views/home.js';

import Register from './views/user/register.js';
import Login from './views/user/login.js';
import Logout from './views/user/logout.js';

import Dashboard from './views/show/dashboard.js';
import Create from './views/show/create.js';
import Details from './views/show/details.js';
import Edit from './views/show/edit.js';
import Delete from './views/show/delete.js';

page(Navigation);
page("/", Home);

page("/register", Register);
page("/login", Login);
page("/logout", Logout);

page("/dashboard", Dashboard);
page("/show/create", Create);
page("/show/details/:id", Details);
page("/show/edit/:id", Edit);
page("/show/delete/:id", Delete);

page();