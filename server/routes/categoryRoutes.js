import express from "express";
import {
  getCategories,
  createCategory,
} from "../controllers/categoryController.js";
import { categoryValidationRules } from "../validators/categoryValidator.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", categoryValidationRules, validate, createCategory);

export default router;
