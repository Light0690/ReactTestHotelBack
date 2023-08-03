import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    priceAvg: {
      type: Number,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Hotel", HotelSchema);
