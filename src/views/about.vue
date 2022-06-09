<script>
import LoginForm from "../components/LoginForm.vue"
import SignupForm from "../components/SignupForm.vue";
  export default {
    data() {
        return {
            author: "FYH",
            version: "1.01",
            email: "ultrav0229@gmail.com",
        };
    },
    components: { LoginForm, SignupForm }
}
</script>

<template>
<div class="text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere expedita culpa omnis, aspernatur, quos vel laboriosam deserunt sapiente excepturi similique quo quaerat odit assumenda mollitia officia accusamus id! Voluptates.
</div>
<footer class="footer">
<div class="info">author:&emsp;{{author}}</div>
<div class="info">version:&emsp;{{version}}</div>
<div class="info">contact:&emsp;{{email}}</div>
</footer>
</template>


<style scoped>
.footer{
  margin:auto;
  left:0; right:0; top:100px; bottom:0;
  width:200px; height:100px;
  text-align: justify;
  text-align-last: justify;
  border: none;
  background-color: #f1f6f9;
}
.info{
  color:#888;
  padding: 1px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  text-align: left;
  font-family: "STHupo";
}
.text{
  color:#888;
  padding: 100px;
  text-align: center;
}
</style>