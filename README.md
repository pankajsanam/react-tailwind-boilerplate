# Mint React 0.1.0

![license](https://img.shields.io/badge/license-MIT-blue.svg)

A beautifully crafted boilerplate for starting a React JS and Tailwind css project using Mint Express as backend API.

**Demo:** Coming Soon

<p align="center">
    <img src="public/images/preview.png" alt="React Mint Preview"/>
</p>

## Features

1. Jest for unit tests with coverage report
2. Cypress for end-to-end testing
3. Preconfigured Tailwind CSS
4. Pre-configured ESLint
5. Forgot Password
6. Login and Registration
7. Public and private routes
8. Redux with hooks
9. Modular architecture
10. Robust token authentication

## Quick start

Clone the repo:

`git clone https://github.com/antick/mint-react.git`.

Run `npm install` to install all the dependencies.

Run `npm watch:css` and `npm start` to watch the files and start the server.

## Quick start

#### `npm build:css`

Creates a build with updated style.css from index.css.

#### `npm watch:css`

Watch the changes done in the src/index.css and build them in public/style.css

#### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run build`

Builds the app for production to the `build` folder.

#### Docker

```bash
# run docker container
npm run docker

# run all tests in a docker container
npm run docker:test
```

## Directory Structure

```
|-- public
|-- src
  |-- assets
    |-- styles
  |-- config
  |-- modules
    |-- app
      |-- __tests__
      |-- components
    |-- auth
      |-- __tests__
      |-- components
      |-- hooks
      |-- reducers
      |-- utilities
    |-- shared
      |-- __tests__
      |-- actions
      |-- components
      |-- hooks
      |-- reducers
      |-- utilities
    |-- user
      |-- actions
      |-- components
      |-- reducers
```

## License

MIT License

## Thanks

<p style="text-align: center;">
  <a href="https://www.jetbrains.com/?from=mintreact">
    <img src="public/images/jetbrains.png" alt="Jetbrains" />
  </a>
</p>
