import db from "./db/connection.js";
import Routes from "./Routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();
const Port = 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", Routes);

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
});

app.listen(Port, () => {
  console.log(chalk.magenta(`Express server running on port ${Port}`));
});
