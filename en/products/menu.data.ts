import { sidebarsExamples } from '../../.vitepress/sidebar'

export default {
  load() {
    return {
      sidebarsExamples: sidebarsExamples(),
    }
  },
}
