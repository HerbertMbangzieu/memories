import mongoose from "mongoose";

const postModel = mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: true,
    },
    postedOn: {
        type: Date,
        required: true,
        default: new Date()
    }
})
const Post = mongoose.model("Post", postModel)
export default Post