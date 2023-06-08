import User from "../model/user.js";
import Post from "../model/post.js";
import BigPromise from "../middleware/bigPromise.js";
import CustomError from "../utils/customError.js";

import * as dotenv from "dotenv";
import { isValidObjectId } from "mongoose";

dotenv.config();

export const getAllPosts = BigPromise(async (req, res, next) => {
  const posts = await Post.find().populate("author");

  res.status(200).json({
    success: true,
    posts,
  });
});

export const createPost = BigPromise(async (req, res, next) => {
  const { title, description, content, author, tags, rating } = req.body;

    if (!title || !description || !content || !author) {
        return next(new CustomError("Please fill up all required fields", 400));
    };
  const post = await Post.create(req.body);

  const populatedEvent = await post.populate("author");

  res.status(200).json({
    success: true,
    populatedEvent,
  });
});

export const getSinglePost = BigPromise(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id).populate("author");

  if (!post) return next(new CustomError("No Event Found", 404));

  res.status(200).json({
    success: true,
    post,
  });
});

export const updatePost = BigPromise(async (req, res, next) => {
  const { id } = req.params;

  const updatedPost = req.body;

  const post = await Post.findByIdAndUpdate(id, updatedPost, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    post,
  });
});

export const deletePost = BigPromise(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  if (!post) return next(new CustomError("Event Not Found", 400));

  const deletedPost = await Post.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
    deletedPost,
  });
});

export const getTopic = BigPromise(async (req, res, next) => {
  const { id } = req.params;

  console.log(id);

  const query = {
    $or: [
      { title: { $regex: id, $options: "i" } },
      { description: { $regex: id, $options: "i" } },
      { tags: { $regex: id, $options: "i" } },
    ],
  };

  const posts = await Post.find(query);

  if (posts.length === 0) return next(new CustomError("Event Not Found", 400));

  res.status(200).json({
    success: true,
    posts,
  });
});

export const createComment = BigPromise(async (req, res, next) => {
  const { postId, author, content } = req.body;

  const post = await Post.findById(postId);

  if (!post) return next(new CustomError("Post not found", 404));

  const comment = await Comment.create({
    author,
    content,
    post: postId,
  });

  post.comments.push(comment);
  await post.save();

  res.status(201).json({
    success: true,
    comment,
  });
});


export const filterPostbyUser = async(req, res) => {
    try {
        const authorId = req.user;
        if (!isValidObjectId(authorId)) {
            return res
              .status(400)
              .json({ status: false, messsage: "please provide valid authorId" });
          }
        const data = await Post.find({author: authorId});
        res.status(200).json({ status: true, data: data });
    
    } catch (error) {
        res.status(500).json({status:false, error:error.message });
    }
} 

export const filterPosts = async(req,res) => {
try {
    const serach = req.body;
    const tags = { $in: serach };
    const data = await Post.find(tags);

} catch (error) {
    res.status(500).json({status:false, error:error.message }); 
}


}