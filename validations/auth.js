import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пороль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];
