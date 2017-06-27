import { combineReducers } from 'redux'

import { postsHasErrored, postsIsLoading, posts, currentPost } from './posts'
import { commentsHasErrored, commentsIsLoading, comments } from './comments'

const rootReducer = combineReducers({
  postsHasErrored,
  postsIsLoading,
  posts,
  currentPost,
  commentsHasErrored,
  commentsIsLoading,
  comments,
})

export default rootReducer
