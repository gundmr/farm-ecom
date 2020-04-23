"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var prodctSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    "default": 0,
    required: true
  },
  countInStock: {
    type: Number,
    "default": 0,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    "default": 0,
    required: true
  },
  numReviews: {
    type: Number,
    "default": 0,
    required: true
  }
});

var productModel = _mongoose["default"].model("Product", prodctSchema);

var _default = productModel;
exports["default"] = _default;