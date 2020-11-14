const Config = {
	MONGO: {
		USERNAME: process.env.MONGO_USERNAME || "root",
		PASSWORD: process.env.MONGO_PASSWORD || "webstat",
		HOST: process.env.MONGO_HOST || "localhost",
		PORT: process.env.MONGO_PORT || "27017",
		DATABASE: process.MONGO_DATABASE || "webstat",
	},
	SERVER: {
		PORT: process.env.SERVER_PORT || "3000",
	},
	OAUTH: {
		CLIENT_ID: process.env.CLIENT_ID || "6514d477-5aae-4d11-b3cb-fc2839f017e4",
		CLIENT_SECRET:
			process.env.CLIENT_SECRET ||
			"pdMvOagUegD2aErGxW9EUutMuqCGaBLWYsu8ZMkXWkdy1qkPXX9-jxm2n88D7g99Jn4ZAQwh9Wc_LDPxF88mrg",
		CLIENT_NAME: process.env.CLIENT_NAME || "KU_ENG_IOT",
		REDIRECT_URL:
			process.env.REDIRECT_URL || "https://iot.cpe.ku.ac.th/stat/auth/callback",
		AUTHORIZATION_ENDPOINT:
			process.env.AUTHORIZATION_ENDPOINT ||
			"https://sso.ku.ac.th/nidp/oauth/nam/authz",
		TOKEN_ENDPOINT:
			process.env.TOKEN_ENDPOINT || "https://sso.ku.ac.th/nidp/oauth/nam/token",
		TOKEN_INFO_ENDPOINT:
			process.env.TOKEN_INFO_ENDPOINT ||
			"https://sso.ku.ac.th/nidp/oauth/nam/tokeninfo",
	},
};

export default Config;
