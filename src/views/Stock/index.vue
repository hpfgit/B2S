<template>
  <div>
    <div class="main-right-top clearfix">
      <Cart2></Cart2>
      <Cart2></Cart2>
      <Cart2></Cart2>
    </div>
    <div class="main-right-bottom">
      <div class="order-content">
        <div class="stock-title title clearfix" ref="stock_title">
          <span class="stock-item active">全部订单 (876)</span>
          <span class="stock-item">全部订单 (876)</span>
          <span class="stock-item">全部订单 (876)</span>
          <span class="stock-item">全部订单 (876)</span>
          <span class="stock-item">全部订单 (876)</span>
          <span class="line" ref="stock_line"></span>
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
              <th>订单总额</th>
              <th>订单总额</th>
              <th>物流方式</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in stock" :key="index">
              <td>
                <span class="check-one active" ref="check_one" @click="check_one(index)">
                  <img :src="check_img" alt v-if="item.is_checked">
                </span>
              </td>
              <td class="name clearfix">
                <div class="img-box clearfix">
                  <!-- <img :src="require(''+item.img+'')" alt class="pull-left"> -->
                  <p class="pull-left">{{item.name}}</p>
                  <p class="huohao pull-left">{{item.sku_raw}}</p>
                </div>
              </td>
              <td class="huo-num">
                <p>{{item.sku_num}}</p>
                <p>(含运费: ￥{{item.carriage}})</p>
              </td>
              <td class="xl-num sort-num">
                <span class="sort-num-item">
                  {{item.address}}
                  <span class="copy-font">复制</span>
                </span>
              </td>
              <td class="zd-num sort-num">
                <span class="sort-num-item">{{item.logistics}}</span>
              </td>
              <td class="zfd-num sort-num">
                <p class="sort-num-item">发货倒计时</p>
                <p>{{item.status}}</p>
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item sort-num-item3">编辑</span>
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
import { addHandler, getElementStyle } from "../../assets/js/utils";

export default {
  name: "Stock",
  data() {
    return {
      stock: [],
      checked: [],
      check_img: require("static/assets/images/checked.png")
    };
  },
  created() {
    request({
      url: "/get/stock",
      methods: "get"
    }).then(response => {
      response.forEach(item => {
        item.is_checked = false;
      });
      this.stock = response;
    });
  },
  computed: {
    is_checked_all() {
      if (this.stock.length !== 0) {
        return this.checked.length === this.stock.length;
      }
      return false;
    }
  },
  methods: {
    tab() {
      this.$nextTick(() => {
        let stock_line = this.$refs.stock_line;
        let stock_title = this.$refs.stock_title;
        let item = stock_title.querySelectorAll(".stock-item");
        let width = parseInt(getElementStyle(item[0], "width"));
        for (let i = 0; i < item.length; i++) {
          item[i].index = i;
          addHandler(item[i], "click", function() {
            for (let i = 0; i < item.length; i++) {
              item[i].classList.remove("active");
            }
            item[this.index].classList.add("active");
            stock_line.style.cssText = `left: ${this.index * width}px`;
          });
        }
      });
    },
    check_all() {
      console.log(this.is_checked_all);
      this.checked = [];
      let check_all = this.$refs.check_all;
      if (check_all.classList.contains("active")) {
        check_all.classList.remove("active");
        this.checked = [];
        this.stock.forEach(item => {
          item.is_checked = false;
        });
      } else {
        check_all.classList.add("active");
        this.stock.forEach(item => {
          item.is_checked = true;
          this.checked.push(item.name);
        });
      }
      console.log(this.checked);
    },
    check_one(index) {
      let check_all = this.$refs.check_all;
      this.checked = [];
      let item = this.stock[index];
      if (item.is_checked === true) {
        check_all.classList.remove("active");
        item.is_checked = false;
      } else {
        item.is_checked = true;
      }
      this.stock.forEach(item => {
        if (item.is_checked === true) {
          this.checked.push(item);
        }
      });
      console.log(this.checked);
    }
  },
  mounted() {
    this.tab();
  },
  components: {
    Cart2
  }
};
</script>
<style lang="scss" scoped>
.title {
  padding-top: 34px;

  &.stock-title {
    position: relative;

    span {
      color: #687285;
      display: inline-block;
      width: 214px;
      height: 44px;
      text-align: center;
      cursor: pointer;

      &.active {
        color: #e7c180;
      }
    }

    .line {
      width: 214px;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: left 0.5s;
      background-color: #e7c180;
    }
  }
}

.order-content {
  background-color: #30343d;
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

          .huohao {
            margin-top: 16px;
          }
        }

        .check-one {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 1px solid #ffffff;
          vertical-align: middle;
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

        .copy-font {
          padding: 2px;
          border: 1px solid #ffffff;
          font-size: 12px;
          border-radius: 5px;
          cursor: pointer;
          margin-left: 14px;
        }
      }
    }
  }
}
</style>


