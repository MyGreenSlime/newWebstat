const Config = {
  MONGO: {
    USERNAME: process.env.MONGO_USERNAME || "root",
    PASSWORD: process.env.MONGO_PASSWORD || "webstat",
    HOST: process.env.MONGO_HOST || "localhost:27017",
    DATABASE: process.MONGO_DATABASE || "webstat",
  },
  SERVER: {
    PORT: process.env.SERVER_PORT || "3000",
  },
};

export default Config;
