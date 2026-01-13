import { body } from "express-validator";

export const postValidationRules = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),
  body("content")
    .notEmpty()
    .withMessage("Content is required"),
  body("category")
    .notEmpty()
    .withMessage("Category ID is required"),
];
