import { combineReducers } from 'redux'

import { commentsHasErrored, commentsIsLoading, comments } from './comments'

const rootReducer = combineReducers({
  commentsHasErrored,
  commentsIsLoading,
  comments,
})

export default rootReducer
