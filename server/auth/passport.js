import { app } from "../server";
import passport from "passport";
import { OAuth2Strategy } from "passport-oauth";
import config from "../config";
import { User } from "../../Model/";

passport.use(
	new OAuth2Strategy(
		{
			authorizationURL: config.OAUTH.AUTHORIZATION_ENDPOINT,
			tokenURL: config.OAUTH.TOKEN_ENDPOINT,
			clientID: config.OAUTH.CLIENT_ID,
			clientSecret: config.OAUTH.CLIENT_SECRET,
			callbackURL: config.OAUTH.REDIRECT_URL,
		},
		async function (accessToken, refreshToken, profile, cb) {
			console.log(accessToken, refreshToken, profile, cb);
			cb();
			// try{
			// 	const user = User.findOne({name : profile.});
			// }

			// User.findOrCreate({ exampleId: profile.id }, function (err, user) {
			// 	return cb(err, user);
			// });
		}
	)
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/", passport.authenticate("oauth2"));

app.get(
	"/",
	passport.authenticate("oauth2", { failureRedirect: "/login" }),
	(req, res) => {
		res.send(req.query);
	}
);
