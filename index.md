---
title: 雪莉智能家居
titleTemplate: ':title'
head:
  - [
      'meta',
      {
        property: 'og:description',
        content: '雪莉智能家居（深圳）有限公司旗下品牌。母公司是德国上市公司Shelly Group',
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
      text: 产品中心
      link: /docs/
    - theme: alt
      text: 帮助文档
      link: https://github.com/honojs/hono
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
// Heavily inspired by React
// https://github.com/reactjs/react.dev/pull/6817
import { onMounted } from 'vue'
onMounted(() => {
  var preferredKawaii
  try {
    preferredKawaii = localStorage.getItem('kawaii')
  } catch (err) {}
  const urlParams = new URLSearchParams(window.location.search)
  const kawaii = urlParams.get('kawaii')
  const setKawaii = () => {
    const images = document.querySelectorAll('.VPImage.image-src')
    images.forEach((img) => {
      img.src = '/images/hono-kawaii.png'
      img.alt = 'A Kawai Version of the Hono Logo. The first "o" is replaced with a flame, with japanese characters in the bottom right, and a JSX fragment closing tag above the flame.'
      img.classList.add("kawaii")
    })
  }
  if (kawaii === 'true') {
    try {
      localStorage.setItem('kawaii', true)
    } catch (err) {}
    console.log('kawaii mode enabled. logo credits to @sawaratsuki1004 via https://github.com/SAWARATSUKI/ServiceLogos');
    setKawaii()
  } else if (kawaii === 'false') {
    try {
      localStorage.removeItem('kawaii', false)
    } catch (err) {}
    const images = document.querySelectorAll('.VPImage.image-src')
    images.forEach((img) => {
      img.src = '/images/code.webp'
      img.classList.remove("kawaii")
    })
  } else if (preferredKawaii) {
    setKawaii()
  }
})
</script>
