// @flow

import React from 'react'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

type Props = {
  post: Object,
  postsIsLoading: boolean,
  postsHasErrored: boolean,
  fetchPost: Function,
  fetchComments: Function,
  /* eslint-disable react/no-unused-prop-types */
  comments: Array<Object>,
  onDeleteComment: Function,
  commentsHasErrored: boolean,
  commentsIsLoading: boolean,
  postId: String,
  onSubmitComment: Function,
  /* eslint-enable react/no-unused-prop-types */
}

/*
  Useful for testing HMR, not required for production when interacting with API
*/
const isNewPostLoaded = (post, postId) => !post || post.id !== postId

class Post extends React.Component {
  componentDidMount() {
    if (isNewPostLoaded(this.props.post, this.props.postId)) {
      this.props.fetchPost(this.props.postId)
      this.props.fetchComments(this.props.postId)
    }
  }

  props: Props

  render() {
    if (this.props.postsHasErrored) {
      return <p>There has been an error</p>
    }

    if (this.props.postsIsLoading || isNewPostLoaded(this.props.post, this.props.postId)) {
      return <p>Loading post ...</p>
    }

    return (
      <div>
        <h1>{this.props.post.title}</h1>
        {this.props.post.content}
        <CommentList {...this.props} />
        <CommentForm {...this.props} />
      </div>
    )
  }
}

export default Post
