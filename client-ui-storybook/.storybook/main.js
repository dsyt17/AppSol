module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg)$/,
        use: "file-loader?name=[name].[ext]",
        exclude: /\.inline.svg$/,
      },
      {
        test: /\.inline.svg$/,
        use: "svgr/webpack",
      },
    ],
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
