import mongoose from "mongoose";
import config from "../server/config";

const options = {
  useNewUrlParser: true,
  user: config.MONGO.USERNAME,
  pass: config.MONGO.PASSWORD,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect(`mongodb://${config.MONGO.HOST}`, options, (error) => {
  if (error) {
    throw error;
  }
});
