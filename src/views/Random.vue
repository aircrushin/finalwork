<script>
export default({
  data() {
    return {
      title:'Mr',
      firstName:'xxx',
      lastName:'xxx',
      email:'xxx@example.com',
      gender:'male',
      picture:'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    async getUser(){
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      console.log(results);
      this.title = results[0].name.title;
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    }
  },
})
</script>

<template>
<div class="container">
  <main>
    <div class="empty"></div>
      <img v-bind:src="picture" alt="">
    <h1>{{title}}. {{firstName}} {{lastName}}</h1>
    <h3>{{email}}</h3>
    <button @click="getUser">抽取随机朋友</button>
  </main>
</div>
 
</template>

<style scoped>
div.container{
  height: 80vh;
  overflow: scroll;
  background-color: white;
}
main{
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.empty{
  padding-top: 140px;
}
img{
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 3px;
  background-color: #ddd;
  margin:0 auto;
}
h1{
  padding-top: 30px;
  text-align: center;
}
h3{
  padding-bottom: 20px;
  text-align: center;
}

button{
  background-color: #333;
  color: #eee;
  width: 200px;
  font-size: 16px;
  margin: 0 auto;
  height: 50px;
  border-radius: 3px;
  cursor: pointer;
}
.container::-webkit-scrollbar {display:none}  
</style>
