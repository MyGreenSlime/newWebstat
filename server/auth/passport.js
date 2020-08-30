import { app } from '../server';
import passport from 'passport';
import { OAuth2Strategy } from 'passport-oauth';
import config from '../config';

passport.use(
  'provider',
  new OAuth2Strategy(
    {
      tokenURL: config.OAUTH.TOKEN_ENDPOINT,
      authorizationURL: config.OAUTH.AUTHORIZATION_ENDPOINT,
      clientID: config.OAUTH.CLIENT_ID,
      clientSecret: config.OAUTH.CLIENT_SECRET,
      callbackURL: '/auth/callback',
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

app.get('/auth/', passport.authenticate('provider'));

app.get(
  '/auth/callback',
  passport.authenticate('provider', { failureRedirect: '/login' }),
  (req, res) => {
    const { access_token } = req.query;
    console.log(access_token);
    res.send(access_token);
  }
);
