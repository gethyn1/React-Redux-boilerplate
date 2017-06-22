import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

const defaultState = {
  comments: [],
}

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

const store = createStore(
  rootReducer,
  defaultState,
  enhancers,
)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    // eslint-disable-next-line
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
