import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';


const mongodbUrl = process.env.MONGODB_URI || config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));


const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || config.PAYPAL_CLIENT_ID);
})

// try next
//app.use(express.static(__dirname + '/frontend'))

app.use(express.static(__dirname + "build")); //
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html")); // <- try "index.html"
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

