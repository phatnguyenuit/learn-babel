const path = require('path');
const tsConfig = require('./tsconfig.json');

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve(__dirname, tsConfig.compilerOptions.baseUrl)],
      },
    ],
  ],
};
