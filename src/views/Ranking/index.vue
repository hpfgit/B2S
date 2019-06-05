<template>
  <div>
    <div class="main-right-top clearfix">
      <Cart></Cart>
      <Cart></Cart>
      <Cart></Cart>
    </div>
    <div class="main-right-bottom">
      <div class="content">
        <div class="title">
          <img :src="require('static/assets/images/41.png')" alt>
          <span>24h销量排行</span>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>名称</th>
              <th>货号</th>
              <th>
                <span class="sort-action">销量</span>
                <img :src="this.sort_img_mo_path" alt class="sort-img">
              </th>
              <th>
                <span class="sort-action">涨跌数量</span>
                <img :src="this.sort_img_mo_path" alt class="sort-img">
              </th>
              <th>
                <span class="sort-action">涨幅度</span>
                <img :src="this.sort_img_mo_path" alt class="sort-img">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="name">
                <span class="no-num">1</span>Nike Air Foam破斯特 Pro 南海岸泡 岛屿绿泡球鞋
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
            </tr>
            <tr>
              <td class="name">
                <span class="no-num">1</span>Nike Air Foam破斯特 Pro 南海岸泡 岛屿绿泡球鞋
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
            </tr>
            <tr>
              <td class="name">
                <span class="no-num">1</span>Nike Air Foam破斯特 Pro 南海岸泡 岛屿绿泡球鞋
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
            </tr>
            <tr>
              <td class="name">
                <span class="no-num">1</span>Nike Air Foam破斯特 Pro 南海岸泡 岛屿绿泡球鞋
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Cart from "@/Cart";
export default {
    data() {
            return {
                sort_img_mo_path: require('static/assets/images/mo.png'),
                sort_img_up_path: require('static/assets/images/up.png'),
                sort_img_do_path: require('static/assets/images/do.png')
            }
        },
        methods: {
            init() {
                let self = this;

                this.$jQuery('.table tr th').each(function () {
                    self.$jQuery(this).find('.sort-img').each(function () {
                        self.$jQuery(this).attr('data-click', 0).click(function () {
                            let num = Number(self.$jQuery(this).attr('data-click'))
                            num += 1
                            self.$jQuery(this).attr('data-click', num)
                            self.$jQuery(this).attr('src', self.sort_img_up_path)
                            if (self.$jQuery(this).attr('data-click') === '2') {
                                self.$jQuery(this).attr('data-click', 0)
                                self.$jQuery(this).attr('src', self.sort_img_do_path)
                            }
                        })
                    })
                })
            }
        },
        mounted() {
            this.init()
        },
  components: {
    Cart
  }
};
</script>

<style lang="scss" scoped>
.main-right-bottom {
  margin-top: 20px;
  background-color: #30343d;

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


