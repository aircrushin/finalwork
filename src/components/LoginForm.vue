<template>
  <form @submit.prevent="handleSubmit" method="post">
      <input type="email" required placeholder="邮箱" v-model="email">
      <input type="password" required placeholder="密码" v-model="password">
      <div class="error">{{ error }}</div>
      <button @click = "goMain">登录</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(props, context) {
       // refs
       const email = ref('')
       const password = ref('')


       const handleSubmit = async () => {
         await login(email.value, password.value)
         if (!error.value) {
           context.emit('login')
         }
       }
       return { email, password, handleSubmit}
    },
    methods: {
      goMain(){
        //通过push进行跳转
        this.$router.push('/main')
      }
    },
}
</script>

<style>

</style>