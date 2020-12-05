import express from "express";
import bodyParser from "body-parser";

import config from "./config";
import "./dbConnector";

const app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/home", (req, res) => {
	res.send("in home");
});
app.get("/loginfailure", (req, res) => {
	res.send("login failure");
});

app.listen(config.SERVER.PORT, () => {
	console.log(`service listen on port ${config.SERVER.PORT}`);
});

export { app };
