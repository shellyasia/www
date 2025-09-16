import { sidebarsProductsZh } from "../.vitepress/sidebar";

export default {
  load() {
    return {
      items: sidebarsProductsZh(),
    };
  },
};
