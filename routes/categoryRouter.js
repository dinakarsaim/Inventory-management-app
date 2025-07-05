const {Router} = require("express");
const {createCategory, viewAllCategories, viewCategory, renderCform} = require("../controller/categoryController");
const { render } = require("ejs");

const categoryRouter = Router();

categoryRouter.get("/", viewAllCategories);

categoryRouter.get("/create", renderCform);

categoryRouter.post("/create", createCategory);

categoryRouter.get("/:categoryId", viewCategory);

module.exports = categoryRouter;
