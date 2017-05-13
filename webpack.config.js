module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
        },
      }
    ],
  },
};
