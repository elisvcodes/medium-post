import * as api from '../api/index';

export const createPost = (post) => async (dispatch) => {
  const { data } = await api.createPost(post);
  dispatch({ type: 'POST', payload: data });
};

export const getPosts = () => async (dispatch) => {
  const { data } = await api.getPosts();
  dispatch({ type: 'GET', payload: data });
};

export const updatePost = (id, post) => async (dispatch) => {
  console.log(id)
  const { data } = await api.updatePost(id, post);
  dispatch({ type: 'UPDATE', payload: data });
};

export const deletePost = (id) => async (dispatch) => {
  console.log(id)
  const { data } = await api.deletePost(id);
  dispatch({ type: 'DELETE', payload: id });
};
