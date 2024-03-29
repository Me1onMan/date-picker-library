import path from "node:path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config?.resolve?.alias,
        "@assets": path.resolve(__dirname, "../src/assets"),
        "@components": path.resolve(__dirname, "../src/components"),
        "@constants": path.resolve(__dirname, "../src/constants"),
        "@decorators": path.resolve(__dirname, "../src/decorators"),
        "@providers": path.resolve(__dirname, "../src/providers"),
        "@utils": path.resolve(__dirname, "../src/utils"),
      },
    };

    return config;
  },
};
export default config;
