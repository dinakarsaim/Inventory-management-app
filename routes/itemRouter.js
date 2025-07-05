const {Router} = require("express"); 
const {viewAllItems} = require("../controller/itemController");

const itemRouter = Router();

itemRouter.get("/:itemId", viewAllItems);

module.exports = itemRouter;