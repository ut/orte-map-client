# Map client for the ORTE Backend

A map client, based on the prototype for the A thousand channels project w/Nuxt.js v2

Preview:
**https://ut.github.io/ORTE-map-client/**

It renders map data provided via ORTE Backend. Currently some sample map data is shown.

You can manually load any layer (that has the status "Published") into the client. Just add the URL of the layer to the URL with the param layer.

**https://ut.github.io/ORTE-map-client/?layer=LAYER_JSON_URL**

(You have to replace the placeholder LAYER_JSON_URL with a real URL.)


---

## Testing

e2e and component testing with Cypress

### e2e testing

```bash
# start the client
$ yarn dev
# run cypres
$ yarn run cypress open
```

Tests are located in /cypress/integration

### Component testing

With Cypress + Webpacker

```bash
# run with yarn
$ yarn run cypress open-ct
# run with npx
$ npx cypress open-ct
```

Tests reside in-place in the /components-folder

More infos about [Cypress component testing](https://www.cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner/)

Installation explained in [Cypress.io Framework Configuration](https://docs.cypress.io/guides/component-testing/framework-configuration#Nuxt)


----

## Nuxt.js Installation and setup


### Installation

```bash
# install dependencies
$ yarn install
```

### Build/Run


```bash
# serve with hot reload at localhost:3000
$ yarn dev

# serve at <YOUR_IP>:3000, to make it accesible for other machines in your network
$ HOST=<YOUR_IP> npm run dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

