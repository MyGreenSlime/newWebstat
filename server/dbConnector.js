import mongoose from "mongoose";
import config from "./config";

const options = {
	useNewUrlParser: true,
	auth: {
		user: config.MONGO.USERNAME,
		password: config.MONGO.PASSWORD,
	},
	authSource: "admin",
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

mongoose.connect(
	`mongodb://${config.MONGO.HOST}:${config.MONGO.PORT}/${config.MONGO.DATABASE}`,
	options,
	(error) => {
		if (error) {
			throw error;
		} else {
			console.log(`connected to database : ${config.MONGO.HOST}`);
		}
	}
);
