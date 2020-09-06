import { app } from "../server";
import passport from "passport";
import { OAuth2Strategy } from "passport-oauth";
import config from "../config";

passport.use(
	"provider",
	new OAuth2Strategy(
		{
			tokenURL: config.OAUTH.TOKEN_ENDPOINT,
			authorizationURL: config.OAUTH.AUTHORIZATION_ENDPOINT,
			clientID: config.OAUTH.CLIENT_ID,
			clientSecret: config.OAUTH.CLIENT_SECRET,
			callbackURL: "/auth/callback",
		},
		function (accessToken, refreshToken, profile, cb) {
			console.log(accessToken, refreshToken, profile, cb);
			cb();
			// User.findOrCreate(..., function(err, user) {
			//   done(err, user);
			// });
		}
	)
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/", passport.authenticate("provider"));

app.get(
	"/",
	passport.authenticate("provider", { failureRedirect: "/login" }),
	(req, res) => {
		res.send(req.query);
	}
);
