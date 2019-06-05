<template>
  <div class="box">
    <h3>大盘指数</h3>
    <p class="content">
      <span class="big-num">5633</span>
      <span class="small-num">
        <span class="up-num">+233</span>
        <span class="float-num">⬆10.13%</span>
      </span>
    </p>
    <img :src="require('static/assets/images/fg.png')" alt class="fg-img">
  </div>
</template>

<script>
export default {
  name: "cart2"
};
</script>

<style scoped lang="scss">
.box {
  background-color: #302b2f;
  text-align: center;
  position: relative;
  width: 23.5%;
  float: left;
  margin-top: 10px;
  margin-left: 2%;

  &:nth-of-type(1) {
    margin-left: 0;
  }

  h3 {
    color: #fff;
    font-size: 20px;
    height: 78px;
    line-height: 78px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .content {
    padding-bottom: 17px;
    width: 80%;
    margin: -8px auto 0;
  }

  .big-num {
    display: block;
    font-size: 52px;
    color: #af380d;
    margin-top: -8px;
  }

  .small-num {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .up-num,
  .float-num {
    color: #af380d;
    font-size: 18px;
    display: block;
    text-align: left;
  }

  .fg-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>