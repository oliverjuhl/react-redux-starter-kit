[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d275c621eb014202bd6bdca26281bd94)](https://www.codacy.com/app/tomasz-szymanek/react-redux-starter-kit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tomasz-szymanek/react-redux-starter-kit&amp;utm_campaign=Badge_Grade)

### lightweight react-redux starter kit
Yet Another JavaScript Boilerplate using react, redux, mocha, eslint and scsslint

- airbnb code style
- http://sass-guidelin.es/ scss code style
- hot reload
- react-redux-router
- react-chrome-devtools (time travel debugging)

```
npm install
npm start
```

### fire unit tests:
```
npm test
```

### sass linting:
```
gem install scss_lint
scss-lint
```

#### End-to-End Tests

E2E tests are run with Nightwatch + Selenium Standalone (installed via npm)

##### Setup

The nightwatch config defaults to Chrome, and assumes an OSX install. You may need to install and/or customize according to your setup;

1. Install the Chrome Driver

On OSX, using Homebrew, it looks like this;

      brew install chromedriver

2. Note the Chrome driver binary path;

     brew list chromedriver

3. Configure nightwatch.json accordingly. E.g.

```
"webdriver.chrome.driver" : "/usr/local/Cellar/chromedriver/2.21/bin/chromedriver"
```

###### Running tests
```
npm run test:e2e
```
