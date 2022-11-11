<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { SkinFilled } from '@ant-design/icons-vue';
const emit = defineEmits(["change"]);
const props = defineProps({
  theme: <any>Array
});

const themeActive: any = ref(null)

const change = (item: any) => {
  console.log(item);

  themeActive.value = item.key
  emit('change', item)
}

const clicked = ref(false)

const handleClickChange = (visible: boolean) => {
  clicked.value = visible;
}

const hide = () => {
  clicked.value = false;
};

onMounted(() => {
  const item: any = props.theme && props.theme.find((i: any) => i.key === 'normal')
  themeActive.value = item.key
  change(item)
})
</script>

<template>
  <div class="flex">
    <a-popover title="皮肤" trigger="click" :visible="clicked" @visibleChange="handleClickChange">
      <template #content>
        <div class="flex">
          <div v-for="item in theme" :key="item.key"
            class="w-50px h-50px text-center pt-20px mr-5px rounded-[10px] cursor-pointer theme-card hover:border-light-blue-600"
            :class="{ 'border-blue-300': themeActive === item.key }" @click="change(item)"
            :style="{background:item.bgc,color:item.color}">
            {{ item.name }}
          </div>
          <!-- <a @click="hide">Close</a> -->
        </div>
      </template>
      <skin-filled class="text-40px !text-blue-300" />
    </a-popover>
  </div>
</template>

<style lang="scss">
.theme-card {
  border: 3px solid pink;
  background-color: blue;
}
</style>