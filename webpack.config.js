module.exports = {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        // `.swcrc` can be used to configure swc
        loader: 'swc-loader',
      },
    },
  ],
};
