<template>
  <form method="post">
      <input type="text" required placeholder="用户名" v-model="displayName">
      <input type="email" required placeholder="邮箱" v-model="email">
      <input type="password" required placeholder="密码" v-model="password">
      <button @click="getData">注册</button>
  </form>
</template>

<script>
import axios from "axios";
import { ref } from 'vue'

export default {
     methods: {
      goLogin(){
        //通过push进行跳转
        this.$router.push('/')
      },
      async getData() {
        const url = `http://36.111.21.31:5000/reg`;
        try {
          const data = await axios.post(url);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
    },
    
}
</script>

<style>

</style>