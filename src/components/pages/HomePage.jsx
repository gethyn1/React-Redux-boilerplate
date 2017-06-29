// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

import { APP_NAME } from '../../config'

import AllPosts from '../../containers/AllPosts'

const title = 'Home'

const HomePage = () => (
  <div>
    <Helmet
      title={`${APP_NAME}: ${title}`}
      meta={[
        { name: 'description', content: 'A react boilerplate application' },
        { property: 'og:title', content: `${APP_NAME}: ${title}` },
      ]}
    />
    <AllPosts />
  </div>
)

export default HomePage
