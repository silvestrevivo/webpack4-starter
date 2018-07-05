<div align="center">
  <img width="200" height="200"
    src="https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Webpack4 Starter</h1>
</div>

This is a code boilerplate built with WebPack4 which it could be used as starter project template for React Projects. It
contains Babel to compile _ES6_ to _ES5_ as well as _CSS_ and _SASS_ loaders. It comes ready to
install dependencies for _React_ and _ReactDOM_. It refreshs automatically through the scripts from
the package.json file and the _HotModuleReplacementPlugin_. CSS files come with autoprefixer updated following
[caniuse][1] and using _Postcss_.

## How to use it

This template is based on _npm package_ with **yarn**, thus to run it, download the repository in your local computer
and then in the folder of your project:

    $ yarn

    $ yarn dev

For production:

    $ yarn run build

## Modules installed

* Babel, babel-core, babel-loader, babel-preset-env, babel-preset-react, babel-plugin-transform-class-properties, babel-plugin-transform-object-rest-spread, babel-plugin-transform-runtime, babel-preset-stage-1

* Clean-webpack-plugin, cross-env

* Style-loader, css-loader, sass-loader, node-sass, extract-text-webpack-plugin

* Normalize.css, file-loader, Extract-text-webpack-plugin, rimraf

* Postcss-loader, autoprefixer, browserslist.

* Extract-text-webpack-plugin.

* Webpack, webpack-cli, webpack-dev-server.

* React, ReactDom, react-hot-loader, react-router-dom, classnames, prop-types, redux, react-redux, axios

[1]: http://caniuse.com/
