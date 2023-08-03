import { body } from "express-validator";

export const hotelCreateValidation = [
  body("hotelName", "Неверный формат названия отеля")
    .isLength({
      min: 5,
      max: 15,
    })
    .isString(),
  body("city", "Неверный формат названия города")
    .isLength({
      min: 3,
      max: 15,
    })
    .isString(),
];
