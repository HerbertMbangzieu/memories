import Post from "../models/posts.js";
import express from "express";

const router = express.Router()

router.post('/posts', (req,res)=>{
    try {
        
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
    })
    newPost.save()
    res.status(201).json(newPost)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.patch('/posts/:id', async (req,res)=>{
    const {id} = req.params
    try {
    const newPost = await Post.findByIdAndUpdate(id, req.body)
    res.status(201).json(newPost)
    } catch (error) {
        res.status(500).send(error.message)
    }
})



router.get('/posts', async (req,res)=>{
    try {
    const posts = await Post.find({})
    res.status(200).json(posts)  
    } catch (error) {        
    res.status(500).send(error.message)
    }  
})

router.get('/posts/:id', async (req,res)=>{
    const {id} = req.params
    try {
    const post = await Post.findById(id)
    post ? res.status(200).json(post) : res.status(200).send("No post found")
    } catch (error) {        
    res.status(500).send(error.message)
    }  
})

router.delete('/posts/:id', async (req,res)=>{
    const {id} = req.params
    try {
    const post = await Post.findByIdAndDelete(id)
    post ? res.status(200).send("deleted successfully") : res.status(200).send("No post found")
    } catch (error) {        
    res.status(500).send(error.message)
    }  
})

export default router
