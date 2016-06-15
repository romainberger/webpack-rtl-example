# Webpack RTL Example

Example app using [rtl-css-loader](https://github.com/romainberger/rtl-css-loader) and [webpack-rtl-plugin](https://github.com/romainberger/webpack-rtl-plugin).

## Installation

```shell
# clone the repo
$ git clone git@github.com:romainberger/webpack-rtl-example.git
$ cd webpack-rtl-example

# install the dependencies
$ npm install
```

## Usage

The app uses the `rtl-css-loader` for dev and `webpack-rtl-plugin` for prod.

### Development

```shell
# run the webpack compilation
npm run webpack-dev

# run the development server
npm run start-dev
```

Then open your browser at [http://localhost:3000](http://localhost:3000).

For development, we use the `style-loader` to dynamically add `style` tags. If you check out the `head` in your browser you will see some style tags added.

### Production

```shell
# build the assets with webpack
npm run webpack

# run the server
npm start
```

Then open your browser at [http://localhost:3000](http://localhost:3000).

For production we use the extract-text-webpack-plugin to create a real stylesheet, and the webpack-rtl-plugin will create a duplicate stylesheet but for right-to-left languages. If you inspect the page you will see the stylesheet used depending on the direction: `app.css` if you are on ltr, and `app.rtl.css` for rtl.
