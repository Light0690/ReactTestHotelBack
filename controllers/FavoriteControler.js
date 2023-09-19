// import { faker } from "@faker-js/faker";

import HotelModel from "../models/Hotel.js";

export const getAll = async (req, res) => {
  try {

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить отели",
    });
  }
};

const changeFavorite = (req, res) => {
  try {
    const id = req.params.id;




  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось добавить отель",
    });
  }
};
