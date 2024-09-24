const Card = require("../model/card");

const getCard = async (req, res) => {
  const { username } = req.params;
  // console.log(username); 
  try {
    const card = await Card.findOne({ username });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    console.error("Error finding card:", error);
    res
      .status(500)
      .json({ message: "Error finding card", error: error.message });
  }
};

module.exports = getCard;
