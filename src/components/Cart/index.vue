<template>
  <div class="box" :class="{'up': number < 0}">
    <h3>{{title}}</h3>
    <p class="content">
      <span class="big-num">{{number | formatNumber}}</span>
      <span class="small-num">
        <span class="small-num-box">
          <span class="up-num">
            <img class="sub_up_img" :src="add_img" alt v-if="up_num > 0">
            <img class="sub_up_img" :src="red_img" alt v-if="up_num < 0">
            <span class="sub_up_num">{{up_num | formatNumber}}</span>
          </span>
          <span class="float-num">
            <img class="up_img" :src="up_img" alt v-if="up_scale > 0">
            <img class="up_img" :src="down_img" alt v-if="up_scale < 0">
            <span class="up_scale">{{up_scale | formatNumber}}%</span>
          </span>
        </span>
      </span>
    </p>
    <img :src="require('static/assets/images/fg.png')" alt class="fg-img">
  </div>
</template>

<script>
export default {
  name: "cart",
  props: {
    title: {
      type: String,
      default() {
        return "大盘指数";
      }
    },
    number: {
      type: String,
      default() {
        return "5633";
      }
    },
    up_num: {
      type: String,
      default() {
        return "213";
      }
    },
    up_scale: {
      type: String,
      default() {
        return "10.13";
      }
    }
  },
  data() {
    return {
      up_img: require("static/assets/images/up_img.png"),
      down_img: require("static/assets/images/down_img.png"),
      add_img: require("static//assets/images/add.png"),
      red_img: require("static//assets/images/red.png")
    };
  },
  computed: {},
  methods: {},
  filters: {
    formatNumber(str) {
      let number = str.split("-");
      if (number.length > 1) {
        return number[number.length - 1];
      }
      return str;
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

  &.up {
    background-color: #243132;
    
    .big-num {
      color: #138732;
    }

    .up-num,
    .float-num {
      color: #138732;
    }
  }

  &:nth-of-type(1) {
    margin-left: 0;
  }

  h3 {
    color: #fff;
    font-size: 18px;
    margin-top: 30px;
  }

  .content {
    display: flex;
    justify-content: space-around;
    padding-bottom: 17px;
    margin: 0 auto 0;
    width: 90%;
  }

  .big-num {
    font-size: 50px;
    color: #af380d;
  }
  
  .small-num {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .big-num, .small-num {
    flex: 1;
  }

  .up-num,
  .float-num {
    color: #af380d;
    font-size: 18px;
    display: block;
  }

  .fg-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .up_img {
    margin-right: 2px;
  }

  .up_scale {
    vertical-align: text-top;
  }

  .sub_up_num {
    vertical-align: middle;
  }

  .sub_up_img {
    margin-right: 5px;
  }
}
</style>