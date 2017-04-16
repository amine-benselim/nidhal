
import axios from 'axios';

import { 
    GET_POSTS, 
    GET_POSTS_SUCCESS, 
    GET_POSTS_FAILURE, 
    GET_POST, 
    GET_POST_SUCCESS,  
    GET_POST_FAILURE,
  } from './actions';

// Posts List action creators
export function getPosts(page) {
  const request = axios({
    method: 'get',
    url: `/wp-json/wp/v2/posts?context=embed&per_page=4&page=${page}`,
    headers: []
  });

  return {
    type: GET_POSTS,
    payload: request
  };
}

export function getPostsSuccess(posts,totalpages,previous) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
    totalpages,
    posts: previous
  };
}

export function getPostsFailure(error) {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  };
}


// Single Post action creators
export function getPost(id) {
  const request = axios.get(`/wp-json/wp/v2/posts/${id}`);

  return {
    type: GET_POST,
    payload: request
  };
}


export function getPostSuccess(currentPost) {
  return {
    type: GET_POST_SUCCESS,
    payload: currentPost
  };
}

export function getPostFailure(error) {
  return {
    type: GET_POST_FAILURE,
    payload: error
  };
}

export function resetPost(){
  return {
    type: RESET_POST
  }
}