import express from "express";
import config from "./server/config";
import "./Model/dbConnector";

const app = new express();

app.listen(config.SERVER.PORT, () => {
  console.log(`service listen on port ${config.SERVER.PORT}`);
});
