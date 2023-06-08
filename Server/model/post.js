import mongoose from 'mongoose'

const {
    Schema,
    model
} = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    url : {
        type : String,
    },
    comments: [{
        type: Schema.ObjectId,
        ref: 'Comment'
    }],
   
}, {timestamps: true})


const Post = model("Post", postSchema)


export default Post