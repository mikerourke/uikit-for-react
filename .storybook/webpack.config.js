// Load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

const additionalRules = [
  {
    test: /\.less/,
    loaders: ['style-loader', 'css-loader', 'less-loader'],
  },
  {
    test: /\.css/,
    loaders: ['style-loader', 'css-loader'],
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    options: { limit: 10000, mimetype: 'application/font-woff' },
    loader: 'url-loader',
  },
  {
    test: /\.svg$/,
    options: { limit: 10000, mimetype: 'image/svg+xml' },
    loader: 'url-loader',
  },
  {
    test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  },
];

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  additionalRules.forEach((rule) => {
    config.module.rules.push(rule);
  });
  return config;
};
