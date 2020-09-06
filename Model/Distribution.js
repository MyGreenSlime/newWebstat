import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DistributionSchema = new Schema({
	name: String,
	parameters: [
		{
			name: String,
			meaning: String,
		},
	],
});

export default mongoose.model("Distributions", DistributionSchema);
