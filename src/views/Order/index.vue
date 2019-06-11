<template>
  <div>
    <div class="main-right-top clearfix">
      <Cart2 :number="number" :up_num="up_num" :up_scale="up_scale"></Cart2>
      <Cart2></Cart2>
      <Cart2></Cart2>
    </div>
    <div class="main-right-bottom">
      <div class="order-content">
        <div class="title clearfix">
          <button class="btn btn-order pull-left">＋ 新增商品</button>
          <button class="btn btn-order pull-left">上架</button>
          <button class="btn btn-order pull-left">下架</button>
          <div class="form-inline order-form-inline pull-right">
            <label for="huohao"></label>
            <input
              id="huohao"
              type="text"
              class="form-control order-control pull-left"
              name="search"
              placeholder="请搜索商品名称、货号"
            >
            <button class="btn btn-order-search pull-left">搜索</button>
          </div>
        </div>
        <div class="order-title clearfix" ref="screen_box">
          <div class="screen-class pull-left">筛选条件：</div>
          <div class="pull-left screen-item">
            <span>
              出售状态
              <span class="glyphicon glyphicon-menu-down"></span>
            </span>
            <ul class="order-screen-list clearfix">
              <li>在售</li>
              <li>未售</li>
            </ul>
          </div>
          <div class="pull-left screen-item">
            <span>
              出售状态
              <span class="glyphicon glyphicon-menu-down"></span>
            </span>
            <ul class="order-screen-list clearfix">
              <li>在售</li>
              <li>未售</li>
            </ul>
          </div>
          <div class="pull-left screen-item">
            <span class="order-pro">
              出售状态
              <span class="glyphicon glyphicon-menu-down"></span>
            </span>
            <ul class="order-screen-list order-pro-screen-list">
              <li>在售</li>
              <li>未售</li>
            </ul>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th @click="check_all">
                <span class="check-all">
                  <img :src="check_img" v-if="is_checked_all === true" alt>
                </span>
                <span class="check-all-font" ref="check_all">全选</span>
              </th>
              <th>商品信息</th>
              <th>货号</th>
              <th>状态</th>
              <th>总数量</th>
              <th>预期市值</th>
              <th>预期利润</th>
              <th>实际市值</th>
              <th>实际利润</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in order" :key="index">
              <td>
                <span class="check-one" ref="check_one" @click="check_one(index)">
                  <img :src="check_img" alt v-if="item.is_checked">
                </span>
              </td>
              <td class="name clearfix">
                <div class="img-box clearfix">
                  <!-- <img :src="require(item.img)" alt class="pull-left"> -->
                  <p class="pull-left">{{item.name}}</p>
                </div>
              </td>
              <td class="huo-num">{{item.sku_num}}</td>
              <td class="xl-num sort-num">
                <span class="sort-num-item">{{item.status}}</span>
              </td>
              <td class="zd-num sort-num">
                <span class="sort-num-item">{{item.total}}</span>
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">{{item.anticipate_market}}</span>%
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">{{item.anticipate_profits}}</span>%
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">{{item.practical_market}}</span>%
              </td>
              <td class="zfd-num sort-num sort-num2">
                <span class="sort-num-item sort-num-item2">{{item.practical_profits}}</span>%
              </td>
              <td class="zfd-num sort-num">
                <a href="##" class="sort-num-item sort-num-item3">编辑</a>
                <a href="##" class="sort-num-item sort-num-item3">查看走势</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import request from "../../utils/request";
import Cart2 from "@/Cart2";
import { addHandler } from "../../assets/js/utils";

export default {
  name: "Order",
  data() {
    return {
      order: [],
      check_img: require("static/assets/images/checked.png"),
      checked: [],
      number: 5644,
      up_num: 233,
      up_scale: 10.12
    };
  },
  created() {
    request({
      url: "/get/order",
      methods: "get"
    }).then(response => {
      response.forEach(item => {
        item.is_checked = false;
      });
      this.order = response;
    });
  },
  computed: {
    is_checked_all() {
      if (this.order.length !== 0) {
        return this.checked.length === this.order.length;
      }
      return false;
    }
  },
  methods: {
    check_all() {
      console.log(this.is_checked_all);
      this.checked = [];
      let check_all = this.$refs.check_all;
      if (check_all.classList.contains("active")) {
        check_all.classList.remove("active");
        this.checked = [];
        this.order.forEach(item => {
          item.is_checked = false;
        });
      } else {
        check_all.classList.add("active");
        this.order.forEach(item => {
          item.is_checked = true;
          this.checked.push(item.name);
        });
      }
      console.log(this.checked);
    },
    check_one(index) {
      let check_all = this.$refs.check_all;
      this.checked = [];
      let item = this.order[index];
      if (item.is_checked === true) {
        check_all.classList.remove("active");
        item.is_checked = false;
      } else {
        item.is_checked = true;
      }
      this.order.forEach(item => {
        if (item.is_checked === true) {
          this.checked.push(item);
        }
      });
      console.log(this.checked);
    },
    screen() {
      this.$nextTick(() => {
        let screen_box = this.$refs.screen_box;
        let screen_item = screen_box.querySelectorAll(".screen-item");
        for (let i = 0; i < screen_item.length; i++) {
          let item = screen_item[i].querySelector("span");
          item.index = i;
          item.num = 0;
          addHandler(item, "click", function() {
            for (let j = 0; j < screen_item.length; j++) {
              if (j !== this.index) {
                let list = screen_item[j].querySelector(".order-screen-list");
                list.style.display = "none";
                screen_item[j].querySelector("span").num = 0;
              }
            }
            screen_item[this.index].querySelector(
              ".order-screen-list"
            ).style.display = "block";
            this.num += 1;

            if (this.num === 2) {
              for (let k = 0; k < screen_item.length; k++) {
                let list = screen_item[k].querySelector(".order-screen-list");
                list.style.display = "none";
                screen_item[k].querySelector("span").num = 0;
              }
            }
            console.log(item.index);
          });
        }
        console.log(screen_item);
      });
    }
  },
  mounted() {
    this.screen();
  },
  components: {
    Cart2
  }
};
</script>
<style lang="scss" scoped>
.title {
  padding-top: 24px;
  padding-bottom: 16px;
  padding-left: 30px;

  .btn-order {
    color: #e9c381;
    border-color: #e9c381;
    background-color: transparent;
    margin-right: 22px;
  }

  .order-form-inline {
    margin-right: 58px;
    width: 60%;
  }

  .order-control {
    border-color: #e9c381;
    background-color: transparent;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: calc(100% - 80px);
  }

  .btn-order-search {
    background-color: #e9c381;
    border-color: #e9c381;
    color: #ffffff;
    width: 80px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.order-title {
  border: 1px solid #373a43;
  padding: 20px 30px;
  position: relative;

  .screen-class {
    margin-right: 80px;
  }

  div {
    color: #ffffff;
    margin-right: 66px;
    cursor: pointer;

    .order-screen-list {
      position: absolute;
      left: 0;
      top: 63px;
      padding-left: 50px;
      background-color: #30343d;
      box-shadow: 1px 5px 5px rgba($color: #000000, $alpha: 0.1);
      z-index: 9;
      width: 100%;
      display: none;

      li {
        height: 56px;
        line-height: 56px;
        float: left;
        margin-right: 70px;
      }
    }

    .order-pro,
    .order-pro-screen-list {
      color: #e9c381;
    }
  }
}

.table {
  width: calc(100% - 40px);
  margin: 0 auto;

  thead {
    tr {
      th {
        border-bottom: none;
        color: #687285;
        text-align: center;
        padding: 24px 0;

        .check-all {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 1px solid #687285;
          vertical-align: middle;
          margin-right: 10px;
          cursor: pointer;
          position: relative;

          img {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          }

          &.active {
            border-color: #e9c381;
          }
        }

        .check-all-font {
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  tbody {
    tr {
      border: 1px solid #373a43;

      td {
        color: #ffffff;
        border-top: none;
        padding: 18px 0;
        text-align: center;

        img {
          margin-right: 12px;
        }

        .img-box {
          width: 80%;
          margin: 0 auto;
        }

        .check-one {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 1px solid #ffffff;
          vertical-align: middle;
          cursor: pointer;
          position: relative;

          img {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          }

          &.active {
            border-color: #e9c381;
          }
        }

        &.sort-num2 {
          color: #138732;
        }

        .sort-num-item3 {
          color: #e9c381;
          display: block;

          &:nth-of-type(2) {
            margin-top: 14px;
          }
        }
      }
    }
  }
}
</style>


