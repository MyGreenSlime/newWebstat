"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _ModelInput = require("./ModelInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  username: String,
  fullName: String,
  admin: {
    type: Boolean,
    "default": false
  },
  section: {
    type: String,
    "default": _ModelInput.section.CPE
  }
});

var _default = _mongoose["default"].model("Users", UserSchema);

exports["default"] = _default;