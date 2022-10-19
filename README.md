# Montauk Airport Distance Service

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Airport data feeds

[Aviationstack](https://aviationstack.com/) is selected as main data feeds for implemention of this tiny service.

The project just requires airports list data with digital code and the aviationstack was an ideal match to get all airports in United States.

But unfortunately, in order to use searching functionality, it was mandatory to use a premium account and it's a little wasting money for this kinda test assessment, so just used free account and filtering region is manually implemented on client side.

As a result, all airports list is fetched, so it takes time to get final airports list in United States, but it would be easily fixed by using premium account definitely.

On the other hand, the free account doesn't support secured http request and it's one of requirements to deploy the application on netlify (netlify does only support https protocol), so cors-anywhere-proxy is used to make it enable to use http request from https domain.

## Deployment

The application is deployed on netlify: [https://montauk.netlify.com](https://montauk.netlify.com)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
