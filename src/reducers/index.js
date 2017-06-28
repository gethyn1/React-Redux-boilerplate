// @flow

import { combineReducers } from 'redux'

import {
  postsHasErrored,
  postsHasErroredOnUpdate,
  postsIsLoading,
  postsIsSavingPost,
  posts,
  currentPost,
} from './posts'
import {
  commentsHasErrored,
  commentsIsLoading,
  commentsIsSaving,
  commentsHasErroredOnSave,
  commentsHasErroredOnDelete,
  comments,
} from './comments'

const rootReducer = combineReducers({
  postsHasErrored,
  postsHasErroredOnUpdate,
  postsIsLoading,
  postsIsSavingPost,
  posts,
  currentPost,
  commentsHasErrored,
  commentsIsLoading,
  commentsIsSaving,
  commentsHasErroredOnSave,
  commentsHasErroredOnDelete,
  comments,
})

export default rootReducer
