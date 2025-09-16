<script setup>
import { data } from './menu.data.ts'
</script>

# 雪莉智能家居产品


雪莉智能家居（深圳）有限公司旗下品牌。一下是部分产品展示，更多产品请访问[产品中心](https://www.shelly.com/collections/all-products)。


<div v-for="sections of data">
  <section v-for="category of sections">
    <h2>{{ category.text }}</h2>
    <ul v-for="item of category.items">
      <li><a :href="item.link">{{ item.text }}</a></li>
    </ul>
  </section>
</div>

## 问题反馈
如果在使用过程中遇到任何问题，欢迎通过GitHub提交issue，我们会尽快处理。感谢您的支持！
[GitHub Issues](https://github.com/shellyasia/www/issues)
