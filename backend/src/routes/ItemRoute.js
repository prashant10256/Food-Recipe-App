const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/ItemController");


router.get('/all-items', ItemController.getAllItems)
router.get("/items", ItemController.getSearchItems)

module.exports = router;