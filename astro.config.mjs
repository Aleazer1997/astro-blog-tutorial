import { defineConfig, sharpImageService } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://stargazers.club",

  integrations: [
    icon({
      include: {
        mdi: ["*"],
        ic: ["*"],
        tabler: ["*"],
      },
    }),
    sitemap(),
  ],
});
