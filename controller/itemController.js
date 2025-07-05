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

module.exports = {viewItem, viewAllItems, viewsomeItems};