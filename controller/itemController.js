const query = require("../db/queries")

async function viewItem (req, res) {
    const itemId = req.params.itemId;
    const item = await query.getItem(itemId);
    console.log(item);
    res.render("specificItem", {item});
}

async function viewsomeItems (req, res) {
    const categories = await query.getallCategories();
    const items = await query.getAllItems();
    res.render("index", {categories, items});
}

async function viewAllItems (req, res) {
    const items = await query.getAllItems();
    res.render("allItems", {items});
}

function renderitemForm (req, res) {
    res.render("createItem");
}

async function insertItem (req, res) {
    const {name, des, authorName, price, quantity, catId} = req.body;
    await query.insertItems(name, des, authorName, price, quantity, catId);
    res.redirect("/items");
}

async function searchItem (req, res) {
    const searchTerm = req.query.q;
    const results = await query.searchItems(searchTerm);
    res.redirect(`/items/${results.id}`);
}

module.exports = {viewItem, viewAllItems, viewsomeItems, renderitemForm, insertItem, searchItem};