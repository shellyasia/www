# Shelly IoT 主题展示

这是一个展示基于 Shelly IoT 设计风格的 VitePress 主题的页面。

## 设计特点

我们的主题采用了 Shelly IoT 控制面板的设计语言，具有以下特点：

### 🎨 色彩系统

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number" style="color: #2491ff;">#2491ff</div>
    <div class="stat-label">主色调</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" style="color: #151617;">#151617</div>
    <div class="stat-label">深色背景</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" style="color: #66d092;">#66d092</div>
    <div class="stat-label">成功色</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" style="color: #ff4a50;">#ff4a50</div>
    <div class="stat-label">警告色</div>
  </div>
</div>

### 🔧 组件展示

#### 状态指示器

<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <span class="shelly-status online">在线</span>
  <span class="shelly-status offline">离线</span>
  <span class="shelly-status warning">警告</span>
</div>

#### 标签组件

<div style="display: flex; gap: 0.5rem; margin: 1rem 0; flex-wrap: wrap;">
  <span class="shelly-tag primary">Primary</span>
  <span class="shelly-tag success">Success</span>
  <span class="shelly-tag warning">Warning</span>
  <span class="shelly-tag danger">Danger</span>
</div>

#### 按钮组件

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
  <button class="shelly-btn">主要按钮</button>
  <button class="shelly-btn secondary">次要按钮</button>
</div>

### 📱 设备卡片

<div class="device-card shelly-fade-in">
  <h3>智能开关 - 办公室</h3>
  <p>Shelly 1PM Plus - 功率监控智能开关</p>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
    <span class="shelly-status online">在线</span>
    <span class="shelly-tag primary">0W</span>
  </div>
</div>

<div class="device-card shelly-fade-in" style="animation-delay: 0.2s;">
  <h3>环境传感器 - 客厅</h3>
  <p>Shelly H&T - 温湿度传感器</p>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
    <span class="shelly-status online">在线</span>
    <div>
      <span class="shelly-tag success">23°C</span>
      <span class="shelly-tag primary">65%</span>
    </div>
  </div>
</div>

### 🎭 Shelly 风格卡片

<div class="shelly-card">
  <h3>🔌 智能插座监控</h3>
  <p>实时监控家中所有 Shelly 智能插座的用电情况，支持远程控制和定时开关。</p>

<div class="shelly-gradient-primary" style="height: 4px; border-radius: 2px; margin: 1rem 0;"></div>

<div style="display: flex; justify-content: space-between; align-items: center;">
    <span>当前功率：<strong>156W</strong></span>
    <button class="shelly-btn">查看详情</button>
  </div>
</div>

<div class="shelly-card">
  <h3>🌡️ 环境监控</h3>
  <p>通过 Shelly 温湿度传感器网络，实时监控各个房间的环境状况。</p>

<div class="shelly-gradient-success" style="height: 4px; border-radius: 2px; margin: 1rem 0;"></div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <div style="text-align: center;">
      <div style="font-size: 1.5rem; font-weight: bold; color: var(--vp-c-shelly-primary);">23°C</div>
      <div style="font-size: 0.875rem; color: var(--vp-c-text-2);">客厅温度</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 1.5rem; font-weight: bold; color: var(--vp-c-shelly-success);">65%</div>
      <div style="font-size: 0.875rem; color: var(--vp-c-text-2);">湿度</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 1.5rem; font-weight: bold; color: var(--vp-c-shelly-warning);">24°C</div>
      <div style="font-size: 0.875rem; color: var(--vp-c-text-2);">卧室温度</div>
    </div>
  </div>
</div>

### 🚀 特殊效果

#### 渐变背景

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div class="shelly-gradient-primary" style="height: 100px; border-radius: var(--vp-radius-big); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
    主渐变
  </div>
  <div class="shelly-gradient-secondary" style="height: 100px; border-radius: var(--vp-radius-big); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
    次渐变
  </div>
  <div class="shelly-gradient-success" style="height: 100px; border-radius: var(--vp-radius-big); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
    成功渐变
  </div>
</div>

#### 模糊背景效果

<div class="shelly-blur" style="padding: 2rem; border-radius: var(--vp-radius-big); margin: 1rem 0; position: relative;">
  <h4>毛玻璃效果</h4>
  <p>这是一个具有背景模糊效果的卡片，模拟了 Shelly 控制面板中的毛玻璃设计。</p>
</div>

## 代码展示

以下是一些使用新主题的代码示例：

```typescript
// Shelly 设备控制示例
interface ShellyDevice {
  id: string;
  name: string;
  type: "switch" | "sensor" | "dimmer";
  status: "online" | "offline";
  power?: number;
  temperature?: number;
  humidity?: number;
}

class ShellyController {
  private devices: Map<string, ShellyDevice> = new Map();

  async getDevice(id: string): Promise<ShellyDevice | null> {
    return this.devices.get(id) || null;
  }

  async toggleSwitch(id: string): Promise<boolean> {
    const device = await this.getDevice(id);
    if (device && device.type === "switch") {
      // 切换开关状态
      return true;
    }
    return false;
  }
}
```

```json
{
  "device": {
    "id": "shellyplus1pm-441793d69718",
    "name": "智能开关 - 办公室",
    "type": "switch",
    "status": "online",
    "power": 156.5,
    "voltage": 230.2,
    "current": 0.68
  }
}
```

::: tip 提示 这个主题完全基于 Shelly IoT
控制面板的设计风格，提供了现代化的用户界面和丰富的交互效果。 :::

::: warning 注意 在使用深色主题时，某些颜色会自动调整以确保最佳的可读性。 :::

::: danger 重要 请确保在生产环境中测试所有组件的兼容性。 :::

## 总结

这个基于 Shelly IoT 设计风格的主题提供了：

- 🎨 现代化的色彩系统
- 📱 响应式设计
- 🌙 完整的深色主题支持
- ✨ 丰富的交互效果
- 🔧 实用的组件库
- 🚀 流畅的动画效果

主题完美适配了 IoT 设备管理和技术文档的需求。
