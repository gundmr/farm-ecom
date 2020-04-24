"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _productRoute = _interopRequireDefault(require("./routes/productRoute"));

var _orderRoute = _interopRequireDefault(require("./routes/orderRoute"));

var mongodbUrl = process.env.MONGODB_URI || _config["default"].MONGODB_URL;

_mongoose["default"].connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})["catch"](function (error) {
  return console.log(error.reason);
});

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use("/api/users", _userRoute["default"]);
app.use("/api/products", _productRoute["default"]);
app.use("/api/orders", _orderRoute["default"]);
app.get("/api/config/paypal", function (req, res) {
  res.send(process.env.PAYPAL_CLIENT_ID || _config["default"].PAYPAL_CLIENT_ID);
}); // try next
//app.use(express.static(__dirname + '/frontend'))
// app.use(express.static(__dirname + "build")); //
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html")); // <- try "index.html"
// });
// const path = require('path');
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }
// app.get('*',(req, res) => {
//   res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server started on PORT ".concat(PORT));
});