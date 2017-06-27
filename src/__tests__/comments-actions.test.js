import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import fetchMock from 'fetch-mock'

import {
  commentsHasErrored,
  commentsIsLoading,
  commentsFetchDataSuccess,
  commentsFetchData,
} from '../actions/comments'

import { API_URL_COMMENTS } from '../config'

const mockStore = configureMockStore([thunkMiddleware])

/* eslint-disable */
const mockJSON = {
  "comments": [
    {
      "id": "asde5e",
      "postId": "asefff",
      "text":"Totally need to try this.",
      "user": "heavymetaladam"
    }
  ]
}
/* eslint-enable */

const mockCommentForPostUrl = `${API_URL_COMMENTS}?postId=asefff`

afterEach(() => {
  fetchMock.restore()
})

test('Fetch comments from API: success', () => {
  fetchMock.get(mockCommentForPostUrl, mockJSON)

  const store = mockStore()
  return store.dispatch(commentsFetchData('asefff'))
    .then(() => {
      expect(store.getActions()).toEqual([
        commentsIsLoading(true),
        commentsIsLoading(false),
        commentsFetchDataSuccess(mockJSON),
      ])
    })
})

test('Fetch comments from API: 404', () => {
  fetchMock.get(mockCommentForPostUrl, 404)

  const store = mockStore()
  return store.dispatch(commentsFetchData('asefff'))
    .then(() => {
      expect(store.getActions()).toEqual([
        commentsIsLoading(true),
        commentsHasErrored(true),
      ])
    })
})
