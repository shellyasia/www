---
title: Shelly Smart Home
titleTemplate: ':title'
head:
  - [
      'meta',
      {
        property: 'og:description',
        content: 'Shelly Smart Home (Shenzhen) Co., Ltd. (referred to as "Shelly Smart Home") was established on March 9, 2021, and is a Chinese subsidiary of Shelly Group focused on providing comprehensive IoT services. Headquartered in Shenzhen, the company covers supply chain management, IT technical support, e-commerce retail and wholesale, and self-branded website operations in the smart home and building automation sectors.',
      },
    ]
layout: home
hero:
  name: Shelly Smart Home
  text: One Call Away, Smarter Home Living
  tagline: A brand under Shelly Smart Home (Shenzhen) Co., Ltd. The parent company is German-listed Shelly Group.
  image:
    src: /images/hero.webp
    alt: 'shelly group products example'
  actions:
    - theme: brand
      text: Home Control
      link: https://control.shellyiot.cn
    - theme: alt
      text: Products
      link: /products/
    - theme: alt
      text: Documentation
      link: /docs/
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const icons = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><circle cx="12" cy="8" r="1" fill="currentColor"/></svg>`,
  mobile: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/><path d="M9 6h6"/><path d="M9 10h6"/><circle cx="12" cy="13" r="2" stroke-dasharray="2 1"/></svg>`,
  security: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/><line x1="12" y1="17" x2="12" y2="19"/></svg>`,
  automation: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>`
}

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
  }
  
  ]
</script>

<style>

</style>



<div class="features-section features-grid">
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.home"></div>
      <h3 class="feature-title">Smart Home Control</h3>
      <p class="feature-description">Control all home devices with one click, easily manage lighting, air conditioning, security and more intelligently.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.mobile"></div>
      <h3 class="feature-title">Remote Mobile Control</h3>
      <p class="feature-description">Control your home devices anytime, anywhere through mobile app for convenient living.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.security"></div>
      <h3 class="feature-title">Security Protection</h3>
      <p class="feature-description">Real-time monitoring and alerts protect your home safety with peace of mind.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.automation"></div>
      <h3 class="feature-title">Smart Automation</h3>
      <p class="feature-description">Multi-device smart linkage with automatic scenario switching for enhanced living experience.</p>
    </div>
</div>


<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Shelly Smart Home
    </template>
    <template #lead>
      Shelly Smart Home (Shenzhen) Co., Ltd. (referred to as "Shelly Smart Home") was established on March 9, 2021, and is a Chinese subsidiary of Shelly Group focused on providing comprehensive IoT services. Headquartered in Shenzhen, the company covers supply chain management, IT technical support, e-commerce retail and wholesale, and self-branded website operations in the smart home and building automation sectors.
    </template>

  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>

<div class="company-history-section">
  <h2 class="section-title">Development History</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      The parent company Shelly Group is a European international IoT technology enterprise with <strong>6 subsidiaries</strong> worldwide, with branches in Germany, Bulgaria, China, Slovenia, and the United States, serving over <strong>100 countries and regions</strong>. As of 2016, the group has over 100 employees globally, with annual revenue reaching <strong>2.5 billion RMB</strong>.
    </p>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-year">2003</div>
      <div class="timeline-content">
        <p>Teracomm Ltd. focuses on mobile communications innovation</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2005</div>
      <div class="timeline-content">
        <p>Tera Communications operates carrier billing solutions (platform and services)</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2012</div>
      <div class="timeline-content">
        <p>Allterco JSCo. established as a holding company integrating all business operations</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2013</div>
      <div class="timeline-content">
        <p>Internet of Things (IoT) department established</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2015</div>
      <div class="timeline-content">
        <p>AlltercoRobotics established - designing innovative products for Shelly and MyKi brands</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2016</div>
      <div class="timeline-content">
        <p>(Stock Code: Allterco A4L) Listed on Bulgarian Stock Exchange</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2018</div>
      <div class="timeline-content">
        <p>First Shelly products launched for global distribution</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2019</div>
      <div class="timeline-content">
        <p>Strategic shift: Divested European telecom business, expanded US market operations (Shelly USA)</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2021</div>
      <div class="timeline-content">
        <p>Secondary listing in Frankfurt, Germany. Allterco Asia subsidiary Shelly Asia (Shenzhen) established, launched first low-power battery-powered devices</p>
      </div>
    </div>
    <div class="timeline-item highlight">
      <div class="timeline-year">2023</div>
      <div class="timeline-content">
        <p>Released Shelly Pro series, entering energy management and professional markets</p>
      </div>
    </div>
       <div class="timeline-item highlight">
      <div class="timeline-year">2024</div>
      <div class="timeline-content">
        <p>Company officially rebranded as Shelly Group AD, emphasizing Shelly brand dominance</p>
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
      Shelly's product portfolio is built on relays, supporting remote control of lighting, appliances, sensors, bidirectional motors, and more. Main products include IoT and smart building solutions that can be remotely controlled and automated through mobile phones, computers, or third-party home automation systems, as well as energy management capabilities. Additionally provides cloud application subscription services and property management activities.
    </p>
  </div>
</div>

<div class="brand-culture-section">
  <h2 class="section-title">Brand Culture</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      Shelly Smart Home adheres to the group's philosophy of <strong>"Innovation, Reliability, and Connectivity"</strong>, continuously promoting the construction and development of smart home ecosystems, and is committed to becoming an important force in smart automation across the Asia-Pacific region.
    </p>
  </div>
</div>

<style scoped>
/* Features Section */
.features-section {
  max-width: 1200px;
  margin: 4rem auto 0 auto;
  padding: 0 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--vp-c-divider);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-soft);
  background: var(--vp-c-bg);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, transparent 100%);
  border-radius: 20px;
  color: var(--vp-c-brand-1);
  transition: all 0.4s ease;
}

.feature-card:hover .feature-icon {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  color: #fff;
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 24px rgba(36, 145, 255, 0.3);
}

.feature-icon svg {
  width: 48px;
  height: 48px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.feature-card:hover .feature-title {
  color: var(--vp-c-brand-1);
}

.feature-description {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Responsive Design for Features */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .features-section {
    padding: 0 1rem;
    margin: 3rem auto;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
    border-radius: 16px;
  }
  
  .feature-icon svg {
    width: 40px;
    height: 40px;
  }
  
  .feature-title {
    font-size: 1.125rem;
  }
  
  .feature-description {
    font-size: 0.875rem;
  }
}

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
