<template>
  <header>
    <h2 class="title">{{wordValue ? wordValue : "Online-Dictionary" }}</h2>
    <div class="input-wrap">
      <input type="text" placeholder="Search a word" v-model="wordValue" 
      @input="$emit('update:modelValue',$event.target.value)"/>
      
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue'
const wordValue = ref();
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
header{
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2{
    font-size: 7vw;
    color: #212529;
    font-weight: 80;
    @media (max-width:1000px) {
      font-size: 11vw;

    }
  }
  .input-wrap{
    input{
      width: 50vw;
      border: none;
      background-color: #f1f6f9;
      border-bottom: 1px solid rgba(197,188,188);
      padding: 5px;
      font-size: 18px;
      color: white;
      &:focus{
        outline: none;
        border-bottom: 1px solid white;
      }
      &::placeholder{
        color: rgba($color: #868e96, $alpha: 0.6);
      }
    }
  }
}

#mode{
  display: flex;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ccc;
  outline: none;
  cursor: pointer;
}

</style>
