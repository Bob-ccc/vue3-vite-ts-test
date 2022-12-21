<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { tabList } from '@/router/routerConfig'

const route = useRouter();
const navState = ref(true);

// 路由列表
const tablist = computed(() => tabList);

const change = () => {
  navState.value = !navState.value;
};

// 路由跳转
const routeTo = (item:any) => {
  route.push({name:item.name});
};

</script>

<template>
  <div id="tab-list" class="mt-40px h-100% flex flex-col select-none" :class="navState ? 'open' : 'close'">
    <div class="list-items">
      <div v-for="item,index in tablist" :key="index" class="items px-15px text-18px"
        :class="{ active: $route.path === '/' + item.path }" @click="routeTo(item)">
        <span class="absolute w-[calc(100%-30px)] h-[100%] overflow-hidden flex items-center">
          <AntIcon :name="item.meta.iconName"/>
          <span class="ml-10px">{{ item.meta.title }}</span>
        </span>
      </div>
    </div>
    <div @click="change" class="mx-20px p-5px whitespace-nowrap text-16px text-center changeBtn">
      {{ navState ? "<收起<" : "展开" }} 
    </div>
  </div>
</template>

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
    border: 1px solid var(--bgColor1);
    border-radius: 100px;
    cursor: pointer;
  }

  .list-items {
    padding: 20px;

    .items {
      margin-bottom: 20px;
      cursor: pointer;
      border-radius: 10px;
      background-color: var(--bgColor);
      white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
      width: 100%;
      height: 60px;
      line-height: 52px;
      position: relative;
      border: 4px solid var(--bgColor1);
      transition: all .3s;
      &:not(.active):hover{
        background-color: var(--bgColor1);
        // &::before {
          // width: 100%;
          // opacity: .5;
        // }
      }
      &::before {
        content: "";
        display: block;
        position: absolute;
        background-color: var(--bgColor1);
        left: 0;
        top: 0;
        width: 0px;
        height: 100%;
        transition: all 1s;
      }
    }

    .active {
      // color: blue;
      &::before {
        width: 100%;
      }
    }
  }
}
</style>
