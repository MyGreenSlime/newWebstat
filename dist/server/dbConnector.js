"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

var _options;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = (_options = {
  useNewUrlParser: true,
  auth: {
    user: _config["default"].MONGO.USERNAME,
    password: _config["default"].MONGO.PASSWORD
  },
  authSource: "admin",
  useUnifiedTopology: true,
  useCreateIndex: true
}, _defineProperty(_options, "useCreateIndex", true), _defineProperty(_options, "useFindAndModify", false), _defineProperty(_options, "autoIndex", false), _defineProperty(_options, "poolSize", 10), _defineProperty(_options, "serverSelectionTimeoutMS", 5000), _defineProperty(_options, "socketTimeoutMS", 45000), _defineProperty(_options, "family", 4), _options);

_mongoose["default"].connect("mongodb://".concat(_config["default"].MONGO.HOST, ":").concat(_config["default"].MONGO.PORT, "/").concat(_config["default"].MONGO.DATABASE), options, function (error) {
  if (error) {
    throw error;
  } else {
    console.log("connected to database : ".concat(_config["default"].MONGO.HOST));
  }
});