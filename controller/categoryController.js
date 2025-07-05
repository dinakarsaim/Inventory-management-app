const query = require("../db/queries")

async function createCategory (req, res) {
    const {categoryName, categoryDes} = req.body;
    await query.insertCategory(categoryName, categoryDes);
    res.redirect("/categories");
}

async function viewAllCategories (req, res) {
    const categories = await query.getallCategories();
    console.log("All Categories ", categories);
    res.render("allCategories", {categories});
}

async function viewCategory (req, res) {
    const categoryId = parseInt(req.params.categoryId, 10);
    const items = await query.getItems(categoryId);
    const category = await query.getCategory(categoryId);
    console.log("Category object:", category);
    console.log("Item object:", items);
    res.render("specificCategory", {category, items});
}

function renderCform(req, res) {
    res.render("createCategory");
}

module.exports = {createCategory, viewAllCategories, viewCategory, renderCform};