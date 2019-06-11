<template>
  <div class="market-container">
    <div class="main-left" ref="main_left">
      <div class="box" ref="box">
        <div class="logo">
          <img :src="require('static/assets/images/B2S.png')" alt>
          <div></div>
          <span class="line"></span>
        </div>
        <div class="slideBar">
          <nav-menu
            to="/ranking"
            title="大盘"
            :list="['24h销量排行','24h涨跌排行','24h成交额排行','0~1k综合排行','2~4k综合排行','4k以上综合排行']"
          ></nav-menu>
          <nav-menu to="/stock" title="库存"></nav-menu>
          <nav-menu to="/order" title="订单"></nav-menu>
          <nav-menu title="账单"></nav-menu>
        </div>
      </div>
      <div class="scroll-line" ref="scroll_line"></div>
    </div>
    <div class="main-right">
      <div class="user-info">
        <img :src="require('static/assets/images/user.png')" alt class="user-img">
        <span>Sccon Horizon</span>
        <img :src="require('static/assets/images/user_do.png')" alt class="user_do_img">
        <img :src="require('static/assets/images/die.png')" @click="logout" alt class="die_img">
      </div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <loading :fullscreenLoading="isFullscreenLoading" ref="loading"></loading>
  </div>
</template>

<script>
import navMenu from "@/NavMenu";
import loading from "@/loading";
import {
  addHandler,
  getEvent,
  getWheelDelta,
  getElementStyle
} from "../../assets/js/utils";

export default {
  name: "Layout",
  data() {
    return {
      isFullscreenLoading: false,
      transitionName: ""
    };
  },
  methods: {
    logout() {
      this.$refs.loading.openFullScreen();
      this.$store
        .dispatch("user/logout")
        .then(() => {
          this.$router.push({
            path: this.redirect || "/",
            query: this.otherQuery
          });
          this.$refs.loading.closeFullScreen();
        })
        .catch(() => {
          this.$refs.loading.closeFullScreen();
        });
    },
    scroll() {
      this.$nextTick(() => {
        // 滚动条总高度 / 滚动条高度 = 层级2 / 层级1
        let box = this.$refs.box;
        let scroll_line = this.$refs.scroll_line;
        let main_left = this.$refs.main_left;
        let box_hei = parseInt(getElementStyle(box, "height"));
        let scr_hei = parseInt(getElementStyle(scroll_line, "height"));
        let main_hei = parseInt(getElementStyle(main_left, "height"));
        let com_scr_hei = Math.min(main_hei / box_hei, 1);
        scroll_line.style.height = com_scr_hei * main_hei + "px";

        let maxval = main_hei - com_scr_hei * main_hei;
        let maxcon = box_hei - main_hei;
        let num = 0;
        // 滑块区域与内容区域的比例
        const sliderRatio = box_hei / main_hei;
        console.log(sliderRatio);
        addHandler(main_left, "mousewheel", function(e) {
          e = getEvent(e);
          let dir = getWheelDelta(e);
          let top = scroll_line.offsetTop;
          top = top - dir * 15;
          top = Math.min(top, maxval);
          top = Math.max(top, 0);
          scroll_line.style.top = top + "px";
          box.style.top = (-top / maxval) * maxcon + "px";
        });
        addHandler(box, "DOMMouseScroll", function(e) {
          e = getEvent(e);
          let dir = getWheelDelta(e);
          let top = scroll_line.offsetTop;
          top = top - dir * 15;
          top = Math.min(top, maxval);
          top = Math.max(top, 0);
          scroll_line.style.top = top + "px";
          box.style.top = (-top / maxval) * maxcon + "px";
        });
      });
    }
  },
  mounted() {
    this.scroll();
  },
  components: {
    loading,
    navMenu
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      console.log(to.path, fromDepth, this.transitionName);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.market-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.main-left {
  background-color: #1e2229;
  max-width: 238px;
  flex: 20% 0 0;
  height: 100%;
  overflow: hidden;
  position: relative;

  .box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .scroll-line {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.main-right {
  background-color: #252a32;
  flex: 80% 1 0;
  padding-left: 20px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
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
}
</style>
