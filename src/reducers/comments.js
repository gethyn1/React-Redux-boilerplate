// @flow

import {
  COMMENTS_HAS_ERRORED,
  COMMENTS_HAS_ERRORED_ON_SAVE,
  COMMENTS_HAS_ERRORED_ON_DELETE,
  COMMENTS_IS_LOADING,
  COMMENTS_IS_SAVING,
  COMMENTS_FETCH_DATA_SUCCESS,
  COMMENTS_ADD_COMMENT_SUCCESS,
  COMMENTS_DELETE_COMMENT_SUCCESS,
} from '../actions/comments'

export const initialState = {
  hasErrored: false,
  hasErroredOnSave: false,
  hasErroredOnDelete: false,
  isLoading: false,
  isSaving: false,
  comments: [],
}

export const comments = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case COMMENTS_HAS_ERRORED:
      return Object.assign({}, state, {
        hasErrored: action.payload,
      })
    case COMMENTS_HAS_ERRORED_ON_SAVE:
      return Object.assign({}, state, {
        hasErroredOnSave: action.payload,
      })
    case COMMENTS_HAS_ERRORED_ON_DELETE:
      return Object.assign({}, state, {
        hasErroredOnDelete: action.payload,
      })
    case COMMENTS_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      })
    case COMMENTS_IS_SAVING:
      return Object.assign({}, state, {
        isSaving: action.payload,
      })
    case COMMENTS_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        comments: action.payload,
      })
    case COMMENTS_ADD_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        comments: [
          ...state.comments,
          action.payload,
        ],
      })
    case COMMENTS_DELETE_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.payload),
      })
    default:
      return state
  }
}
