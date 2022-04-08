# Live-Chat Trial using React-NodeJs-SocketIO

## Methods

- Created a custom hook ```useChat``` to handle the socket. The socket is stored in useRef so it doesnt reload everytime and thus create a new socket everytime.
- The senderID is generated with socket and stored in useRef.
- Then the socket is used to handle events.

## Scripts used in this project

### `yarn` (from yarn)

Installs all the dependencies for the project, mentioned in the package.json file.

### `yarn start` (from React)

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser, by default.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `yarn run watch-tw` (from TailwindCSS)

It is advised for the developer to allocate an individual terminal to run this script. It watches for tailwind.config.js file changes, classnames added in .html/.js/.jsx files and recompiles the output CSS.

The developer is also advised to run this script before running yarn start to prevent the error :

```
Module not found: Error: Can't resolve './styles/tailwind.output.css' in '\src'
```

The output CSS is generated in the /src/styles folder, under the name 'tailwind.output.css'.

### `yarn run dev` (from concurrently)

This starts the server in the background that handles the socket.io connection.
