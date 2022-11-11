<template>
  <a-button type="primary">按钮</a-button>

  <a-divider dashed orientation="left">分割线</a-divider>

  <div>
    图标：
    <up-circle-two-tone />
    <a-divider type="vertical"/>
    <star-outlined />
    <a-divider type="vertical"/>
    <star-filled />
    <a-divider type="vertical"/>
    <star-two-tone two-tone-color="#eb2f96" />
  </div>

  <a-divider/>

  <a-typography-paragraph v-model:content="editableStr" editable />
   
  <a-divider/>

  <div>
    <a-row>
      <a-col :span="18" :push="6">col-18 col-push-6</a-col>
      <a-col :span="6" :pull="18">col-6 col-pull-18</a-col>
    </a-row>
  </div>

  <a-divider/>

  <div>
    <a-space :size="size">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="link">Link</a-button>
    </a-space>
    <a-slider v-model:value="size" />
  </div>

  <a-divider/>

  <div>
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        悬停下拉列表
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </div>

  <a-divider/>

  <div>
    <a-pagination v-model:current="current" :total="500" />
  </div>

  <a-divider/>

  <div>
     <a-steps>
    <a-step status="finish" title="登录">
      <template #icon>
        <user-outlined />
      </template>
    </a-step>
    <a-step status="finish" title="验证">
      <template #icon>
        <solution-outlined />
      </template>
    </a-step>
    <a-step status="process" title="支付">
      <template #icon>
        <loading-outlined />
      </template>
    </a-step>
    <a-step status="wait" title="完成">
      <template #icon>
        <smile-outlined />
      </template>
    </a-step>
  </a-steps>
  </div>
</template>
<script setup>
import { defineComponent, ref, watch } from 'vue';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  UpCircleTwoTone,
  StarOutlined,
  StarFilled,
  StarTwoTone,
  DownOutlined
} from '@ant-design/icons-vue';

const editableStr = ref('这是一段可编辑的文字！');
const size = ref(8)
const current = ref(8)
watch(editableStr, () => {
  console.log('editableStr', editableStr.value);
});

const handleMenuClick = e => {
  console.log('click', e);
}

</script>