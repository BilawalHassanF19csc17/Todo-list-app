module.exports = function override(config, env) {
    // Add your own Webpack configuration changes here, e.g.:
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource', 
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    });
  
    return config;
  };
  