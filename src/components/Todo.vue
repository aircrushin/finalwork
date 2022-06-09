<script>
 export default {
        data() {
            return {
              todolist:[],
              inputValue:""
            }
        },
        methods: {
          add:function(){
            this.todolist.push(this.inputValue);
            this.inputValue = "";
          },
          remove:function(index) {
            this.todolist.splice(index,1);
          },
          clear:function () {
            this.todolist = [];
          },
        },
    }
</script>


<template>
<section class="main">
  <input v-model="inputValue" @keyup.enter="add" autofocus="autofocus" 
  autocomplete="off" placeholder="请输入任务" class="new-todo">{{inputValue}}

  <ul class="list">
    <li class="todo" v-for="(item,index) in todolist">
      <div class="view">
        <span class="index">{{ index+1 }}.</span>
        <label class="thing">{{ item }}</label>
        <button class="destroy" @click="remove(index)">X</button>
      </div>
    </li>
  </ul>
</section>
  <footer class="footer" v-show="todolist.length!=0">
    <span class="todo-count"><strong>{{todolist.length}}</strong> task left</span>
    <button class="clear" @click="clear">Clear</button>
  </footer>
</template>


<style>
li{
  list-style-type:none;
}
.index{
  color: #444;
  float: left;
}
.thing{
  color: #222;
  padding-left: 20px;
}
.view{
  height: auto;
  width: 400px;
  margin: 20px auto;
  border: none;
  border-bottom: 1px solid #ddd;
}
.destroy{
    padding: 4px 20px;
    text-decoration: none;
    background-color: #14274e;
    font-weight: bold;
    border: 0;
    border-radius: 20px;
    color: #fff;
    float: right;
  margin: 0 auto;
}
.new-todo{
  display:block;
  margin: 10px auto;
  line-height: 40px;
  border: 0;
  border-bottom: 1px solid #ccc;
  height: 40px;
  width: 400px;
  outline-style: none;
  color: #555;
  font-size: 20px;
  font: italic;
  padding: 10px;
}

input::-webkit-input-placeholder {
    color: #C0C0C0;
    font-size: 14px;
}
.footer{
  padding-top: 30px;
  background-color: white;
  width: 400px;
  margin:0 auto;
  color: #222;
  font-style: italic;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}
.clear{
  display: flex;
  float: right;
  border: none;
  background-color: #fff;
  color: #bbb;
  cursor: pointer;
  margin: 0 auto;
}
</style>