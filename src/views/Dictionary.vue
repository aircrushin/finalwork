<template>
<div class="container">
  <main>
    <DictHeader v-model="searchWord"/>
    <Definition :searchWord="searchWord"/>
  </main>
</div>
</template>

<script>
import DictHeader from '../components/DictHeader.vue';
import Definition from '../components/Definition.vue';
import {ref} from 'vue';
export default({
  components:{ DictHeader, Definition },
  setup(){
    const searchWord = ref();
    return searchWord;
  }
  
})

</script>

<style lang="scss" scoped>
div.container{
  height: 120vh;
  overflow: hidden;
  background-color: #f1f6f9;
  main{
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 1rem;
}
}
.container::-webkit-scrollbar {display:none}  


</style>
