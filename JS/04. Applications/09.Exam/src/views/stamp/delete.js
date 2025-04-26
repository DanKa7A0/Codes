import { render, html } from '../../../node_modules/lit-html/lit-html.js';
import { del } from '../../api/api.js';

export default async function(ctx) {
    const id = ctx.params.id;
    await del("/data/stamps/" + id);
    ctx.page.redirect("/dashboard");
}