// @flow

import { API_URL_POSTS } from '../config'

export const POSTS_IS_LOADING = 'POSTS_IS_LOADING'
export const POSTS_IS_SAVING_POST = 'POSTS_IS_SAVING_POST'
export const POSTS_HAS_ERRORED = 'POSTS_HAS_ERRORED'
export const POSTS_HAS_ERRORED_ON_UPDATE = 'POSTS_HAS_ERRORED_ON_UPDATE'
export const POSTS_FETCH_DATA_SUCCESS = 'POSTS_FETCH_DATA_SUCCESS'
export const POSTS_FETCH_POST_SUCCESS = 'POSTS_FETCH_POST_SUCCESS'
export const POSTS_UPDATE_POST_SUCCESS = 'POSTS_UPDATE_POST_SUCCESS'

export const postsIsLoading = (payload: boolean) => ({
  type: POSTS_IS_LOADING,
  payload,
})

export const postsIsSavingPost = (payload: boolean) => ({
  type: POSTS_IS_SAVING_POST,
  payload,
})

export const postsHasErrored = (payload: boolean) => ({
  type: POSTS_HAS_ERRORED,
  payload,
})

export const postsHasErroredOnUpdate = (payload: boolean) => ({
  type: POSTS_HAS_ERRORED_ON_UPDATE,
  payload,
})

export const postsFetchDataSuccess = (payload: Array<Object>) => ({
  type: POSTS_FETCH_DATA_SUCCESS,
  payload,
})

export const postsFetchPostSuccess = (payload: Object) => ({
  type: POSTS_FETCH_POST_SUCCESS,
  payload,
})

export const postsUpdatePostSuccess = (payload: Object) => ({
  type: POSTS_UPDATE_POST_SUCCESS,
  payload,
})

export const postsFetchData = () => (dispatch: Function) => {
  const url = API_URL_POSTS
  dispatch(postsIsLoading(true))

  return fetch(url, { method: 'GET' })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(postsIsLoading(false))
      return response
    })
    .then(response => response.json())
    .then(posts => dispatch(postsFetchDataSuccess(posts)))
    .catch(() => dispatch(postsHasErrored(true)))
}

export const postsFetchPost = (id: String) => (dispatch: Function) => {
  // flow-disable-next-line
  const url = `${API_URL_POSTS}?id=${id}`
  dispatch(postsIsLoading(true))

  return fetch(url, { method: 'GET' })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(postsIsLoading(false))
      return response
    })
    .then(response => response.json())
    .then(post => dispatch(postsFetchPostSuccess(post[0])))
    .catch(() => dispatch(postsHasErrored(true)))
}

export const postsUpdatePost = (post: Object) => (dispatch: Function) => {
  const url = `${API_URL_POSTS}/${post.id}`
  dispatch(postsIsSavingPost(true))

  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      dispatch(postsIsSavingPost(false))
      return response
    })
    .then(response => response.json())
    .then(data => dispatch(postsUpdatePostSuccess(data)))
    .catch(() => dispatch(postsHasErroredOnUpdate(true)))
}
