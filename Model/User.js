import mongoose from "mongoose";
import { section } from "./ModelInput";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	fullName: String,
	admin: {
		type: Boolean,
		default: false,
	},
	section: {
		type: String,
		default: section.CPE,
	},
});
export default mongoose.model("Users", UserSchema);
