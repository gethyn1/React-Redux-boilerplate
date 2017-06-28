// @flow

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  posts: Array<Object>,
  fetchData: Function,
  hasErrored: boolean,
  isLoading: boolean,
}

class PostsList extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  props: Props

  render() {
    const posts = this.props.posts.map(post => (
      <li key={post.id} className="c-posts__item">
        <Link to={`/post/${post.id}`} className="c-posts__link">{post.title}</Link>
      </li>
    ))

    if (this.props.hasErrored) {
      return <p>There was an error getting posts</p>
    }

    if (this.props.isLoading) {
      return <p>Loading posts ...</p>
    }

    return (
      <div>
        <ul className="o-list-bare c-posts">
          {posts}
        </ul>
      </div>
    )
  }
}

export default PostsList
