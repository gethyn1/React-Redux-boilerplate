// @flow

import { API_URL_COMMENTS } from '../config'

export const addComment = (comment: Object) => ({
  type: 'ADD_COMMENT',
  comment,
})

export const commentsHasErrored = (bool: boolean) => ({
  type: 'COMMENTS_HAS_ERRORED',
  hasErrored: bool,
})

export const commentsIsLoading = (bool: boolean) => ({
  type: 'COMMENTS_IS_LOADING',
  isLoading: bool,
})

export const commentsFetchDataSuccess = (comments: Array<Object>) => ({
  type: 'COMMENTS_FETCH_DATA_SUCCESS',
  comments,
})

export const commentsRemoveComment = (id: String) => ({
  type: 'COMMENTS_REMOVE_COMMENT',
  id,
})

export const commentsAddComment = (comment: Object) => ({
  type: 'COMMENTS_ADD_COMMENT',
  comment,
})

export const commentsFetchData = (id: String) => (dispatch: Function) => {
  // flow-disable-next-line
  const url = `${API_URL_COMMENTS}?postId=${id}`
  dispatch(commentsIsLoading(true))

  return fetch(url, { method: 'GET' })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(commentsIsLoading(false))
      return response
    })
    .then(response => response.json())
    .then(comments => dispatch(commentsFetchDataSuccess(comments)))
    .catch(() => dispatch(commentsHasErrored(true)))
}
