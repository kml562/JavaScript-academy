import express from "express";
import { getAllPosts, createPost, updatePost,getSinglePost,createComment, deletePost } from "../controllers/post.js";
import { isLoggedIn } from '../middleware/user.js'


const router= express.Router();


router.get('/posts',isLoggedIn, getAllPosts)
router.post('/post',isLoggedIn, createPost)
router.put('/post/:id',isLoggedIn, updatePost)
router.get('/post/:id',isLoggedIn, getSinglePost)
router.put('/addcomment',isLoggedIn, createComment)
router.delete('/post/:id',isLoggedIn, deletePost)


export default router;

