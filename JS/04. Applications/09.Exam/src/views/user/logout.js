import page from '../../../node_modules/page/page.mjs';
import { get } from '../../api/api.js';
import { clearUserData } from '../../utility/local storage.js';

export default async function() {
    try {
        await get("/users/logout");
        clearUserData();
        page.redirect("/");        
    }
    catch (error) {
        alert(error.message);
    }
}