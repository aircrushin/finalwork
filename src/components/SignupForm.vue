<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="用户名" v-model="displayName">
      <input type="email" required placeholder="邮箱" v-model="email">
      <input type="password" required placeholder="密码" v-model="password">
      <button @click="handleSubmit">注册</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(props, context) {
      const error = "ERROR"
      // refs
      const displayName = ref('')
      const email = ref('')
      const password = ref('')

      const handleSubmit = async () => {
        await signup(email.value, password.value, displayName.value)
        if (!error.value) {
          context.emit('signup')
        }
      }

      return { displayName, email, password, handleSubmit }
    }
}
</script>

<style>

</style>