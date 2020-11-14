"use strict";

var _server = require("../server");

var _passport = _interopRequireDefault(require("passport"));

var _passportOauth = require("passport-oauth");

var _config = _interopRequireDefault(require("../config"));

var _Model = require("../../Model/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_passport["default"].use(new _passportOauth.OAuth2Strategy({
  authorizationURL: _config["default"].OAUTH.AUTHORIZATION_ENDPOINT,
  tokenURL: _config["default"].OAUTH.TOKEN_ENDPOINT,
  clientID: _config["default"].OAUTH.CLIENT_ID,
  clientSecret: _config["default"].OAUTH.CLIENT_SECRET,
  callbackURL: _config["default"].OAUTH.REDIRECT_URL
}, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, cb) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(accessToken, refreshToken, profile, cb);
            cb(); // try{
            // 	const user = User.findOne({name : profile.});
            // }
            // User.findOrCreate({ exampleId: profile.id }, function (err, user) {
            // 	return cb(err, user);
            // });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()));

_server.app.use(_passport["default"].initialize());

_server.app.use(_passport["default"].session());

_server.app.get("/auth/", _passport["default"].authenticate("oauth2"));

_server.app.get("/", _passport["default"].authenticate("oauth2", {
  failureRedirect: "/login"
}), function (req, res) {
  res.send(req.query);
});