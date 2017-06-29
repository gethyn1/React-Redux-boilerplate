// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

import SinglePost from '../../containers/SinglePost'

const title = 'Post page'

const PostPage = () => (
  <div>
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: 'A react boilerplate application' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <SinglePost />
  </div>
)

export default PostPage
