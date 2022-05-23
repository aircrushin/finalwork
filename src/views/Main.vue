<template>
  <div class="welcome">
    <div class="choose">TODO LIST</div>
    <div class="choose">WEATHER CHECK</div>
    <div class="choose">FIND RANDOM USER</div>
    <div class="choose">English Dictionary</div>
    <div class="choose">more to come...</div>
  </div>
</template>

<style>
.welcome {
      padding: 20px 0;
      text-align: center;  
    }
.choose {
  border: 5px solid #666;
  border-radius: 5px;
  padding: 30px;
  margin: 20px;
  font-size: 18px;
}

    @media (max-width: 576px) {
        .welcome input {
            width: 90%;
        }
    }
</style>