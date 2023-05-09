const express = require("express");
const router = express.Router();

const {dalleRoutes} = require("../controllers/getimage");
const {postRoutes, getAllPosts} = require("../controllers/postimage")

router.post("/dalle", dalleRoutes);
router.post("/post", postRoutes);
router.get("/allPosts", getAllPosts);

module.exports = router;