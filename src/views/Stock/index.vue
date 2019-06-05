<template>
  <div>
    <div class="main-right-top clearfix">
      <Cart2></Cart2>
      <Cart2></Cart2>
      <Cart2></Cart2>
    </div>
    <div class="main-right-bottom">
      <div class="order-content">
        <div class="stock-title title clearfix">
          <span class="active">全部订单 (876)</span>
          <span>全部订单 (876)</span>
          <span>全部订单 (876)</span>
          <span>全部订单 (876)</span>
          <span>全部订单 (876)</span>
          <span class="line"></span>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>
                <span class="check-all"></span>
                <span class="check-all-font">全选</span>
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
            <tr>
              <td>
                <span class="check-one active"></span>
              </td>
              <td class="name clearfix">
                <div class="img-box clearfix">
                  <img :src="require('static/assets/images/xie.jpg')" alt class="pull-left">
                  <p class="pull-left">Nike Air Foam破斯特 Pro 南海岸泡 岛屿绿泡球鞋</p>
                  <p class="huohao pull-left">624041-303</p>
                </div>
              </td>
              <td class="huo-num">
                <p>5424232-32323</p>
                <p>(含运费: ￥10)</p>
              </td>
              <td class="xl-num sort-num">
                <span class="sort-num-item">
                  天津市西青区华鼎新区1号4号楼1门702
                  <span class="copy-font">复制</span>
                </span>
              </td>
              <td class="zd-num sort-num">
                <span class="sort-num-item">顺丰陆运 (寄付）</span>
              </td>
              <td class="zfd-num sort-num">
                <p class="sort-num-item">发货倒计时</p>
                <p>23:20</p>
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
import Cart2 from "@/Cart";
export default {
  components: {
    Cart2
  }
};
</script>
<style lang="scss" scoped>
.title {
  padding-top: 34px;
  padding-bottom: 22px;

  &.stock-title {
    position: relative;

    span {
      color: #687285;
      display: inline-block;
      width: 214px;
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
      background-color: #e7c180;
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


