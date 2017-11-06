## Build Setup

``` bash
# install dependencies
npm install

# develop
gulp
gulp watch

gulp css:watch
gulp js:watch

# build for production
gulp --production

gulp css --production
gulp webpack --production

# build for config, vendor library (only preorder)
gulp preorder:vendor
gulp preorder:vendor --production
```