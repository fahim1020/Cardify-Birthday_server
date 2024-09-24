//External Modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const printl = require("printl");

//.env called
dotenv.config();
const Router = require("./routes/routes");
//Internal modules
const dbConnection = require("./config/dbConnection");
const app = express();
dbConnection();
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/api", Router);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  printl.info(`listening on ${port}`);
});
