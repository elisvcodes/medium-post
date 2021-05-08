import axios from 'axios';

const url = 'http://localhost:8000/posts';

export const createPost = (post) => axios.post(url, post);

export const getPosts = () => axios.get(url);

export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);

export const deletePost = (id) => axios.delete(`${url}/${id}`);