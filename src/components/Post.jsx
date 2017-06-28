// @flow

import React from 'react'

import Button from './Button'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

type Props = {
  post: Object,
  postsIsLoading: boolean,
  postsIsSavingPost: boolean,
  postsHasErrored: boolean,
  postsHasErroredOnUpdate: boolean,
  fetchPost: Function,
  onSubmitPost: Function,
  fetchComments: Function,
  /* eslint-disable react/no-unused-prop-types */
  comments: Array<Object>,
  onDeleteComment: Function,
  commentsHasErrored: boolean,
  commentsIsLoading: boolean,
  commentsIsSaving: boolean,
  commentsHasErroredOnSave: boolean,
  postId: String,
  onSubmitComment: Function,
  /* eslint-enable react/no-unused-prop-types */
}

type State = {
  editMode: boolean,
  postTitle: ?string,
}

/*
  Useful for testing HMR, not required for production when interacting with API
*/
const isNewPostLoaded = (post, postId) => !post || post.id !== postId

class Post extends React.Component {
  constructor(props: Props) {
    super(props)

    this.state = {
      editMode: false,
      postTitle: this.props.post ? this.props.post.title : '',
    }

    this.toggleEditMode = this.toggleEditMode.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state: State

  componentDidMount() {
    if (isNewPostLoaded(this.props.post, this.props.postId)) {
      this.props.fetchPost(this.props.postId)
      this.props.fetchComments(this.props.postId)
    }
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.post) {
      this.setState({
        postTitle: nextProps.post.title,
      })
    }
  }

  props: Props
  toggleEditMode: Function
  handleChange: Function
  handleSubmit: Function

  toggleEditMode() {
    this.setState({
      editMode: this.state.editMode !== true,
    })
  }

  handleChange(event: Event & { target: HTMLInputElement }) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit(event: Event) {
    event.preventDefault()
    this.props.onSubmitPost({
      id: this.props.postId,
      title: this.state.postTitle,
    })

    this.setState({
      editMode: false,
    })
  }

  renderPostView: Function

  renderPostView() {
    if (this.state.editMode) {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <input onChange={this.handleChange} name="postTitle" type="text" placeholder="Title" value={this.state.postTitle} />
          </p>
          <Button text="Save" type="submit" />
        </form>
      )
    }

    return (
      <h2>{this.props.post.title}</h2>
    )
  }

  render() {
    let updateStatus = null

    if (this.props.postsIsSavingPost) {
      updateStatus = <p>Saving post ...</p>
    }

    if (this.props.postsHasErroredOnUpdate) {
      updateStatus = <p>There was an error saving the post</p>
    }

    if (this.props.postsHasErrored) {
      return <p>There has been an error</p>
    }

    if (this.props.postsIsLoading || isNewPostLoaded(this.props.post, this.props.postId)) {
      return <p>Loading post ...</p>
    }

    return (
      <div>
        <p><button onClick={this.toggleEditMode} className="c-btn-link">{this.state.editMode ? 'Done editing' : 'Edit post'}</button></p>
        {this.renderPostView()}
        {updateStatus}
        <p>{this.props.post.content}</p>
        <CommentList {...this.props} />
        <CommentForm {...this.props} />
      </div>
    )
  }
}

export default Post
