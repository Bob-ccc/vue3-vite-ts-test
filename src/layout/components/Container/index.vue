<template>
  <div id="container" class="common-flex-1 common-flex common-flex-direction-column">
    <BreakNav />
    <div class="views common-flex-1">
      <router-view v-slot="{ Component }">
        <keep-alive v-if="$route.meta.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component :is="Component" v-else />
      </router-view>
    </div>
  </div>
</template>

<script setup>
import BreakNav from './breakNav.vue'
</script>

<style scoped>
.views{
  padding: 20px;
  border-top-left-radius: 20px;
  background-color: var(--bgColor1);
  box-sizing: border-box;
  box-shadow: 0px 0px 10px var(--shadowColor) inset;
}
</style>
