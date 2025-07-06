const {Router} = require("express"); 
const {viewItem, viewAllItems, renderitemForm, insertItem, searchItem} = require("../controller/itemController");

const itemRouter = Router();

itemRouter.get("/", viewAllItems);
itemRouter.get("/new", renderitemForm);
itemRouter.post("/new", insertItem);
itemRouter.get("/search", searchItem);
itemRouter.get("/:itemId", viewItem);

module.exports = itemRouter;