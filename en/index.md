---
title: Shelly Smart Home

titleTemplate: ':title'
head:
  - [
      'meta',
      {
        property: 'og:description',
        content: 'Shelly Smart Home (Shenzhen) Co., Ltd. is a subsidiary brand. The parent company is the German listed company Shelly Group',
      },
    ]
layout: home
hero:
  name: Shelly Smart Home
  text: Control with a call, smarter living made easier
  tagline: Shelly Smart Home (Shenzhen) Co., Ltd. is a subsidiary brand. The parent company is the German listed company Shelly Group。
  image:
    src: /images/hero.webp
    alt: 'shelly group products example'
  actions:
    - theme: brand
      text: Home Control
      link: https://control.shelly.cloud
    - theme: alt
      text: Product Center
      link: /products/
    - theme: alt
      text: Help Documentation
      link: /docs/
features:
  - icon: 🏠
    title: Smart Home Control
    details: One-click control of all devices in the house, easily achieving intelligent management of lighting, air conditioning, security, etc.
  - icon: 📱
    title: Mobile Remote Control
    details: Control home devices remotely through the mobile app anytime, anywhere, enjoying a convenient life.
  - icon: 🔐
    title: Safety Protection
    details: Real-time monitoring and alerts to ensure home safety, providing peace of mind.
  - icon: 🤖
    title: Intelligent Interaction
    details: Multi-device intelligent interaction, automated scene switching, enhancing home experience.
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
      // { icon: 'linkedin', link: 'https://www.linkedin.com/in/allterco/' }
    ]
  },
  {
    avatar: '/images/Wolfgang Kirsch.jpeg',
    name: 'Wolfgang Kirsch',
    title: 'Co-CEO',
    links: [
      // { icon: 'linkedin', link: 'https://www.linkedin.com/in/wolfgang-kirsch/?originalSubdomain=de' },
    ]
  },  

    {
    avatar: '/images/Leon Kralj.jpeg',
    name: 'Leon Kralj',
    title: 'CTO',
    links: [
      // { icon: 'linkedin', link: 'https://www.linkedin.com/in/leon-kralj-8873876/?originalSubdomain=si' },
    ]
  },
    
  ]
</script>

<style>

</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Shelly Smart Home
    </template>
    <template #lead>
            Shelly Smart Home (Shenzhen) Co., Ltd. (hereinafter referred to as "Shelly Smart Home") was established on March 9, 2021, and is a Chinese subsidiary under the Shelly Group, focusing on integrated IoT services. The company is headquartered in Shenzhen, with business covering supply chain management, IT technical support, e-commerce retail and wholesale, and proprietary brand website operations in the smart home and building automation fields.
    </template>

  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>

<div class="company-history-section">
  <h2 class="section-title">Development History</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      The parent company Shelly Group is a European international IoT technology enterprise, with <strong>6 subsidiaries</strong> worldwide and branches in Germany, Bulgaria, China, Slovenia, and the United States, covering more than <strong>100 countries and regions</strong>. As of 2016, the group has more than 100 employees worldwide, with an annual revenue of <strong>2.5 billion RMB</strong>.
    </p>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-year">2003</div>
      <div class="timeline-content">
        <p>Teracomm Ltd. was committed to mobile communication innovation</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2005</div>
      <div class="timeline-content">
        <p>Tera Communications operated billing solutions (platform and services) for operators</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2012</div>
      <div class="timeline-content">
        <p>Allterco Holdings was established as the holding company integrating all its businesses</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2013</div>
      <div class="timeline-content">
        <p>The Internet of Things (IoT) department was established</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2015</div>
      <div class="timeline-content">
        <p>Allterco Robotics was established to design innovative products for its brands Shelly and MyKi</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2016</div>
      <div class="timeline-content">
        <p>(Stock Code: Allterco A4L) Listed on the Bulgarian Stock Exchange</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2018</div>
      <div class="timeline-content">
        <p>The first batch of Shelly products was launched globally</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2019</div>
      <div class="timeline-content">
        <p>Strategic adjustment: sold the European telecommunications business and laid out operations in the U.S. market (Shelly USA)</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2021</div>
      <div class="timeline-content">
        <p>Listed for the second time in Frankfurt, Germany, Shelly Asia (Shenzhen) Co., Ltd. was established, launching the first low-power battery-powered device</p>
      </div>
    </div>
  </div>
</div>

<div class="products-services-section">
  <h2 class="section-title">Products and Services</h2>
  
  <figure class="product-showcase">
    <img src="/images/products.webp" alt="Shelly Smart Home Product Series" loading="lazy" />
  </figure>

  <div class="culture-content">
    <p class="culture-text">
      Shelly's product portfolio is based on relays that support remote control of lighting, appliances, sensors, and bidirectional motors. The main products include IoT and smart building solutions that can be remotely controlled and automated via mobile phones, computers, or third-party home automation systems, as well as energy management functions. Cloud application subscription services and real estate management activities are also provided.
    </p>
  </div>
</div>

<div class="brand-culture-section">
  <h2 class="section-title">Brand Culture</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      Shelly Smart Home upholds the group's philosophy of <strong>"Innovation, Reliability, and Connectivity"</strong>, continuously promoting the construction and development of the smart home ecosystem, and is committed to becoming an important force in the field of intelligent automation in the Asia-Pacific region.
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
