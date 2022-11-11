<template>
  <div id="tab-list" class="mt-40px h-100% flex flex-col select-none" :class="navState ? 'open' : 'close'">
    <div class="list-items">
      <div v-for="item in tablist" :key="item.name" class="items common-font-size-24"
        :class="{ active: $route.path === '/' + item.path }" @click="routeTo(item)">
        {{ item.meta.title }}
      </div>
    </div>
    <div @click="change" class="common-font-size-24 changeBtn">
      {{ navState ? "<收起<" : ">展开>" }} </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
// import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { tabList } from '@/router/routerConfig'
// const store = useStore();

const navState = ref(true);

const route = useRouter();
// 路由列表
const tablist = computed(() => tabList);


const change = () => {
  navState.value = !navState.value;
  // store.dispatch('setNavState', navState.value)
};

// 路由跳转
const routeTo = (item) => {
  route.push({name:item.name});
};

onMounted(() => {
  // navState.value = store.getters.navState
});
</script>

<style lang="scss" scoped>
#tab-list {
  transition: width 0.5s;

  &.open {
    width: 200px;
  }

  &.close {
    width: 100px;
  }

  .changeBtn {
    width: 100px;
    margin-top: 200px;
    border: 1px solid var(--bgColor1);
    border-radius: 100px;
    padding: 0 10px;
    cursor: pointer;
  }

  .list-items {
    padding: 20px;

    .items {
      padding: 15px;
      margin-bottom: 20px;
      cursor: pointer;
      border-radius: 10px;
      background-color: var(--bgColor);
      white-space: nowrap;
      overflow: hidden;
    }

    .active {
      color: blue;
      background-color: var(--bgColor1);
    }
  }
}
</style>
