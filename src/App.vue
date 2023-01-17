<!--
 * @Author: Dzy
 * @Date: 2023-01-16 15:20:50
 * @LastEditors: Dzy
 * @LastEditTime: 2023-01-17 17:09:05
 * @Description: 主应用
-->
<script setup lang="ts">
import { darkTheme, GlobalThemeOverrides, zhCN, dateZhCN } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FF0000',
  },
  Button: {
    textColor: '#FF0000',
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#FF0000',
      },
    },
  },
}
</script>

<template>
  <n-config-provider
    :theme="darkTheme"
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <app />
  </n-config-provider>
</template>
<!--  -->
<style scoped>
.logo {
  padding: 1.5em;
  height: 6em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
