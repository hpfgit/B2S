<template>
  <div class="market-container">
    <div class="main-left">
      <div class="logo">
        <img :src="require('static/assets/images/B2S.png')" alt>
        <div></div>
        <span class="line"></span>
      </div>
      <div class="slideBar">
        <div class="slideBar-class">
          <router-link tag="h3" to="/ranking">
            <span class="left-line"></span>
            <img :src="require('static/assets/images/1.png')" alt>
            <span>大盘</span>
          </router-link>
          <ul class="slideBar-list collapse" id="collapseExample">
            <li>24h销量排行</li>
            <li>24h涨跌排行</li>
            <li>24h成交额排行</li>
            <li>0~1k综合排行</li>
            <li>2~4k综合排行</li>
            <li>4k以上综合排行</li>
          </ul>
        </div>
        <div class="slideBar-class">
           <router-link tag="h3" to="/stock">
            <span class="left-line"></span>
            <img :src="require('static/assets/images/2.png')" alt>
            <span>库存</span>
           </router-link>
          <ul class="slideBar-list collapse" id="collapseExample2">
            <li>24h销量排行</li>
            <li>24h涨跌排行</li>
            <li>24h成交额排行</li>
            <li>0~1k综合排行</li>
            <li>2~4k综合排行</li>
            <li>4k以上综合排行</li>
          </ul>
        </div>
        <div class="slideBar-class">
           <router-link tag="h3" to="/order">
            <span class="left-line"></span>
            <img :src="require('static/assets/images/3.png')" alt>
            <span>订单</span>
           </router-link>
          <ul class="slideBar-list collapse" id="collapseExample3">
            <li>24h销量排行</li>
            <li>24h涨跌排行</li>
            <li>24h成交额排行</li>
            <li>0~1k综合排行</li>
            <li>2~4k综合排行</li>
            <li>4k以上综合排行</li>
          </ul>
        </div>
        <div class="slideBar-class">
          <router-link tag="h3" to="/trend">
            <span class="left-line"></span>
            <img :src="require('static/assets/images/4.png')" alt>
            <span>账款</span>
          </router-link>
          <ul class="slideBar-list collapse" id="collapseExample4">
            <li>24h销量排行</li>
            <li>24h涨跌排行</li>
            <li>24h成交额排行</li>
            <li>0~1k综合排行</li>
            <li>2~4k综合排行</li>
            <li>4k以上综合排行</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="user-info">
        <img :src="require('static/assets/images/user.png')" alt class="user-img">
        <span>Sccon Horizon</span>
        <img :src="require('static/assets/images/user_do.png')" alt class="user_do_img">
        <img :src="require('static/assets/images/die.png')" alt class="die_img">
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  methods: {
    init() {
      let self = this;
      let slideBarClass = this.$jQuery(".slideBar-class");

      slideBarClass
        .eq(0)
        .addClass("active")
        .find(".left-line")
        .show();
      slideBarClass
        .eq(0)
        .find(".slideBar-list")
        .show();
      slideBarClass
        .eq(0)
        .siblings()
        .removeClass("active")
        .find(".left-line")
        .hide();
      slideBarClass
        .eq(0)
        .siblings()
        .find(".slideBar-list")
        .hide();

      slideBarClass.each(function(index) {
        self
          .$jQuery(this)
          .find("h3")
          .click(function() {
            slideBarClass
              .eq(index)
              .addClass("active")
              .find(".left-line")
              .show();
            slideBarClass
              .eq(index)
              .find(".slideBar-list")
              .show();
            slideBarClass
              .eq(index)
              .siblings()
              .removeClass("active")
              .find(".left-line")
              .hide();
            slideBarClass
              .eq(index)
              .siblings()
              .find(".slideBar-list")
              .hide();
          });
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.market-container {
  display: flex;
}
.main-left {
  background-color: #1e2229;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 238px;
  flex: 20% 0 0;
}
.main-right {
  background-color: #252a32;
  flex: 80% 1 0;
  padding-left: 20px;
}
.logo {
  text-align: center;

  img {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .line {
    width: 60%;
    height: 2px;
    display: inline-block;
    background-color: #2c303a;
    margin-bottom: 50px;
  }
}
.user-info {
  text-align: right;
  height: 80px;
  line-height: 80px;

  span {
    font-size: 16px;
    color: #ffffff;
    margin-right: 12px;
  }

  span,
  img {
    cursor: pointer;
  }

  .user-img {
    margin-right: 20px;
  }

  .user_do_img {
    margin-right: 34px;
    vertical-align: text-top;
    margin-top: 3px;
  }

  .die_img {
    margin-right: 80px;
  }
}
.slideBar {
  border-radius: 10px;
  letter-spacing: 1px;

  .slideBar-class {
    position: relative;
    border-radius: 5px;

    &.active {
      background-color: #2c303a;

      h3 {
        color: #e9c381;
      }
    }
  }

  h3 {
    color: #6e6f70;
    font-size: 18px;
    height: 70px;
    line-height: 70px;
    cursor: pointer;

    img {
      margin-left: 39px;
    }

    span {
      vertical-align: middle;
      display: inline-block;
      margin-left: 24px;
    }

    .left-line {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: 0;
      background-image: url("../../assets/images/24.png");
      width: 2px;
      height: 70px;
      display: none;
    }
  }

  .slideBar-list {
    li {
      height: 56px;
      line-height: 56px;
      font-size: 14px;
      color: #6e6f70;
      cursor: pointer;
      padding-left: 48px;
    }
  }
}
</style>
