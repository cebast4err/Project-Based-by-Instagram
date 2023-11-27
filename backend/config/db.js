const mongoose = require("mongoose");
const dbEmail = process.env.DB_EMAIL;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbEmail}:${dbPassword}@cluster0.elxrpoe.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conectou ao banco");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
