# React + ExpressJS boilerplate

React + ExpressJS boilerplate.

It includes packages to:

- Handle file uploads from React to ExpressJS with `express-formidable`
- Logging on ExpressJS with `winston`
- `Helmet` to help you secure your Express apps
- `Axios` for HTTP requests
- Source map explorer analyzer
- Prettier
- Linting
- Webpack for ExpressJS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial setup

Download or clone repo and run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run start:react`

Runs the React app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start:dev`

Runs the Express app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm start:prod`

Runs the React and Express app in the production mode from the `build` folder.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run test:react`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Runs linting tests against the whole codebase.

### `npm run lint:fix`

Runs linting tests against the whole codebase and tries to fix the issues.

### `npm run format`

Runs a prettier formatter against the whole codebase.

### `npm build:react`

Builds the React app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm build:express`

Builds the Express app for production to the `build` folder.<br />
It correctly bundles Express in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm build:prod`

Builds the Express app and React App for production to the `build` folder.<br />
It correctly bundles the whole app in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm build:analyze-react`

Analyzes the bundled code in `build` for React and outputs a react_tree.html file.

### `npm build:analyze-express`

Analyzes the bundled code in `build` for Express and outputs an express_tree.html file.

### `npm run eject:react`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
