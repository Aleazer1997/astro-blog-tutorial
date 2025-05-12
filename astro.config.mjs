import { defineConfig, sharpImageService } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ["*"],
        ic: ["*"],
        tabler: ["*"],
      },
    }),
  ],
});
