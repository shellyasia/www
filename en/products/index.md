<script setup>
import { data } from './menu.data.ts'
</script>

# Shelly Smart Home Products

Brand under Shelly Smart Home (Shenzhen) Co., Ltd. Below are some product displays. For more products, please visit the [Product Center](https://www.shelly.com/collections/all-products).

<div v-for="sections of data">
  <section v-for="category of sections">
    <h2>{{ category.text }}</h2>
    <ul v-for="item of category.items">
      <li><a :href="item.link">{{ item.text }}</a></li>
    </ul>
  </section>
</div>

## Feedback
If you encounter any issues during use, feel free to submit an issue via GitHub. We will handle it as soon as possible. Thank you for your support!
[GitHub Issues](https://github.com/shellyasia/www/issues)
