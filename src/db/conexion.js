import mongoose from "mongoose";
import "dotenv/config";

const BDATOS = process.env.BDATOS;

(async () => {
  try {
    const db = await mongoose.connect(BDATOS);
    console.log(`Base de datos conectada en ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
})();
