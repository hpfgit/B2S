<template>
  <div>
    <div class="main-right-top clearfix">
      <Cart2></Cart2>
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
        <div class="order-title clearfix">
          <div class="screen-class pull-left">筛选条件：</div>
          <div class="pull-left">
            <span>
              出售状态
              <span class="glyphicon glyphicon-menu-down"></span>
            </span>
            <ul class="order-screen-list">
              <li>在售</li>
              <li>未售</li>
            </ul>
          </div>
          <div class="pull-left">
            <span>
              出售状态
              <span class="glyphicon glyphicon-menu-down"></span>
            </span>
            <ul class="order-screen-list">
              <li>在售</li>
              <li>未售</li>
            </ul>
          </div>
          <div class="pull-left">
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
              <th>
                <span class="check-all"></span>
                <span class="check-all-font">全选</span>
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
            <tr>
              <td>
                <span class="check-one"></span>
              </td>
              <td class="name clearfix">
                <div class="img-box clearfix">
                  <img :src="require('static/assets/images/xie.jpg')" alt class="pull-left">
                  <p class="pull-left">Nike Air Foam破斯特 Pro 南海岸泡 岛屿绿泡球鞋</p>
                </div>
              </td>
              <td class="huo-num">5424232-32323</td>
              <td class="xl-num sort-num">
                <span class="sort-num-item">2423</span>
              </td>
              <td class="zd-num sort-num">
                <span class="sort-num-item">-323</span>
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">-4.49</span>%
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">-4.49</span>%
              </td>
              <td class="zfd-num sort-num">
                <span class="sort-num-item">-4.49</span>%
              </td>
              <td class="zfd-num sort-num sort-num2">
                <span class="sort-num-item sort-num-item2">-4.49</span>%
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
export default {};
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

  .screen-class {
    margin-right: 80px;
  }

  div {
    color: #ffffff;
    margin-right: 66px;
    cursor: pointer;

    .order-screen-list {
      display: none;
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


