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
  // This prevents all of the React HMR messages from showing up in the browser console.
  const entryPreviews = config.entry.preview;
  config.entry.preview = entryPreviews.map((entryPreview) => {
    if (/webpack-hot-middleware/g.test(entryPreview)) return `${entryPreview}?noInfo=true`;
    return entryPreview;
  });
  return config;
};
