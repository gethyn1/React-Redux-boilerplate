// @flow

import {
  POSTS_IS_LOADING,
  POSTS_IS_SAVING_POST,
  POSTS_HAS_ERRORED,
  POSTS_HAS_ERRORED_ON_UPDATE,
  POSTS_FETCH_DATA_SUCCESS,
  POSTS_FETCH_POST_SUCCESS,
  POSTS_UPDATE_POST_SUCCESS,
} from '../actions/posts'

export const initialState = {
  isLoading: false,
  isSaving: false,
  hasErrored: false,
  hasErroredOnUpdate: false,
  posts: [],
  post: {},
}

export const posts = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case POSTS_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      })
    case POSTS_IS_SAVING_POST:
      return Object.assign({}, state, {
        isSaving: action.payload,
      })
    case POSTS_HAS_ERRORED:
      return Object.assign({}, state, {
        hasErrored: action.payload,
      })
    case POSTS_HAS_ERRORED_ON_UPDATE:
      return Object.assign({}, state, {
        hasErroredOnUpdate: action.payload,
      })
    case POSTS_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
      })
    case POSTS_FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        post: action.payload,
      })
    case POSTS_UPDATE_POST_SUCCESS:
      return Object.assign({}, state, {
        post: action.payload,
      })
    default:
      return state
  }
}
