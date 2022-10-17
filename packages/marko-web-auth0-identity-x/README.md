# BaseCMS Marko Auth0+IdentityX Integrations
Auth0+IdentityX components for BaseCMS/Marko websites.

> ***Note:*** If using this package with another IdentityX plugin, ensure that the IdentityX service is installed by the last plugin! See the `idxInstall` property below.

Additional information can be found in the [Auth0](https://auth0.com/docs) and [IdentityX](https://docs.parameter1.com/identity-x) API documentation.

## Configuration
All configuration data must be passed to the middleware when loaded (See [Middleware Setup](#middleware-setup) below.)

| Property  | Required? | Description | Default value |
| - | - | - | - |
| `baseURL` | **Yes** | The front-end URL where the application can be accessed (such as `http://localhost:8080`)
| `clientID` | **Yes** | The Auth0 Client ID
| `clientSecret` | **Yes** | The Auth0 Client Secret
| `issuerBaseURL` | **Yes** | The Auth0 instance URL (such as `https://parameter1.us.auth0.com`)
| `idxConfig` | **Yes** | An instance of the IdentityX configuration class (see [marko-web-identity-x#1](../marko-web-identity-x/config.js)) | _n/a_
| `idxInstall` | No | If the IdentityX middleware should be automatically configured | `true`
| `idxRouteTemplates` | **Yes** | An object containing the Marko templates to use for each IdentityX endpoint. (see [marko-web-identity-x#2](../marko-web-identity-x/index.js))

## Usage
This package:
1. Configures the underlying [auth0](../marko-web-auth0) and [identity-x](../marko-web-identity-x) packages
2. Hooks into the IdentityX library to push Auth0 users to IdentityX, and automatically log them in.

### Middleware Setup
To enable, load the middleware exported by this package. For most applications, this will be done in the `startServer` function passed to the marko-web package.

See config section above and the Auth0 and IdentityX package documentation for available configurations.

```js
const handler = require('@parameter1/base-cms-marko-web-auth0-identity-x');
const auth0Config = require('./config/auth0');
const idXConfig = require('./config/identity-x');
const idxRouteTemplates = require('./templates/user');

startServer({
  onStart: async (app) => {
    handler(app, {
      ...auth0Config,
      idxConfig,
      // idxInstall: true,
      idxRouteTemplates,
    })
  },
}
```

It can also be loaded as a standard Express route middleware.
```js
module.exports = (app) => {
  handler(app, { ...auth0Config, idxConfig, idxRouteTemplates });
};
```
