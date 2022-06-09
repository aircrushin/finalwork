<template>
<div class="container">
  <main>
    <TodoHead/>
    <Todo/>
  </main>
</div>
</template>

<script setup>
import TodoHead from '../components/TodoHead.vue'
import Todo from '../components/Todo.vue'

</script>

<style lang="scss" scoped>
.container{
  height: 80vh;
  overflow: hidden;
  background-color: white;
  main{
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 1rem;
}
}

</style>
