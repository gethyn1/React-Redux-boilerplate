import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import fetchMock from 'fetch-mock'

import {
  commentsHasErrored,
  commentsIsLoading,
  commentsFetchDataSuccess,
  commentsFetchData,
} from '../actions/comments'

import * as CONFIG from '../config'

const mockStore = configureMockStore([thunkMiddleware])

/* eslint-disable */
const mockJSON = {
  "comments": [
    {
      "id": "asde5e",
      "text":"Totally need to try this.",
      "user": "heavymetaladam"
    }
  ]
}
/* eslint-enable */

afterEach(() => {
  fetchMock.restore()
})

test('Fetch comments from API: success', () => {
  fetchMock.get(CONFIG.API_URL_COMMENTS, mockJSON)

  const store = mockStore()
  return store.dispatch(commentsFetchData(CONFIG.API_URL_COMMENTS))
    .then(() => {
      expect(store.getActions()).toEqual([
        commentsIsLoading(true),
        commentsIsLoading(false),
        commentsFetchDataSuccess(mockJSON),
      ])
    })
})

test('Fetch comments from API: 404', () => {
  fetchMock.get(CONFIG.API_URL_COMMENTS, 404)

  const store = mockStore()
  return store.dispatch(commentsFetchData(CONFIG.API_URL_COMMENTS))
    .then(() => {
      expect(store.getActions()).toEqual([
        commentsIsLoading(true),
        commentsHasErrored(true),
      ])
    })
})
