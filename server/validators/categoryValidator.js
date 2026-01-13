import { body } from "express-validator";

export const categoryValidationRules = [
  body("name")
    .notEmpty()
    .withMessage("Category name is required"),
];
