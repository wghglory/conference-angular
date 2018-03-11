# CI

`package.json`:

```json
{
  "scripts": {
    "test": "npm run -s lint && ng test --no-progress",
    "test.once": "npm test -- --single-run --browsers ChromeHeadlessNoSandbox --reporters nyan --no-sourcemaps",
    "test.ci": "npm run -s test.once -- --code-coverage --reporters spec",
  },
  "devDependencies": {
    "karma-nyan-reporter": "^0.2.5",
    "karma-spec-reporter": "^0.0.32",
  }
}
```

## [Travis CI for unix](<https://travis-ci.org>)

1. Sign in by github and you should see all repositories at <https://travis-ci.org/profile/wghglory>. Turn on `wghglory/conference-angular`.

1. Create .travis.yml

    ```yml
    language: node_js
    node_js:
      - '8.9.1'
    sudo: required
    dist: trusty
    branches:
      only:
        - master

    addons:
      chrome: stable

    before_install:
      - # start your web application and listen on `localhost`
      - google-chrome-stable --headless --disable-gpu --remote-debugging-port=9222 http://localhost &

    # before_install:
    # - |
    #   export DISPLAY=:99.0
    #   sh -e /etc/init.d/xvfb start
    #   sudo apt-key adv --fetch-keys http://dl.yarnpkg.com/debian/pubkey.gpg
    #   echo "deb http://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    #   sudo apt-get update -qq
    #   sudo apt-get install -y -qq yarn
    #   yarn --version
    #   # install the most recent `npm version`
    #   # used when publishing to build a properly packed tarball
    #   npm i -g npm
    # install:
    # - |
    #   yarn install

    before_script:
      - npm install -g firebase-tools
      - npm install -g @angular/cli

    script:
      # output useful info for debugging
      - node --version
      - npm --version
      # run tests
      - npm run test.ci
      - npm run build

    after_success:
      - firebase deploy --token $FIREBASE_TOKEN

    # notifications:
    #   email:
    #     on_failure: guanghui-wang@foxmail.com
    #     on_success: guanghui-wang@foxmail.com
    ```

1. If I intently change index.html h1 from 'hello world' to 'hello' and then commit to github. Note our test watching task only watches js now, so html changes won't be reflected in terminal unless restarting.

1. After commit and push to github. Travis will build and give us the build result.

If using karma runs chrome and see below issue:

```
30 11 2017 13:35:42.245:ERROR [launcher]: Cannot start Chrome
  [4315:4315:1130/133541.781662:FATAL:setuid_sandbox_host.cc(157)] The SUID sandbox help
```

solution: <<https://docs.travis-ci.com/user/chrome>

```js
// karma.conf.js

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],

    // you can define custom flags
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }
  })
}
```

## [Appveyor for windows](https://ci.appveyor.com/)

appveyor.yml:

```yml
# test against this version of node
environment:
  matrix:
  # node.js
  - nodejs_version: "8"

# install scripts. (runs after repo cloning)
install:
  # get the latest stable version of node.js or io.js
  - ps: Install-Product node $env:nodejs_version
  # install modules
  - npm install

# post-install test scripts
test_script:
  # output useful info for debugging
  - node --version
  - npm --version
  # run tests
  - npm run test.ci

# don't actually build
build: off
```

Usage is same with Travis. Sign in by github, add the project. When push commits to github, appveyor will build.