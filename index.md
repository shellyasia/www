---
title: 雪莉智能家居
titleTemplate: ':title'
head:
  - [
      'meta',
      {
        property: 'og:description',
        content: '雪莉智能家居（深圳）有限公司（简称“雪莉智能家居”）成立于2021年3月9日，是Shelly Group集团旗下专注于物联网一体化服务的中国子公司。公司总部位于深圳，业务涵盖智能家居与建筑自动化领域的供应链管理、IT技术支持、电子商务零售与批发以及自有品牌网站运营',
      },
    ]
layout: home
hero:
  name: 雪莉智能家居
  text: 一呼即控,智能生活更便捷
  tagline: 雪莉智能家居（深圳）有限公司旗下品牌。母公司是德国上市公司Shelly Group。
  image:
    src: /images/hero.webp
    alt: "shelly group products example"
  actions:
    - theme: brand
      text: 家居控制
      link: https://control.shellyiot.cn
    - theme: alt
      text: 产品中心
      link: /products/
    - theme: alt
      text: 帮助文档
      link: /docs/
features:
  - icon: 🏠
    title: 智能家居控制
    details: 一键掌控全屋设备，轻松实现灯光、空调、安防等智能化管理。
  - icon: 📱
    title: 手机远程操控
    details: 随时随地通过手机App远程控制家中设备，享受便捷生活。
  - icon: 🔐
    title: 安全守护
    details: 实时监控与告警，保障家庭安全，安心无忧。
  - icon: 🤖
    title: 智能联动
    details: 多设备智能联动，自动化场景切换，提升居家体验。
---


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/images/Dimitar Dimitrov.jpg',
    name: 'Dimitar Dimitrov',
    title: 'CEO',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/allterco/' }
    ]
  },
  {
    avatar: '/images/Wolfgang Kirsch.jpeg',
    name: 'Wolfgang Kirsch',
    title: 'Co-CEO',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/wolfgang-kirsch/?originalSubdomain=de' },
    ]
  },  
  {
    avatar: '/images/Svetozar Iliev.jpg',
    name: 'Svetozar Iliev',
    title: 'CFO',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/svetozar-iliev-cfa-9b47126/?originalSubdomain=bg' },
    ]
  },
    {
    avatar: '/images/Leon Kralj.jpeg',
    name: 'Leon Kralj',
    title: 'CTO',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/leon-kralj-8873876/?originalSubdomain=si' },
    ]
  },
      {
    avatar: '/images/Mirche Atanasovski.jpg',
    name: 'Mirche Atanasovski',
    title: 'CCO',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mirche-atanasovski-5835828/' },
    ]
  },
      {
    avatar: '/images/Ivan Zahov.jpeg',
    name: 'Ivan Zahov',
    title: 'CMO',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ivantzahov/?originalSubdomain=bg' },
    ]
  },
  
  ]
</script>

<style>

</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      雪莉智能家居
    </template>
    <template #lead>
            雪莉智能家居（深圳）有限公司（简称“雪莉智能家居”）成立于2021年3月9日，是Shelly Group集团旗下专注于物联网一体化服务的中国子公司。公司总部位于深圳，业务涵盖智能家居与建筑自动化领域的供应链管理、IT技术支持、电子商务零售与批发以及自有品牌网站运营。
    </template>

  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>


<div class="company-history-section">
  <h2 class="section-title">发展历程</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      母公司Shelly Group集团是一家欧洲国际物联网科技企业，在全球设有<strong>6家子公司</strong>，分支机构遍布德国、保加利亚、中国、斯洛文尼亚和美国，业务覆盖超过<strong>100个国家和地区</strong>。截至2016年，集团全球员工人数已超过100人，年营收达<strong>25亿元人民币</strong>。
    </p>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-year">2003</div>
      <div class="timeline-content">
        <p>Teracomm有限公司致力于移动通信创新</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2005</div>
      <div class="timeline-content">
        <p>Tera Communications运营商计费解决方案（平台与服务）</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2012</div>
      <div class="timeline-content">
        <p>成立Allterco股份有限公司，整合旗下所有业务的控股公司</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2013</div>
      <div class="timeline-content">
        <p>设立物联网（IoT）部门</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2015</div>
      <div class="timeline-content">
        <p>设立AlltercoRobotics-专为旗下品牌 Shelly 和 MyKi 设计创新产品</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2016</div>
      <div class="timeline-content">
        <p>（股票代码: Allterco A4L）在保加利亚证券交易所挂牌上市</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2018</div>
      <div class="timeline-content">
        <p>首批Shelly产品全球发售</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2019</div>
      <div class="timeline-content">
        <p>战略调整：出售欧洲电信业务，布局美国市场运营（Shelly USA）</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2021</div>
      <div class="timeline-content">
        <p>德国法兰克福二次上市，Allterco亚洲分公司雪莉智能（深圳）有限公司成立（Shelly Asia），推出首款低功耗电池供电设备</p>
      </div>
    </div>
  </div>
</div>

<div class="products-services-section">
  <h2 class="section-title">产品及服务</h2>
  
  <figure class="product-showcase">
    <img src="/images/products.webp" alt="Shelly智能家居产品系列" loading="lazy" />
  </figure>

  <div class="culture-content">
    <p class="culture-text">
      Shelly的产品组合以继电器为基础，支持远程控制照明、电器、传感器、双向电机等设备。主要产品包括能够通过手机、电脑或第三方家庭自动化系统进行远程控制和自动化的IoT和智能建筑解决方案，以及能源管理功能。同时提供云应用程序订阅服务和房地产管理活动。
    </p>
  </div>
</div>

<div class="brand-culture-section">
  <h2 class="section-title">品牌文化</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      雪莉智能家居秉承集团<strong>"创新、可靠、互联"</strong>的理念，持续推动智能家居生态系统的构建与发展，致力于成为亚太地区智能自动化领域的重要力量。
    </p>
  </div>
</div>

<style scoped>
/* Section Containers */
.company-history-section,
.products-services-section,
.brand-culture-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--vp-c-brand-1);
  position: relative;
  padding-bottom: 1rem;
}

/* .section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 11rem;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 2px;
} */

/* Intro Text */
.intro-text {
  margin-bottom: 3rem;
}

.highlight-intro {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--vp-c-text-1);
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border-left: 4px solid var(--vp-c-brand-1);
}

.highlight-intro strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* Timeline Styles - Elegant Stepped Design */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, 
    var(--vp-c-brand-1) 0%, 
    var(--vp-c-brand-2) 50%, 
    var(--vp-c-brand-1) 100%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 3rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 6px;
  width: 16px;
  height: 16px;
  background: var(--vp-c-bg);
  border: 4px solid var(--vp-c-brand-1);
  border-radius: 50%;
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-item:hover::before {
  transform: scale(1.3);
  box-shadow: 0 0 0 6px var(--vp-c-brand-soft);
}

.timeline-item.highlight::before {
  width: 20px;
  height: 20px;
  left: -8px;
  top: 4px;
  border-color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-2);
  box-shadow: 0 0 0 4px var(--vp-c-bg), 0 0 12px rgba(0, 0, 0, 0.2);
}

.timeline-item.highlight:hover::before {
  box-shadow: 0 0 0 8px var(--vp-c-brand-soft), 0 0 20px rgba(0, 0, 0, 0.3);
}

.timeline-year {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-soft);
  padding: 0.35rem 0.875rem;
  border-radius: 20px;
  margin-bottom: 0.75rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-year {
  background: var(--vp-c-brand-1);
  color: #fff;
  transform: translateX(4px);
}

.timeline-item.highlight .timeline-year {
  background: var(--vp-c-brand-2);
  color: #fff;
  font-size: 0.9375rem;
  padding: 0.4rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.timeline-content {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem 1.75rem;
  border-radius: 12px;
  border-left: 3px solid var(--vp-c-divider);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.timeline-item:hover .timeline-content {
  border-left-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  transform: translateX(8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.timeline-item.highlight .timeline-content {
  background: var(--vp-c-bg);
  border-left-color: var(--vp-c-brand-2);
  border-left-width: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.timeline-item.highlight:hover .timeline-content {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.timeline-content p {
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

/* Product Showcase */
.product-showcase {
  margin: 3rem 0;
  text-align: center;
}

.product-showcase img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
}

.product-showcase img:hover {
  transform: scale(1.02);
}

.product-showcase figcaption {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}



/* Brand Culture */
.culture-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.culture-text {
  font-size: 1.25rem;
  line-height: 1.9;
  color: var(--vp-c-text-1);
  padding: 2.5rem;
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-brand-soft) 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  position: relative;
  margin: 0;
}

.culture-text::before {
  content: '"';
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  color: var(--vp-c-brand-1);
  opacity: 0.2;
  font-family: Georgia, serif;
  line-height: 1;
}

.culture-text strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-size: 1.125em;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .timeline {
    padding: 2rem 0;
  }

  .timeline-item {
    padding-left: 2.5rem;
    margin-bottom: 1.75rem;
  }

  .timeline-content {
    padding: 1.25rem 1.5rem;
  }

  .timeline-content p {
    font-size: 1rem;
  }

  .highlight-intro {
    font-size: 1rem;
  }

  .culture-text {
    font-size: 1.0625rem;
    padding: 1.75rem;
  }

  .company-history-section,
  .products-services-section,
  .brand-culture-section {
    padding: 0 1rem;
    margin: 3rem auto;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .timeline {
    padding: 1.5rem 0;
  }

  .timeline::before {
    width: 3px;
  }

  .timeline-item {
    padding-left: 2rem;
    margin-bottom: 1.5rem;
  }

  .timeline-item::before {
    width: 12px;
    height: 12px;
    left: -5.5px;
    border-width: 3px;
  }

  .timeline-item.highlight::before {
    width: 14px;
    height: 14px;
    left: -6.5px;
  }

  .timeline-year {
    font-size: 0.8125rem;
    padding: 0.3rem 0.75rem;
  }

  .timeline-item.highlight .timeline-year {
    font-size: 0.875rem;
    padding: 0.35rem 0.875rem;
  }

  .timeline-content {
    padding: 1rem 1.25rem;
  }

  .timeline-content p {
    font-size: 0.9375rem;
  }

  .culture-text::before {
    font-size: 3rem;
    top: 0.5rem;
    left: 1rem;
  }
}
</style>
