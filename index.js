import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { registerValidation } from "./validations/auth.js";
import { hotelCreateValidation } from "./validations/hotel.js";

import { handleValidatuinErrors, checkAuth } from "./utils/index.js";

import { UserController, HotelController } from "./controllers/index.js";

mongoose
  .connect(
    "mongodb+srv://admin:Wsufycrbqvbh6996@cluster0.vhwlrwe.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(cors());

app.post("/auth/login", registerValidation, UserController.login);
app.post(
  "/auth/register",
  registerValidation,
  handleValidatuinErrors,
  UserController.reqister
);
app.get("/auth/me/:id", checkAuth, UserController.getMe);

app.get(
  "/hotels/:city&:checkInDate&:days&:prices/:stars*?",
  HotelController.getAll
);
app.post("/hotels", hotelCreateValidation, HotelController.create);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server ok");
});
