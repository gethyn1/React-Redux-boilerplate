[![Build Status](https://img.shields.io/travis/gethyn1/React-Redux-boilerplate.svg?style=flat-square)](https://travis-ci.org/gethyn1/React-Redux-boilerplate)

# React boilerplate

This is a work in progress for a quick start client side react boilerplate. The aim is to create an app with routing capabilities without the need to run a full server. This is useful for quick prototypes or instances where the app will interact with a standalone API.

# Features

- React (ES6)
- Webpack 2.0 [https://webpack.js.org/](https://webpack.js.org/)
- Flow type checking [https://flow.org](https://flow.org)
- Redux and Redux dev tools [http://redux.js.org/](http://redux.js.org/)
- React router v4 [https://reacttraining.com/react-router/](https://reacttraining.com/react-router/) with `_redirects` for deployment to Netlify
- React hot reloader [https://github.com/gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader)
- SASS using CSS modules and ITCSS
- ES Lint (with AirBnB configuration) [http://eslint.org/](http://eslint.org/)
- JSON server for mock API [https://github.com/typicode/json-server](https://github.com/typicode/json-server)
- Testing with Jest and Enzyme [https://facebook.github.io/jest/](https://facebook.github.io/jest/), [https://github.com/airbnb/enzyme](https://github.com/airbnb/enzyme)
- Husky git hooks [https://github.com/typicode/husky](https://github.com/typicode/husky)
- React Helmet [https://github.com/nfl/react-helmet](https://github.com/nfl/react-helmet)

# Running the project

To start the project first install all dependencies with `yarn install`. Then make sure you have the JSON server running for the mock API with `yarn start:json`. Run the project using Webpack dev-server by running `yarn start`. To build the project for production run `yarn prod:build`. Linting and test the project with ES lint, Flow, Jest and Enzyme by running `yarn test`.

# Considerations

### Linking directly to sub routes

Using React Router without a server to handle routes means direct linking to a route in production (other than the root url) will result in a 404. In production the server needs to be configured to handle this situation. If deploying to [Netlify](https://www.netlify.com/) we can deal with this with a `_redirects` file. [Read this article](https://www.netlify.com/docs/redirects/) for more information.

# Roadmap

- Immutable JS [https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)
- React snapshot [https://www.npmjs.com/package/react-snapshot](https://www.npmjs.com/package/react-snapshot) - this is not needed if deploying to Netlify as they have there own prerendering service.
