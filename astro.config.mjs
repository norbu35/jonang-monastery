import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  image: {
    domains: ["167.71.60.250", "cms.jonang.in", "localhost"],
    remotePatterns: [{
      protocol: "http",
      hostname: "localhost",
    }, {
      protocol: "http",
      hostname: "167.71.60.250",
    }, {
      protocol: "https",
      hostname: "cms.jonang.in",
    }],
  },
});
