import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

const connectionString = process.env.DB_URL || "mongodb://127.0.0.1:27017/countries_api"

mongoose.connect("mongodb://127.0.0.1:27017/countries_api").catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.bold(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;