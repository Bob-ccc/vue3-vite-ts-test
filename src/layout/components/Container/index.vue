<template>
  <div id="content" class="common-flex-1 common-flex common-flex-direction-column">
    <BreakNav />
    <div id="views" class="common-flex-1 overflow-hidden p-20px pr-10px">
      <div class="overflow-auto h-[100%]">
        <router-view v-slot="{ Component }">
          <keep-alive >
            <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"/>
          </keep-alive>
          <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreakNav from './BreakNav.vue'
</script>

<style scoped>
#views{
  border-top-left-radius: 20px;
  background-color: var(--bgColor1);
  box-sizing: border-box;
  box-shadow: 0px 0px 10px var(--shadowColor) inset;
}
</style>
