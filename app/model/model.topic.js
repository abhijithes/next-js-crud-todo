import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    title: String,
    description: String
},{ timestamps: true });

export default mongoose.models.topic || mongoose.model('topic', topicSchema);