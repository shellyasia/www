<script setup>
import { data } from './menu.data.ts'
</script>

# Examples

In this section, you can see practical examples to create your application with
Hono.

<div v-for="sections of data">
  <section v-for="category of sections">
    <h2>{{ category.text }}</h2>
    <ul v-for="item of category.items">
      <li><a :href="item.link">{{ item.text }}</a></li>
    </ul>
  </section>
</div>

