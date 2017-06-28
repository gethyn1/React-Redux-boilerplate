// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { APP_NAME } from '../config'

const TopBar = () => (
  <h1 className="c-branding">
    <Link to="/" className="c-branding__link">{APP_NAME}</Link>
  </h1>
)

export default TopBar
