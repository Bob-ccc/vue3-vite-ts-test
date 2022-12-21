import { ref } from "vue"
import { randomImage } from "@/api/login"


export default function (model:any,checkKey:any) {


  const randCodeImage = ref('')
  // const currdatetime = ref(0)
  const requestCodeSuccess = ref(false)

  const handleChangeCheckCode = () => {
    // currdatetime.value = new Date().getTime();
    model.inputCode = ''
    randomImage({currdatetime:new Date().getTime()})
      .then((res: any) => {
        console.log(res);
        randCodeImage.value = res.data.captcha
        checkKey.value = res.data.code
        requestCodeSuccess.value = true
      })
      .catch((err) => {
        requestCodeSuccess.value = false
      })
  }

  return { requestCodeSuccess, randCodeImage, handleChangeCheckCode }
}