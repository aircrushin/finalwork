<template>
  <div class="welcome">
    <div class="choose">
      <router-link to="/todo">TODO LIST</router-link>
      </div>
    <div class="choose">
      <router-link to="/weather">WEATHER CHECK</router-link>
      </div>
    <div class="choose">
      <router-link to="/random">FIND RANDOM USER</router-link>
      </div>
    <div class="choose">
      <router-link to="/dictionary">English Dictionary</router-link>
      </div>
      <div class="choose">
      <router-link to="/Calculator">Calculator</router-link>
      </div>
      <div class="choose">
      <router-link to="/Game">Game</router-link>
      </div>
    <div class="choose">more to come...</div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.welcome {
      padding: 20px 0;
      text-align: center;  
      cursor: pointer;
    }
.choose {
  border: 5px solid #666;
  border-radius: 5px;
  padding: 30px;
  margin: 20px;
  font-size: 18px;
}

.welcome :hover{
  background-color: #dee2e6;
}

a {
  color: #394867;
}

@media (max-width: 576px) {
    .welcome input {
          width: 90%;
      }
}
</style>