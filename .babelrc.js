const path = require('path');
const tsConfig = require('./tsconfig.json');

module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve(__dirname, tsConfig.compilerOptions.baseUrl)],
      },
    ],
  ],
};
