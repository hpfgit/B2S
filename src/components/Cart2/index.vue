<template>
  <div class="box">
    <h3>大盘指数</h3>
    <p class="content">
      <span class="big-num">5633</span>
      <span class="small-num">
        <span class="up-num"><img class="sub_up_img" :src="add_img" alt="" v-if="up_num > 0"><img class="sub_up_img" :src="red_img" alt="" v-if="up_num < 0"><span class="sub_up_num">{{sub_up_num}}</span></span>
        <span class="float-num">10.13% <img class="top_img" :src="top_img" alt=""></span>
      </span>
    </p>
    <img :src="require('static/assets/images/fg.png')" alt class="fg-img">
  </div>
</template>

<script>
export default {
  name: "cart2",
  props: {
    number: {
      type: Number,
      default() {
        return 5633;
      }
    },
    up_num: {
      type: Number,
      default() {
        return -213;
      }
    },
    up_scale: {
      type: Number,
      default() {
        return 10.13;
      }
    }
  },
  data() {
    return {
      add_img: require("static/assets/images/add.png"),
      red_img: require("static/assets/images/red.png"),
      top_img: require("static/assets/images/top.png")
    }
  },
  computed: {
    sub_up_num() {
      let arr = (this.up_num+'').split('-');
      let str = arr[arr.length - 1]
      return str
    }
  }
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
    margin-top: 30px;
  }

  .content {
    padding-bottom: 17px;
    width: 80%;
    margin: 0 auto 0;
  }

  .big-num {
    display: block;
    font-size: 52px;
    color: #af380d;
  }

  .small-num {
    display: flex;
    justify-content: space-around;
    margin: 10px auto 20px;
    width: 50%;
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

  .sub_up_img {
    margin-right: 5px;
    margin-top: -4px;
  }

  .top_img {
    margin-top: -4px;
    margin-left: 2px;
  }
}
</style>