<template>
  <div class="game">
    <h2>打地鼠!!!</h2>
    <div class="wraper">
      <div class="item" v-for="n in TOTAL" :key="n">
        <div :style="{'visibility': random === n ? 'visible' : 'hidden'}" @click="clickItem">{{n}}</div>
      </div>
    </div>
    <div class="scoped">
      <div class="set">
        <p>设置参数</p>
        <p>
          速度：<input type="number" v-model="setSpeed">
        </p>
        <p>
          总数：<input type="number" v-model="setNum">
        </p>
        <p>
          <button @click="playGame">开始</button>
          <button @click="quitGame">停止</button>
        </p>
      </div>
      <div class="count set">
        <h3>统计分数面板</h3>
        <h3>总数： {{TOTAL}}</h3>
        <h3>击中： {{clickNum}}</h3>
      </div>
    </div>
  </div>
</template>
 
<script>
 
export default {
  data () {
    return {
      clickFlag: true, // 单个地鼠只能点击一次
      setNum: 40, // 绑定设置地洞数量
      setSpeed: 1000, // 绑定设置地鼠出现速度
      speed: 2000, // 地鼠出现速度
      random: '', // 随机出现的地鼠位置
      TOTAL: 40, // 地鼠总数
      count: 0, // 统计总共出现了多少次地鼠同于判断不能大于总数
      clickNum: 0, // 点中地鼠统计
      timmerId: null
    };
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    // 开始游戏
    playGame () {
      this.random = '';
      this.speed = parseInt(this.setSpeed);
      this.TOTAL = parseInt(this.setNum);
      clearInterval(this.timmerId);
      this.timmerId = setInterval(() => {
        this.random = Math.floor(Math.random() * this.TOTAL + 1);
        this.clickFlag = true; // 开放点击
        this.count++;
        if (this.count >= this.TOTAL) {
          clearInterval(this.timmerId);
        }
      }, this.speed);
    },
    // 点击地鼠
    clickItem () {
      if (this.clickFlag) {
        (this.count < this.TOTAL) && this.clickNum++;
        this.clickFlag = false;
      }
    },
    //退出游戏
    quitGame() {
      window.location.reload();
    }
  }
};
</script>
<style lang="less" scoped>
.game {
  border: 1px solid #888;
  width: 1200px;
  padding: 10px;
  user-select: none;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  h2 {
    font-size: 16px;
    color: #333;
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  .wraper {
    width: 900px;
    float: left;
  }
  .scoped {
    width: 260px;
    height: 540px;
    float: left;
    padding-left: 15px;
    border-left: 1px solid #ccc;
    h3 {
      font-size: 16px;
      color: #333;
      font-family: 'STHeiti';
      font-weight: bold;
    }
    .set {
      height: 200px;
      width: 100%;
      border: 1px solid #ccc;
      p {
        padding: 10px;
        text-align: center;
        font-family: 'STHeiti';
        font-weight: bold;
        color: #333;
        font-size: 16px;
        button {
          display: inline-block;
          width: 40%;
          cursor: pointer;
          margin: 15px;
        }
      }
    }
    .count {
      .set;
      margin-top: 140px;
      padding-top: 25px;
      text-align: center;
      line-height: 40px;
      h3 {
        font-weight:normal;
      }
    }
  }
  .item {
    display: inline-block;
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    border: 1px solid #999;
    div {
      height: 100%;
      background: #868e96;
      border-radius: 50px;
      cursor: pointer;
    }
  }
}
</style>
