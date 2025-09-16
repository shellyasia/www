import { sidebarDocsZh } from "../.vitepress/sidebar";

export default {
  load() {
    return {
      sidebarDocsZh: sidebarDocsZh(),
    };
  },
};
