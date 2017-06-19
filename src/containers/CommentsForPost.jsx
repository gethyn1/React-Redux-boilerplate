import { connect } from 'react-redux'

import { deleteComment } from '../actions/comments'

import CommentList from '../components/CommentList'

const mapStateToProps = state => ({
  comments: state.comments,
})

const mapDispatchToProps = dispatch => ({
  onDeleteComment: (id) => {
    dispatch(deleteComment(id))
  },
})

const CommentsForPost = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList)

export default CommentsForPost
