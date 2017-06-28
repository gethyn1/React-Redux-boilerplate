// @flow

import { API_URL_POSTS } from '../config'

export const postsIsLoading = (bool: boolean) => ({
  type: 'POSTS_IS_LOADING',
  isLoading: bool,
})

export const postsIsSavingPost = (bool: boolean) => ({
  type: 'POSTS_IS_SAVING_POST',
  isSaving: bool,
})

export const postsHasErrored = (bool: boolean) => ({
  type: 'POSTS_HAS_ERRORED',
  hasErrored: bool,
})

export const postsHasErroredOnUpdate = (bool: boolean) => ({
  type: 'POSTS_HAS_ERRORED_ON_UPDATE',
  hasErroredOnUpdate: bool,
})

export const postsFetchDataSuccess = (posts: Array<Object>) => ({
  type: 'POSTS_FETCH_DATA_SUCCESS',
  posts,
})

export const postsFetchPostSuccess = (post: Object) => ({
  type: 'POSTS_FETCH_POST_SUCCESS',
  post,
})

export const postsUpdatePostSuccess = (post: Object) => ({
  type: 'POSTS_FETCH_UPDATE_POST_SUCCESS',
  post,
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
