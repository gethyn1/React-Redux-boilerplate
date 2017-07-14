// @flow

import { API_URL_COMMENTS } from '../config'

export const COMMENTS_HAS_ERRORED = 'COMMENTS_HAS_ERRORED'
export const COMMENTS_HAS_ERRORED_ON_SAVE = 'COMMENTS_HAS_ERRORED_ON_SAVE'
export const COMMENTS_HAS_ERRORED_ON_DELETE = 'COMMENTS_HAS_ERRORED_ON_DELETE'
export const COMMENTS_IS_LOADING = 'COMMENTS_IS_LOADING'
export const COMMENTS_IS_SAVING = 'COMMENTS_IS_SAVING'
export const COMMENTS_FETCH_DATA_SUCCESS = 'COMMENTS_FETCH_DATA_SUCCESS'
export const COMMENTS_DELETE_COMMENT_SUCCESS = 'COMMENTS_DELETE_COMMENT_SUCCESS'
export const COMMENTS_ADD_COMMENT_SUCCESS = 'COMMENTS_ADD_COMMENT_SUCCESS'

export const commentsHasErrored = (payload: boolean) => ({
  type: COMMENTS_HAS_ERRORED,
  payload,
})

export const commentsHasErroredOnSave = (payload: boolean) => ({
  type: COMMENTS_HAS_ERRORED_ON_SAVE,
  payload,
})

export const commentsHasErroredOnDelete = (payload: boolean) => ({
  type: COMMENTS_HAS_ERRORED_ON_DELETE,
  payload,
})

export const commentsIsLoading = (payload: boolean) => ({
  type: COMMENTS_IS_LOADING,
  payload,
})

export const commentsIsSaving = (payload: boolean) => ({
  type: COMMENTS_IS_SAVING,
  payload,
})

export const commentsFetchDataSuccess = (payload: Array<Object>) => ({
  type: COMMENTS_FETCH_DATA_SUCCESS,
  payload,
})

export const commentsDeleteCommentSuccess = (payload: String) => ({
  type: COMMENTS_DELETE_COMMENT_SUCCESS,
  payload,
})

export const commentsAddCommentSuccess = (payload: Object) => ({
  type: COMMENTS_ADD_COMMENT_SUCCESS,
  payload,
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
