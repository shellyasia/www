---
title: Shelly Smart Home
titleTemplate: ':title'
head:
  - [
      'meta',
      {
        property: 'og:description',
        content: 'Shelly Smart Home (Shenzhen) Co., Ltd. (abbreviated as "Shelly Smart Home") was established on March 9, 2021, and is a Chinese subsidiary of Shelly Group focused on integrated IoT services. The company is headquartered in Shenzhen, with business covering supply chain management, IT technical support, e-commerce retail and wholesale, and self-owned brand website operations in the fields of smart home and building automation',
      },
    ]
layout: home
hero:
  name: Shelly Smart Home
  text: Voice control, smarter life more convenient
  tagline: Brand under Shelly Smart Home (Shenzhen) Co., Ltd. Parent company is the German listed company Shelly Group.
  image:
    src: /images/hero.webp
    alt: 'shelly group products example'
  actions:
    - theme: brand
      text: Home Control
      link: https://control.shellyiot.cn
    - theme: alt
      text: Product Center
      link: /products/
    - theme: alt
      text: Help Documentation
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

<div class="features-section features-grid">
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.home"></div>
      <h3 class="feature-title">Smart Home Control</h3>
      <p class="feature-description">One-click control of all home devices, easily achieve intelligent management of lighting, air conditioning, security, etc.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.mobile"></div>
      <h3 class="feature-title">Mobile Remote Control</h3>
      <p class="feature-description">Control home devices remotely via mobile app anytime, anywhere, enjoy convenient life.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.security"></div>
      <h3 class="feature-title">Security Guardian</h3>
      <p class="feature-description">Real-time monitoring and alerts, ensure family safety, peace of mind.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" v-html="icons.automation"></div>
      <h3 class="feature-title">Smart Linkage</h3>
      <p class="feature-description">Multi-device smart linkage, automated scene switching, enhance home experience.</p>
    </div>
</div>


<div class="team-section">
  <div class="team-header">
    <h2 class="team-title">
      <span class="title-highlight">Shelly</span> Smart Home
    </h2>
    <p class="team-lead">
      Shelly Smart Home (Shenzhen) Co., Ltd. (abbreviated as "Shelly Smart Home") was established on <strong>March 9, 2021</strong>, and is a Chinese subsidiary of <strong>Shelly Group</strong> focused on integrated IoT services. The company is headquartered in Shenzhen, with business covering supply chain management, IT technical support, e-commerce retail and wholesale, and self-owned brand website operations in the fields of smart home and building automation.
    </p>
  </div>
  
  <div class="leadership-title">
    <span class="leadership-line"></span>
    <h3>Core Leadership Team</h3>
    <span class="leadership-line"></span>
  </div>
  
  <div class="team-members-grid">
    <div v-for="(member, index) in members" :key="member.name" class="member-card" :style="{ animationDelay: `${index * 0.15}s` }">
      <div class="member-avatar-wrapper">
        <div class="avatar-glow"></div>
        <img :src="member.avatar" :alt="member.name" class="member-avatar" />
        <div class="avatar-ring"></div>
      </div>
      <div class="member-info">
        <h4 class="member-name">{{ member.name }}</h4>
        <span class="member-title">{{ member.title }}</span>
      </div>
      <div class="member-decoration">
        <svg viewBox="0 0 100 100" class="decoration-svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="0.3" opacity="0.15"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<div class="company-history-section">
  <h2 class="section-title">Development History</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      The parent company Shelly Group is a European international IoT technology enterprise with <strong>6 subsidiaries</strong> worldwide, branches in Germany, Bulgaria, China, Slovenia and the United States, business covering more than <strong>100 countries and regions</strong>. As of 2016, the group has more than 100 employees worldwide, with annual revenue reaching <strong>2.5 billion RMB</strong>.
    </p>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-year">2003</div>
      <div class="timeline-content">
        <p>Teracomm Ltd. dedicated to mobile communication innovation</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2005</div>
      <div class="timeline-content">
        <p>Tera Communications operator billing solutions (platform and services)</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2012</div>
      <div class="timeline-content">
        <p>Established Allterco JSC, a holding company integrating all its businesses</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2013</div>
      <div class="timeline-content">
        <p>Established IoT department</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2015</div>
      <div class="timeline-content">
        <p>Established AlltercoRobotics - designing innovative products for its brands Shelly and MyKi</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2016</div>
      <div class="timeline-content">
        <p>(Stock code: Allterco A4L) listed on the Bulgarian Stock Exchange</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2018</div>
      <div class="timeline-content">
        <p>First batch of Shelly products launched globally</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2019</div>
      <div class="timeline-content">
        <p>Strategic adjustment: Sold European telecom business, set up US market operations (Shelly USA)</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2021</div>
      <div class="timeline-content">
        <p>Second listing in Frankfurt, Germany, establishment of Allterco Asia subsidiary Shelly Smart (Shenzhen) Co., Ltd. (Shelly Asia), launch of first low-power battery-powered devices</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2023</div>
      <div class="timeline-content">
        <p>Released Shelly Pro series, entering energy management and professional markets</p>
      </div>
    </div>
       <div class="timeline-item">
      <div class="timeline-year">2024</div>
      <div class="timeline-content">
        <p>Company officially renamed to Shelly Group AD, highlighting Shelly brand leadership</p>
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
      Shelly's product portfolio is based on relays, supporting remote control of lighting, appliances, sensors, bidirectional motors and other devices. Main products include IoT and smart building solutions that can be remotely controlled and automated via mobile phones, computers or third-party home automation systems, as well as energy management functions. Also provides cloud application subscription services and real estate management activities.
    </p>
  </div>
</div>

<div class="brand-culture-section">
  <h2 class="section-title">Brand Culture</h2>
  
  <div class="culture-content">
    <p class="culture-text">
      Shelly Smart Home adheres to the group's philosophy of <strong>"Innovation, Reliability, Connectivity"</strong>, continuously promoting the construction and development of the smart home ecosystem, committed to becoming an important force in the field of intelligent automation in the Asia-Pacific region.
    </p>
  </div>
</div>

<style scoped>
/* Team Section - Enhanced */
.team-section {
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 2rem;
}

.team-header {
  text-align: center;
  margin-bottom: 4rem;
}

.team-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.title-highlight {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.team-lead {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.9;
  color: var(--vp-c-text-2);
  animation: fadeInUp 0.8s ease-out 0.3s both;
  position: relative;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(36, 145, 255, 0.03) 0%, transparent 50%, rgba(36, 145, 255, 0.03) 100%);
  border-radius: 16px;
  border: 1px solid transparent;
  background-clip: padding-box;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-lead::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(36, 145, 255, 0.2), transparent 30%, transparent 70%, rgba(36, 145, 255, 0.2));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.team-lead:hover::before {
  opacity: 1;
}

.team-lead:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(36, 145, 255, 0.1);
  background: linear-gradient(135deg, rgba(36, 145, 255, 0.06) 0%, transparent 50%, rgba(36, 145, 255, 0.06) 100%);
}

.team-lead strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
}

.team-lead strong::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-lead:hover strong::after {
  transform: scaleX(1);
  transform-origin: left;
}

.leadership-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

.leadership-title h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  margin: 0;
}

.leadership-line {
  flex: 0 1 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
  border-radius: 1px;
}

.team-members-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.member-card {
  position: relative;
  background: var(--vp-c-bg-soft);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;
}


.member-card:hover {
  transform: translateY(-12px);
  box-shadow: 
    0 24px 48px rgba(36, 145, 255, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-soft);
}



@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.member-avatar-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
}

.member-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.avatar-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--vp-c-brand-1) 0%, transparent 70%);
  opacity: 0;
  transition: all 0.4s ease;
  border-radius: 50%;
  filter: blur(20px);
  z-index: 1;
}

.avatar-ring {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 2px dashed var(--vp-c-brand-soft);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s ease;
  animation: none;
}

.member-card:hover .avatar-glow {
  opacity: 0.4;
  width: 140%;
  height: 140%;
}

.member-card:hover .avatar-ring {
  opacity: 1;
  animation: ringRotate 8s linear infinite;
}

.member-card:hover .member-avatar {
  transform: scale(1.05);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 32px rgba(36, 145, 255, 0.25);
}

@keyframes ringRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.member-info {
  position: relative;
  z-index: 2;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem;
  transition: color 0.3s ease;
}

.member-card:hover .member-name {
  color: var(--vp-c-brand-1);
}

.member-title {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  padding: 0.35rem 1rem;
  border-radius: 20px;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(36, 145, 255, 0.3);
  transition: all 0.3s ease;
}

.member-card:hover .member-title {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(36, 145, 255, 0.4);
}

.member-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.decoration-svg {
  width: 100%;
  height: 100%;
  color: var(--vp-c-brand-1);
  animation: decorationSpin 20s linear infinite;
}

.member-card:hover .member-decoration {
  opacity: 1;
}

@keyframes decorationSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Team Section Responsive */
@media (max-width: 768px) {
  .team-section {
    margin: 3rem auto;
    padding: 0 1rem;
  }

  .team-title {
    font-size: 2.25rem;
  }

  .team-lead {
    font-size: 1rem;
  }

  .team-members-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .member-card {
    padding: 2rem 1.5rem;
  }

  .member-avatar-wrapper {
    width: 100px;
    height: 100px;
  }

  .leadership-line {
    flex: 0 1 60px;
  }
}

@media (max-width: 540px) {
  .team-members-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }

  .team-title {
    font-size: 1.875rem;
  }

  .member-card {
    padding: 2rem 1.25rem;
  }

  .leadership-title h3 {
    font-size: 1.125rem;
  }

  .leadership-line {
    flex: 0 1 40px;
  }
}

/* Dark mode enhancements for team section */
.dark .member-card {
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, rgba(36, 145, 255, 0.03) 100%);
}

.dark .member-card:hover {
  box-shadow: 
    0 24px 48px rgba(36, 145, 255, 0.2),
    0 12px 24px rgba(0, 0, 0, 0.2);
}

.dark .avatar-glow {
  opacity: 0;
}

.dark .member-card:hover .avatar-glow {
  opacity: 0.3;
}

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
/* 
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
} */

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-soft);
  background: var(--vp-c-bg);
}
/* 
.feature-card:hover::before {
  opacity: 1;
} */

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
  width: 3px;
  background: linear-gradient(to bottom, 
    var(--vp-c-brand-1) 0%, 
    var(--vp-c-brand-2) 50%, 
    var(--vp-c-brand-1) 100%);
  border-radius: 2px;
  opacity: 0.6;
}

.timeline-item {
  position: relative;
  margin-bottom: 1.75rem;
  padding-left: 2.5rem;
  opacity: 0.85;
  transition: opacity 0.3s ease;
}

.timeline-item:hover {
  opacity: 1;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 6px;
  width: 17px;
  height: 17px;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  border-radius: 50%;
  z-index: 2;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 0 0 3px var(--vp-c-bg),
    0 0 0 5px var(--vp-c-brand-soft),
    0 3px 10px rgba(36, 145, 255, 0.3);
  animation: highlightPulse 3s ease-in-out infinite;
}

/* Dark mode for timeline */
.dark .timeline::before {
  opacity: 0.5;
}

.dark .timeline-item {
  opacity: 0.8;
}

.dark .timeline-item:hover {
  opacity: 1;
}

.dark .timeline-item::before {
  box-shadow: 
    0 0 0 3px var(--vp-c-bg),
    0 0 0 5px rgba(36, 145, 255, 0.25),
    0 3px 14px rgba(36, 145, 255, 0.45);
}

@keyframes highlightPulse {
  0%, 100% {
    box-shadow: 
      0 0 0 3px var(--vp-c-bg),
      0 0 0 5px var(--vp-c-brand-soft),
      0 3px 10px rgba(36, 145, 255, 0.3);
  }
  50% {
    box-shadow: 
      0 0 0 3px var(--vp-c-bg),
      0 0 0 7px var(--vp-c-brand-soft),
      0 3px 16px rgba(36, 145, 255, 0.45);
  }
}

.timeline-item:hover::before {
  animation: none;
  transform: scale(1.3);
  box-shadow: 
    0 0 0 3px var(--vp-c-bg),
    0 0 0 7px var(--vp-c-brand-soft),
    0 6px 20px rgba(36, 145, 255, 0.45);
}

.timeline-year {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: transparent;
  padding: 0.25rem 0;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
}

.timeline-year::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 1px;
  transition: width 0.3s ease;
}

.timeline-item .timeline-year {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  color: #fff;
  font-size: 0.875rem;
  padding: 0.45rem 1.1rem;
  box-shadow: 0 3px 12px rgba(36, 145, 255, 0.35);
  border-radius: 20px;
  font-weight: 700;
  letter-spacing: 0.75px;
}

.timeline-item .timeline-year::after {
  display: none;
}

.timeline-item:hover .timeline-year {
  transform: translateX(4px);
  box-shadow: 0 5px 18px rgba(36, 145, 255, 0.45);
}

.timeline-content {
  background: var(--vp-c-bg-soft);
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.timeline-item .timeline-content {
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-brand-soft) 100%);
  border: none;
  border-radius: 12px;
  position: relative;
  padding-left: 1.75rem;
  box-shadow: 
    0 3px 16px rgba(36, 145, 255, 0.12),
    inset 0 0 0 1px rgba(36, 145, 255, 0.1);
}

.timeline-item .timeline-content p {
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.timeline-item:hover .timeline-content {
  transform: translateX(8px);
  box-shadow: 
    0 8px 28px rgba(36, 145, 255, 0.2),
    inset 0 0 0 1px rgba(36, 145, 255, 0.2);
}

/* Dark mode enhancements */
.dark .timeline-item .timeline-year {
  box-shadow: 0 3px 14px rgba(36, 145, 255, 0.45);
}

.dark .timeline-item .timeline-content {
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, rgba(36, 145, 255, 0.08) 100%);
  box-shadow: 
    0 3px 18px rgba(36, 145, 255, 0.15),
    inset 0 0 0 1px rgba(36, 145, 255, 0.15);
}

.dark .timeline-item:hover .timeline-content {
  box-shadow: 
    0 10px 32px rgba(36, 145, 255, 0.28),
    inset 0 0 0 1px rgba(36, 145, 255, 0.3);
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
  border: 1px solid transparent;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.culture-text::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(36, 145, 255, 0.3), transparent 40%, transparent 60%, rgba(36, 145, 255, 0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.culture-text:hover::after {
  opacity: 1;
}

.culture-text:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 
    0 20px 40px rgba(36, 145, 255, 0.12),
    0 8px 16px rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, rgba(36, 145, 255, 0.12) 100%);
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
  transition: all 0.4s ease;
}

.culture-text:hover::before {
  opacity: 0.4;
  transform: scale(1.1) rotate(-5deg);
  color: var(--vp-c-brand-2);
}

.culture-text strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-size: 1.125em;
  position: relative;
  transition: all 0.3s ease;
}

.culture-text strong::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.culture-text:hover strong::after {
  transform: scaleX(1);
  transform-origin: left;
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
    width: 2px;
  }

  .timeline-item {
    padding-left: 1.75rem;
    margin-bottom: 1.25rem;
  }

  .timeline-item::before {
    width: 14px;
    height: 14px;
    left: -6.5px;
    top: 5px;
  }

  .timeline-year {
    font-size: 0.75rem;
    margin-bottom: 0.35rem;
  }

  .timeline-item .timeline-year {
    font-size: 0.75rem;
    padding: 0.35rem 0.85rem;
  }

  .timeline-content {
    padding: 0.875rem 1rem;
    border-radius: 8px;
  }

  .timeline-item .timeline-content {
    padding-left: 1.25rem;
  }

  .timeline-content p {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .culture-text::before {
    font-size: 3rem;
    top: 0.5rem;
    left: 1rem;
  }
  
  @keyframes highlightPulse {
    0%, 100% {
      box-shadow: 
        0 0 0 2px var(--vp-c-bg),
        0 0 0 4px var(--vp-c-brand-soft),
        0 2px 8px rgba(36, 145, 255, 0.3);
    }
    50% {
      box-shadow: 
        0 0 0 2px var(--vp-c-bg),
        0 0 0 5px var(--vp-c-brand-soft),
        0 2px 12px rgba(36, 145, 255, 0.4);
    }
  }
}
</style>