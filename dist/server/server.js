"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

require("./dbConnector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _express["default"]();
exports.app = app;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.get("/home", function (req, res) {
  res.send("in home");
});
app.listen(_config["default"].SERVER.PORT, function () {
  console.log("service listen on port ".concat(_config["default"].SERVER.PORT));
});