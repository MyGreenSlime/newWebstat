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
		async function (accessToken, refreshToken, profile, done) {
			console.log(accessToken, refreshToken, profile, done);
			done();
		}
	)
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/", passport.authenticate("oauth2"));
