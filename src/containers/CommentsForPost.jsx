import { connect } from 'react-redux'

import {
  commentsFetchData,
  commentsRemoveComment,
} from '../actions/comments'

import CommentList from '../components/CommentList'

const mapStateToProps = state => ({
  comments: state.comments,
  hasErrored: state.commentsHasErrored,
  isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => {
    dispatch(commentsFetchData(url))
  },
  onDeleteComment: (id) => {
    dispatch(commentsRemoveComment(id))
  },
})

const CommentsForPost = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList)

export default CommentsForPost
