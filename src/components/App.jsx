// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import TopBar from './TopBar'

import AllPosts from '../containers/AllPosts'
import SinglePost from '../containers/SinglePost'

const App = () => (
  <div>
    <TopBar />
    <Switch>
      <Route exact path={'/'} render={() => <AllPosts />} />
      <Route path={'/post/:postId'} render={() => <SinglePost />} />
    </Switch>
  </div>
)

export default App
