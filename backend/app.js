require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

require("./config/db");

const router = require("./routes/Router");
app.use(router);

app.listen(port, () => {
  console.log(`Porta rodando em ${port}!`);
});
