const Card = require("../model/card");

const createCard = async (req, res) => {
  const { username, name, birthDate, wish, imageSrc } = req.body;
  // Extract day, month, year from birthDate
  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns zero-based month
  const year = date.getFullYear();
//   console.log(birthDate, day, month, year);
  try {
    const newCard = await Card.create({
      username,
      name,
      birthDate: { day, month, year },
      wish,
      imageSrc,
    });
    res.status(201).send("Birthday Card Created!");
  } catch (error) {
    res.status(500).send("Birthday Card not Created!");
  }
};

module.exports = createCard;
