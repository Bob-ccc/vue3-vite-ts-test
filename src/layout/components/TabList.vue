<template>
  <div
    id="tab-list"
    class="
      common-height-100p
      common-fle x
      common-flex-direction-column
      common-flex-justify-between
    "
    :class="navState ? 'open' : 'close'"
  >
    <div @click="change" class="common-font-size-24 changeBtn">
      {{ navState ? "<<收起<<" : ">>展开>>" }}
    </div>
    <div class="list-items">
      <div
        v-for="item in tablist"
        :key="item.name"
        class="items common-font-size-24"
        :class="{ active: $route.path === item.path }"
        @click="routeTo(item)"
      >
        {{ item.meta.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();

const navState = ref(true);

const route = useRouter();
// 路由列表
const tablist = computed(() => route.getRoutes());


const change = () => {
  navState.value = !navState.value;
  store.dispatch('setNavState', navState.value)
};

// 路由跳转
const routeTo = (item) => {
  route.push(item.path);
};

onMounted(() => {
  navState.value = store.getters.navState
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
  .changeBtn{
    height: 50px;
  }
  .list-items {
    .items {
      text-align: center;
      padding: 10px;
      cursor: pointer;
    }
    .active {
      color: blue;
    }
  }
}
</style>
