const {Router} = require("express"); 
const {viewItem, viewAllItems} = require("../controller/itemController");

const itemRouter = Router();

itemRouter.get("/", viewAllItems);
itemRouter.get("/:itemId", viewItem);

module.exports = itemRouter;