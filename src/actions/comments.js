// @flow

import { API_URL_COMMENTS } from '../config'

export const commentsHasErrored = (bool: boolean) => ({
  type: 'COMMENTS_HAS_ERRORED',
  hasErrored: bool,
})

export const commentsHasErroredOnSave = (bool: boolean) => ({
  type: 'COMMENTS_HAS_ERRORED_ON_SAVE',
  hasErrored: bool,
})

export const commentsHasErroredOnDelete = (bool: boolean) => ({
  type: 'COMMENTS_HAS_ERRORED_ON_DELETE',
  hasErrored: bool,
})

export const commentsIsLoading = (bool: boolean) => ({
  type: 'COMMENTS_IS_LOADING',
  isLoading: bool,
})

export const commentsIsSaving = (bool: boolean) => ({
  type: 'COMMENTS_IS_SAVING',
  isSaving: bool,
})

export const commentsFetchDataSuccess = (comments: Array<Object>) => ({
  type: 'COMMENTS_FETCH_DATA_SUCCESS',
  comments,
})

export const commentsDeleteCommentSuccess = (id: String) => ({
  type: 'COMMENTS_DELETE_COMMENT_SUCCESS',
  id,
})

export const commentsAddCommentSuccess = (comment: Object) => ({
  type: 'COMMENTS_ADD_COMMENT_SUCCESS',
  comment,
})

export const commentsDeleteComment = (id: String) => (dispatch: Function) => {
  // flow-disable-next-line
  const url = `${API_URL_COMMENTS}/${id}`

  return fetch(url, { method: 'DELETE' })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      return response
    })
    .then(response => response.json())
    .then(() => dispatch(commentsDeleteCommentSuccess(id)))
    .catch(() => dispatch(commentsHasErroredOnDelete(true)))
}

export const commentsAddComment = (comment: Object) => (dispatch: Function) => {
  const url = API_URL_COMMENTS
  dispatch(commentsIsSaving(true))

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(commentsIsSaving(false))
      return response
    })
    .then(response => response.json())
    .then(newComment => dispatch(commentsAddCommentSuccess(newComment)))
    .catch(() => dispatch(commentsHasErroredOnSave(true)))
}

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
