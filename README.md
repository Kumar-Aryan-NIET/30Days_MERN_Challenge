# 30 Days MERN Challenge


## Links

react official link
 - hooks
 - component
 - learn
 - vite 
cra
- file structure 

vit
- file structure

## npm and npx

_npm : Node Package Manager_

& 

_npx : Node Package Execute_

---

npm and npx are both CLI tools from the Node.js ecosystem, but they serve different purposes:

npm (Node Package Manager): npm is the default package manager for Node.js. It allows you to install, update, and manage packages from the npm registry and manage project dependencies. When you install packages using npm, they are saved in the node_modules directory in your project.

For example, to install a package like Express, you would use:
```cmd
    npm install express
```

npx (Node Package Execute): npx is a tool that comes with npm (version 5.2.0 and above) and it's used to execute Node.js packages. One of the key features of npx is that it allows you to run packages that are not installed globally on your system. This is particularly useful for running packages on a one-off basis without having to install them globally or manage versions.

For example, to create a new React application using Create React App without installing it globally, you would use:

```cmd
    npx create-react-app my-app
```

In summary, while npm is used for managing and installing your project's dependencies, npx is used for executing Node.js packages without having to install them globally.

---

### installation in CRA

---

### installation in vite

---

## Package.json

This is a package.json file for a React project created with Create React App. Here's a breakdown of its main sections:

"name": "cra": This is the name of your project.

"version": "0.1.0": This is the current version of your project.

"private": true: This field prevents the project from being accidentally published on npm.

"dependencies": These are the packages your project depends on to run. It includes React, ReactDOM, testing libraries, and scripts for running the React app.

"scripts": These are scripts that can be run with the npm run command. For example, npm run start will run the react-scripts start command, starting the development server.

"eslintConfig": This section is for configuring ESLint, a tool for identifying and reporting on patterns in JavaScript. The project extends the configurations from react-app and react-app/jest.

"browserslist": This section is used by various front-end tools to determine which versions of browsers to target for transpilation. It has different configurations for production and development environments.

Here's a brief explanation of the scripts:

"start": "react-scripts start": Starts the development server.

"build": "react-scripts build": Builds the app for production.

"test": "react-scripts test": Runs the test watcher in an interactive mode.

"eject": "react-scripts eject": Removes the single build dependency from your project.

And the dependencies:

"react" and "react-dom": These are the core React libraries.

"@testing-library/jest-dom", "@testing-library/react", and "@testing-library/user-event": These are testing libraries for React.

"react-scripts": This is a set of scripts from the Create React App boilerplate. It includes scripts for building, testing, and starting your app.

"web-vitals": This is a library for measuring the performance of your web app.

---

### Difference b/w pakage.json of CRA and Vite

Dependencies:

CRA: CRA includes react-scripts in its dependencies. react-scripts is a set of scripts and configuration used by Create React App as an easy way to start up a new React project. It includes scripts for building, testing, and starting your app.

Vite: Vite projects include vite in their devDependencies. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It includes features like hot-module replacement and esbuild-powered fast bundling.

Scripts:

CRA: The scripts in a CRA project are based on react-scripts. For example, "start": "react-scripts start" to start the development server, "build": "react-scripts build" to build the app for production, etc.

Vite: The scripts in a Vite project are based on vite. For example, "dev": "vite" to start the development server, "build": "vite build" to build the app for production, etc.

Configuration:

CRA: CRA hides configuration for tools like Babel and Webpack to provide a zero-configuration experience. If you want to modify the configuration, you have to "eject" the project, which makes the configuration visible but also means you have to maintain it yourself.

Vite: Vite allows you to configure your project via the vite.config.js file. This means you have more control over the configuration from the start, without having to "eject" like in CRA

---

### Both use eslient is there any difference in use

Both Create React App (CRA) and Vite can use ESLint for linting JavaScript and TypeScript code, but there can be differences in the configuration and usage based on the project setup.

Create React App (CRA): CRA comes with a pre-configured ESLint setup out of the box. It includes a set of rules that are considered best practices in the React community. If you want to customize the ESLint configuration in CRA, you can add an .eslintrc file to your project, or define the eslintConfig field in your package.json. However, please note that CRA only supports a subset of ESLint configuration.

Vite: Vite doesn't come with a pre-configured ESLint setup. You have to set it up manually. This gives you more flexibility as you can configure ESLint to your liking from the start. You can install ESLint and any necessary plugins (like eslint-plugin-react for React projects), and configure them in an .eslintrc file.

In both cases, you can run ESLint via an npm script (like "lint": "eslint ."), or integrate it with your editor for real-time linting.

In summary, while both CRA and Vite can use ESLint, CRA comes with a pre-configured setup that is somewhat limited in terms of customization, while Vite requires manual setup but offers more flexibility.


