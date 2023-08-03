import { faker } from "@faker-js/faker";

import HotelModel from "../models/Hotel.js";

export const getAll = async (req, res) => {
  try {
    const city = req.params.city.toLowerCase();
    const days = req.params.days;

    const hotels = await HotelModel.find({
      city: city,
    });

    const result = hotels.map((hotel) => {
      const price = hotel.priceAvg * days;

      const hotelData = hotel._doc;
      return { ...hotelData, priceAvg: price };
    }).sort((a,b) => b.stars - a.stars);

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить отели",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new HotelModel({
      hotelName: faker.word.adjective({strategy:'any-length'}),
      city: 'белгород',
      priceAvg: faker.number.int({min:3000,max:20000}),
      stars: faker.number.int({min:1,max:5}),
      isFavorite: false,
    });

    const hotel = await doc.save();

    res.json(hotel);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать отель",
    });
  }
};
