// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import TopBar from './TopBar'

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

const App = () => (
  <div>
    <TopBar />
    <Switch>
      <Route exact path={'/'} render={() => <HomePage />} />
      <Route path={'/post/:postId'} render={() => <PostPage />} />
    </Switch>
  </div>
)

export default App
