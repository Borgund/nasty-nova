// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ScaleUI 🐟",
      logo: {
        light: "./src/assets/themelightlogo.svg",
        dark: "./src/assets/themedarklogo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/scaleaq/scaleui-mono",
        slack: "https://scaleaq.slack.com/archives/C02P7FEQF8E",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    mdx(),
  ],
});
