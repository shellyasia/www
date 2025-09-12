import { sidebarProducts } from "../../.vitepress/sidebar";

export default {
  load() {
    return {
      sidebarProducts: sidebarProducts(),
    };
  },
};
