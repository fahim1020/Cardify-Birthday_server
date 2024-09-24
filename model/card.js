const mongoose = require("mongoose");
//Card Schema
const cardSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
   birthDate: {
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  wish: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
//Card MOdel
const Card = mongoose.model("Card", cardSchema);
//Card model export
module.exports = Card;
