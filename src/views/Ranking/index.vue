<template>
  <div>
    <div class="main-right-top clearfix">
      <div class="box-s clearfix">
        <Cart></Cart>
        <Cart title="top30指数" number="-233" up_num="-23" up_scale="-12"></Cart>
        <Cart title="top100指数" number="-456" up_num="-21" up_scale="-11"></Cart>
      </div>
    </div>
    <div class="main-right-bottom">
      <div class="content" id="salesvolume">
        <div class="title">
          <img :src="require('static/assets/images/41.png')" alt>
          <span>24h销量排行</span>
          <a href="##" class="pull-right">
            <span>查看更多</span>
            <img :src="require('static/assets/images/more.png')" alt>
          </a>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>名称</th>
              <th>货号</th>
              <th>
                <span class="sort-action">销量</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_sales_volume"
                >
              </th>
              <th>
                <span class="sort-action">涨跌数量</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_up_down"
                >
              </th>
              <th>
                <span class="sort-action">涨幅度</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_rises"
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ranking" :key="index">
              <td class="name">
                <span class="no-num">{{index+1}}</span>
                {{item.name}}
              </td>
              <td class="huo-num">{{item.sku_num}}</td>
              <td class="xl-num sort-num">
                <span class="sort-num-item">{{item.sales_volume}}</span>
              </td>
              <td class="zd-num sort-num">
                <span class="sort-num-item">{{item.up_down}}</span>
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">{{item.rises}}</span>%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content" id="upsanddowns">
        <div class="title">
          <img :src="require('static/assets/images/41.png')" alt>
          <span>24h涨跌排行</span>
          <a href="##" class="pull-right">
            <span>查看更多</span>
            <img :src="require('static/assets/images/more.png')" alt>
          </a>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>名称</th>
              <th>货号</th>
              <th>
                <span class="sort-action">销量</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_sales_volume"
                >
              </th>
              <th>
                <span class="sort-action">涨跌数量</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_up_down"
                >
              </th>
              <th>
                <span class="sort-action">涨幅度</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_rises"
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ranking" :key="index">
              <td class="name">
                <span class="no-num">{{index+1}}</span>
                {{item.name}}
              </td>
              <td class="huo-num">{{item.sku_num}}</td>
              <td class="xl-num sort-num">
                <span class="sort-num-item">{{item.sales_volume}}</span>
              </td>
              <td class="zd-num sort-num">
                <span class="sort-num-item">{{item.up_down}}</span>
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">{{item.rises}}</span>%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content" id="done">
        <div class="title">
          <img :src="require('static/assets/images/41.png')" alt>
          <span>24h成交额排行</span>
          <a href="##" class="pull-right">
            <span>查看更多</span>
            <img :src="require('static/assets/images/more.png')" alt>
          </a>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>名称</th>
              <th>货号</th>
              <th>
                <span class="sort-action">销量</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_sales_volume"
                >
              </th>
              <th>
                <span class="sort-action">涨跌数量</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_up_down"
                >
              </th>
              <th>
                <span class="sort-action">涨幅度</span>
                <img
                  :src="this.sort_img_mo_path"
                  data-click="0"
                  alt
                  class="sort-img"
                  ref="sort_rises"
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ranking" :key="index">
              <td class="name">
                <span class="no-num">{{index+1}}</span>
                {{item.name}}
              </td>
              <td class="huo-num">{{item.sku_num}}</td>
              <td class="xl-num sort-num">
                <span class="sort-num-item">{{item.sales_volume}}</span>
              </td>
              <td class="zd-num sort-num">
                <span class="sort-num-item">{{item.up_down}}</span>
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">{{item.rises}}</span>%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { addHandler } from "../../assets/js/utils";
import Cart from "@/Cart";
import request from "../../utils/request";

export default {
  data() {
    return {
      sort_img_mo_path: require("static/assets/images/mo.png"),
      sort_img_up_path: require("static/assets/images/up.png"),
      sort_img_do_path: require("static/assets/images/do.png"),
      ranking: []
    };
  },
  created() {
    request({
      url: "/get/ranking",
      methods: "get"
    }).then(response => {
      this.ranking = response;
    });
  },
  methods: {
    sortNum(el, attr) {
      let self = this;
      let sort_sales_volume = this.$refs[el];
      addHandler(sort_sales_volume, "click", function() {
        let num = parseInt(this.dataset["click"]);
        if (num >= 3) {
          num = 0;
        }
        num += 1;
        this.dataset["click"] = num;
        if (num === 1) {
          this.setAttribute("src", self.sort_img_up_path);
          request({
            url: "/get/ranking",
            methods: "get"
          }).then(response => {
            response = response.sort((a, b) => {
              return b[attr] - a[attr];
            });
            self.ranking = response;
          });
        }
        if (num === 2) {
          this.setAttribute("src", self.sort_img_do_path);
          request({
            url: "/get/ranking",
            methods: "get"
          }).then(response => {
            response = response.sort((a, b) => {
              return a[attr] - b[attr];
            });
            self.ranking = response;
          });
        }
        if (num === 3) {
          this.setAttribute("src", self.sort_img_mo_path);
          request({
            url: "/get/ranking",
            methods: "get"
          }).then(response => {
            self.ranking = response;
          });
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.sortNum("sort_sales_volume", "sales_volume");
      this.sortNum("sort_up_down", "up_down");
      this.sortNum("sort_rises", "rises");
    });
  },
  components: {
    Cart
  }
};
</script>

<style lang="scss" scoped>
.box-s {
  width: 90%;
}
.main-right-bottom {
  margin-top: 20px;

  .content {
    background-color: #30343d;
    margin-top: 18px;
    margin-bottom: 18px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

    .title {
      font-size: 16px;
      color: #e7c180;
      height: 70px;
      line-height: 80px;
      padding-left: 24px;
      border-bottom: 2px solid #343740;

      img {
        margin-right: 8px;
      }

      span {
        vertical-align: middle;
      }

      a {
        color: #687285;
        margin-right: 45px;

        &:hover {
          text-decoration: none;
        }

        &:link {
          text-decoration: none;
        }

        span {
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }

    table {
      thead {
        tr {
          th {
            font-size: 16px;
            color: #687285;
            border-bottom: none;
            height: 40px;
            line-height: 40px;

            span {
              vertical-align: middle;
              display: inline-block;
              margin-right: 10px;
            }

            img {
              cursor: pointer;
            }

            &:nth-of-type(1) {
              padding-left: 60px;
            }
          }
        }
      }

      tbody {
        tr {
          td {
            font-size: 16px;
            border-top: none;
            height: 40px;
            line-height: 40px;

            &:nth-of-type(1) {
              padding-left: 28px;
            }

            span.no-num {
              display: inline-block;
              width: 20px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              border-radius: 3px;
              background-color: #2c303a;
              font-size: 16px;
              color: #474747;
              margin-right: 10px;
            }
          }

          .name,
          .huo-num,
          .xl-num {
            color: #ffffff;
          }

          .zd-num,
          .zfd-num {
            color: #138732;
          }
        }
      }
    }
  }
}
</style>


