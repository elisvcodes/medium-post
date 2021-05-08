const Post = require('../models/post');

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

const updatePost = async (req, res) => {
    try {
        const keys = Object.keys(req.body);
        const post = await Post.findById({ _id: req.params.id });
        keys.forEach(update => post[update] = req.body[update]);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deletePost = async (req, res) => {
    try {
        await Post.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({ message: 'Post was deleted' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const likePost = async (req, res) => {
    try {
        console.log(res.params);
        const post = await Post.findById({ _id: req.params.id });
        console.log(post);
        post.likes = post.likes + 1;
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
    }

}

module.exports = { createPost, getPosts, updatePost, deletePost, likePost }