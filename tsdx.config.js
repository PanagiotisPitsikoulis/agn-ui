// tsdx.config.js
module.exports = {
  rollup(config, options) {
    const bannerPlugin = {
      name: 'banner', // Name of the plugin
      renderChunk(code) {
        return '"use client";\n' + code; // Add "use client"; at the top
      },
    };

    // Add the custom plugin to the beginning of the plugins array
    config.plugins.unshift(bannerPlugin);

    return config; // Always return a config.
  },
};
