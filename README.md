
# React-AutoComplete

A simple React component which shows AutoSuggest keywords based on live data fetched from YouTube Data API v3.

## Environment variables

Create **.env** file in the root directory and set there value for **REACT_APP_YOUTUBE_DATA_API_V3_KEY** secret variable. You can get that from [YouTube Data API official page](https://developers.google.com/youtube/v3/getting-started).
Also set value for **REACT_APP_PUBLIC_URL** secret variable (e.g. "https://boolfalse.github.io/youtube-search").

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all Node Modules (Prod and Dev) dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project, so you've full control over them. All of the commands except `eject` will still work, but they'll point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



## JSONP Request

Using YouTube Data API v3 to fetch the suggestion keywords Asynchronously, This API causes cross-domain issues, hence using JSONP.

"https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=[YOUTUBE_DATA_API_V3_KEY]&q="

  **USAGE**

Using JSONP to make request without worrying about cross-domain issues.

```
const API_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=[YOUTUBE_DATA_API_V3_KEY]&q=";

    fetchJsonp(`${API_URL} + ${this.state.query}`)
      .then(function(response) {
        ...
      }
  
```

## Folder Structure

After creation, your project should look like this:

```
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  └── manifest.json
├── README.md
├── src
|  ├── App.css
|  ├── App.js
|  ├── App.test.js
|  ├── index.css
|  ├── index.js
|  ├── logo.svg
|  ├── registerServiceWorker.js
|  └── Suggestions.js
└── yarn.lock
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won't see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build, so you can use them for things like documentation.



## Built With

* [React.js](https://reactjs.org/) - The web framework used
* [CreateReactApp](https://github.com/facebook/create-react-app) - To automate build configuration
* [Fetch JsonP](https://www.npmjs.com/package/fetch-jsonp) - Using JSONP to make request without worrying about cross-domain issues.

## Author

* **BoolFalse** - *Initial work* - [boolfalse](https://github.com/boolfalse)
