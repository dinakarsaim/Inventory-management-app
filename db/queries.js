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

async function insertItems (name, description, author, price, quantity, category_id) {
    await db.query("insert into items (name, description, author, price, quantity, category_id) values ($1, $2, $3, $4, $5, $6)", [name, description, author, price, quantity, category_id]);
}

async function searchItems(term) {
    const searchQuery = `
        SELECT * FROM items
        WHERE LOWER(name) LIKE LOWER($1) OR LOWER(author) LIKE LOWER($1)
    `;
    const { rows } = await db.query(searchQuery, [`%${term}%`]);
    return rows[0];
}

module.exports = {getallCategories, getCategory, insertCategory, getItems, getItem, getAllItems, insertItems, searchItems};