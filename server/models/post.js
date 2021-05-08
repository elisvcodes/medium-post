const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    article: String,
}, { timestamps: true });

const Post = mongoose.model('post', postSchema);

module.exports = Post;