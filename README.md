

# Setting up webpack-rails gem with react and babel

**after following instructions here (https://github.com/mipearson/webpack-rails)**

install these npm modules

1. npm install babel-loader -S
1. npm install babel-preset-es2015 -S
1. npm install babel-preset-react -S
1. npm install react -S
1. npm install react-dom -S

**create .babelrc under app root and add these lines**
````json
{
  "presets" : ["es2015", "react"]
}
````

**Make changes in config/webpack.config.js**

change
````jasvascript
 entry: {
    // Sources are expected to live in $app_root/webpack
    'application': './webpack/application.js'
  }
````

to
````jasvascript
 entry: {
    // Sources are expected to live in $app_root/webpack
    'application': './webpack/application.jsx'
  }
````


after

````javascript
output: {
  ...
},

````

add these lines

````javascript
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '..', 'webpack'),
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
````

**Rename webpack/application.js to webpack/application.jsx**

**Add this code to webpack/application.jsx**

```js

import React from 'react';
import {render} from 'react-dom';
render(
    <div>Hello, world!</div>,
    document.getElementById('app')
);

```

Remember to create div with id 'app'