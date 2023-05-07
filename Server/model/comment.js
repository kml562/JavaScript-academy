import mongoose from 'mongoose';

const { Schema, model } = mongoose


const commentSchema = new Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
},{timestamps : true});

const Comment = model('Comment', commentSchema);

export default Comment
