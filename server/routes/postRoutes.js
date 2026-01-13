import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { postValidationRules } from "../validators/postValidator.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", postValidationRules, validate, createPost);
router.put("/:id", postValidationRules, validate, updatePost);
router.delete("/:id", deletePost);

export default router;
