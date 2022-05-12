const express = require("express");
const postController = require("../controllers/post.controller")
const router = express.Router();

router.get("/",postController.getAllPost);
router.get("/getbyid/:id",postController.getPostByID);
router.post("/createPost",postController.createPost);
router.put("/updatePost/:id",postController.updatePost);
router.delete("/deletePost/:id",postController.deletePost);


module.exports = router;