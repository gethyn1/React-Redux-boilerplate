import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import fetchMock from 'fetch-mock'

import {
  postsHasErrored,
  postsIsLoading,
  postsFetchDataSuccess,
  postsFetchData,
  postsFetchPost,
  postsFetchPostSuccess,
} from '../actions/posts'

import { API_URL_POSTS } from '../config'

const mockStore = configureMockStore([thunkMiddleware])

/* eslint-disable */
const mockJSON = {
  "posts": [
    {
      "id": "1wdecv",
      "title": "The post title",
      "content": "The post content"
    }
  ]
}
/* eslint-enable */

const mockSinglePostUrl = `${API_URL_POSTS}?id=1wdecv`

afterEach(() => {
  fetchMock.restore()
})

test('Fetch posts from API: success', () => {
  fetchMock.get(API_URL_POSTS, mockJSON)

  const store = mockStore()
  return store.dispatch(postsFetchData())
    .then(() => {
      expect(store.getActions()).toEqual([
        postsIsLoading(true),
        postsIsLoading(false),
        postsFetchDataSuccess(mockJSON),
      ])
    })
})

test('Fetch posts from API: 404', () => {
  fetchMock.get(API_URL_POSTS, 404)

  const store = mockStore()
  return store.dispatch(postsFetchData())
    .then(() => {
      expect(store.getActions()).toEqual([
        postsIsLoading(true),
        postsHasErrored(true),
      ])
    })
})

test('Fetch single post from API: success', () => {
  fetchMock.get(mockSinglePostUrl, mockJSON)

  const store = mockStore()
  return store.dispatch(postsFetchPost('1wdecv'))
    .then(() => {
      expect(store.getActions()).toEqual([
        postsIsLoading(true),
        postsIsLoading(false),
        postsFetchPostSuccess(mockJSON[0]),
      ])
    })
})

test('Fetch single post from API: 404', () => {
  fetchMock.get(mockSinglePostUrl, 404)

  const store = mockStore()
  return store.dispatch(postsFetchPost('1wdecv'))
    .then(() => {
      expect(store.getActions()).toEqual([
        postsIsLoading(true),
        postsHasErrored(true),
      ])
    })
})
