var path = require('path');
var fs = require('fs');


module.exports = {
    https: {
        https: true
    },
    module: {
      rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
        }
      ]
    },
};