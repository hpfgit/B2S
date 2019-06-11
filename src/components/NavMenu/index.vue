<template>
  <div class="slideBar-class">
    <router-link tag="h3" :to="to">
      <span class="left-line"></span>
      <img :src="require('static/assets/images/1.png')" alt>
      <span>{{title}}</span>
    </router-link>
    <ul class="slideBar-list collapse" id="collapseExample">
      <li v-for="(item ,index) in list" :key="index">
        <a href="javascript:void(0);">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    to: {
      type: String,
      default() {
        return "/ranking";
      }
    },
    title: {
      type: String,
      default() {
        return "大盘";
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
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
    this.$nextTick(() => {
      this.init();
    });
  }
};
</script>

<style scoped lang="scss">
.slideBar-class {
  position: relative;
  border-radius: 5px;

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

  &.active {
    background-color: #2c303a;

    h3 {
      color: #e9c381;
    }
  }

  .slideBar-list {
    li {
      height: 56px;
      line-height: 56px;
      font-size: 14px;
      cursor: pointer;
      padding-left: 48px;

      a {
        color: #6e6f70;

        &:hover {
          text-decoration: none;
        }

        &:link {
          text-decoration: none;
        }
      }
    }
  }
}
</style>