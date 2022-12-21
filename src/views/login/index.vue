<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { message } from 'ant-design-vue';
import type { FormInstance } from 'ant-design-vue';
import {
  UserOutlined,
  LockOutlined,
  SmileOutlined
} from '@ant-design/icons-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { login } from "@/api/login"
import router from '@/router';

import useCheckCode from "./hooks/useCheckCode";


const checkKey = ref(0)
const model = reactive<FormState>({
  username: '',
  password: '',
  inputCode: ''
})

const { requestCodeSuccess, randCodeImage, handleChangeCheckCode } = useCheckCode(model,checkKey)

// const requestCodeSuccess = ref(false)
// const randCodeImage = ref('')
// const currdatetime = ref(0)
const formRef = ref<FormInstance>();

interface FormState {
  username: string;
  password: string;
  inputCode: string;
}


// 校验规则
const rules: Record<string, Rule[]> = {
  username: [{ required: true, message: '请输入用户名!', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码!', trigger: 'change' }],
  inputCode: [{ required: true, message: '请输入验证码!', trigger: 'change' }],
};

const loading = ref(false)
// 更新验证码
// const handleChangeCheckCode = () => {
//   currdatetime.value = new Date().getTime();
//   model.inputCode = ''
//   randomImage({currdatetime:currdatetime.value})
//     .then((res: any) => {
//       console.log(res);
//       randCodeImage.value = res.data.captcha
//       checkKey.value = res.data.code
//       requestCodeSuccess.value = true
//     })
//     .catch((err) => {
//       requestCodeSuccess.value = false
//     })
// }

// 登录
const handleFinish = () => {
  loading.value = true
  let loginParams = {
    username: model.username,
    password: model.password,
    captcha: model.inputCode,
    checkKey: checkKey.value,
    remember_me: true,
  }
  login(loginParams)
    .then((res:any) => {
      console.log(res)
      if(res.data){
        const { userInfo, token } = res.data
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        localStorage.setItem("token",token)
        message.success(res?.message)
        router.push({ name:'Home' })
      }else{
        message.warning(res?.message)
      }
      loading.value = false
      // localStorage.setItem('token', res.result.token)
      // const path = window.routerName ? ('/' + window.routerName) : '/'
      // router.push({ path })
    })
    .catch((err) => {
      loading.value = false
    });
}

const init = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')
}

onMounted(() => {
  init()
  handleChangeCheckCode()
})

</script>

<template>
  <div class="login bg-[#111111] w-[100vw] h-[100vh] flex flex-col justify-center items-center">
    <!-- <div class="mb-30px"> -->
    <!-- <img src="/logo.png" alt="" /> -->
    <!-- </div> -->
    <div class="login-box w-400px h-280px relative rounded-11px overflow-hidden">
      <div class="z-1 p-20px bg-[#111111] absolute top-2px right-2px bottom-2px left-2px rounded-8px">
        <a-form class="form" ref="formRef" :model="model" :rules="rules" @finish="handleFinish">
          <a-form-item required name="username">
            <a-input v-model:value="model.username" size="large" placeholder="请输入帐户名">
              <template #prefix>
                <user-outlined style="color:rgb(50, 110, 221);" />
              </template>

            </a-input>
          </a-form-item>
          <a-form-item required name="password">
            <a-input v-model:value="model.password" size="large" type="password" autocomplete="false" placeholder="请输入密码">
              <template #prefix>
                <lock-outlined style="color:rgb(50, 110, 221);" />
              </template>
            </a-input>
          </a-form-item>

          <a-row :gutter="0">
            <a-col :span="16">
              <a-form-item required name="inputCode">
                <a-input v-model:value="model.inputCode" size="large" type="text" placeholder="请输入验证码">
                  <template #prefix>
                    <smile-outlined style="color:rgb(50, 110, 221);" />
                  </template>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8" class="overflow-hidden" style="text-align: right;height: 40px;">
              <div class="flex justify-center items-center scale-75" v-if="requestCodeSuccess" style="margin-top: -5px;" v-html="randCodeImage" @click="handleChangeCheckCode"></div>
              <img v-else style="margin-top: 2px;" src="@/assets/checkcode.png" @click="handleChangeCheckCode" />
            </a-col>
          </a-row>
          <a-form-item required>
            <div class="flex justify-end">
              <a-button class="!rounded-6px" style="background:rgb(50, 110, 221);border:none;" type="primary" size="large" :loading="loading"
                html-type="submit">登录
              </a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-box{
  background-color: #000000;
  .ant-input-affix-wrapper{
    background-color: transparent !important;
    border: none !important;
    border-bottom: 2px solid rgb(50, 110, 221) !important;
    :deep(.ant-input){
      background-color: transparent !important;
      color:rgb(50, 110, 221);
      margin-left: 10px;
      padding-left: 10px;
    }
  }
  &::before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    left: -50%;
    top: -50%;
    position: absolute;
    background-image: linear-gradient(#ffffff00,rgba(88, 212, 216, 0.315), rgb(241, 91, 184), rgb(50, 110, 221));
    transform-origin: 100% 100%;
    animation: rote 5s infinite linear;
  }
  
  &::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    position: absolute;
    background-image: linear-gradient( rgb(50, 110, 221), rgb(241, 91, 184),rgba(88, 212, 216, 0.315),#ffffff00);
    transform-origin: 0% 0%;
    animation: rote 5s infinite linear;
  }
}

@keyframes rote  {
  100% {
    transform: rotate(-360deg);
  }
}
</style>