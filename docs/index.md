<script setup>
import { data } from './menu.data.ts'
</script>

# API 文档

在本节中，你可以看到使用 Shelly IoT 云服务的各种 API 的文档。

<div v-for="sections of data">
  <section v-for="category of sections">
    <h2>{{ category.text }}</h2>
    <ul v-for="item of category.items">
      <li><a :href="item.link">{{ item.text }}</a></li>
    </ul>
  </section>
</div>

