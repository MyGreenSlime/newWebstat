import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
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

app.get(
	"/auth/callback",
	passport.authenticate("oauth2", { failureRedirect: "/loginfailure" }),
	(req, res) => {
		res.send(req.query);
	}
);

app.listen(config.SERVER.PORT, () => {
	console.log(`service listen on port ${config.SERVER.PORT}`);
});

export { app };
