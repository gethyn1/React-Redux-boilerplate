import React from 'react'
import { mount } from 'enzyme'

import CommentList from '../components/CommentList'

describe('CommentList', () => {
  let props
  let mountedCommentList

  const commentList = () => {
    if (!mountedCommentList) {
      mountedCommentList = mount(
        <CommentList {...props} />,
      )
    }

    return mountedCommentList
  }

  beforeEach(() => {
    props = {
      comments: undefined,
      onDeleteComment: undefined,
      commentsHasErrored: undefined,
      commentsIsLoading: undefined,
    }

    mountedCommentList = undefined
  })

  it('Always renders a div', () => {
    const divs = commentList().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  describe('When `comments` is defined', () => {
    beforeEach(() => {
      props.comments = [
        { id: '123', postId: '456', text: 'text 1', user: 'user 1' },
        { id: '789', postId: '101', text: 'text 2', user: 'user 2' },
      ]
    })

    it('renders the correct number of list items', () => {
      const listItems = commentList().find('li')
      expect(listItems.length).toEqual(props.comments.length)
    })
  })
})
