const db = require("./maindb");

async function getallCategories (){
    const {rows} = await db.query("select * from categories");
    return rows;
}

async function getCategory(categoryId) {
    const {rows} = await db.query("select * from categories where id = $1", [categoryId]);
    return rows[0];
}

async function insertCategory(name, description) {
    await db.query("INSERT INTO categories (name, description) VALUES ($1, $2)", [name, description]);
}

async function getItems (categoryId) {
    const {rows} = await db.query ("select * from items where category_id = $1", [categoryId]);
    return rows;
}

async function getItem (itemId) {
    const {rows} = await db.query ("select * from items where id = $1", [itemId]);
    return rows[0];
}

async function getAllItems () {
    const {rows} = await db.query("select * from items");
    return rows;
}

module.exports = {getallCategories, getCategory, insertCategory, getItems, getItem, getAllItems};