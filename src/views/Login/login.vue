<template>
  <div class="box">
    <div class="login" ref="login">
      <div class="login-inner">
        <div class="login-box">
          <div class="imgs">
            <img :src="require('static/assets/images/login/Login.png')" alt>
            <div></div>
            <img :src="require('static/assets/images/login/font.png')" alt class="font-img">
          </div>
          <form method="POST" class="form">
            <div class="input-box">
              <label for="tel"></label>
              <p class="placeholder">请输入您的手机号</p>
              <input type="text" name="tel" id="tel">
              <div class="line"></div>
            </div>
            <div class="input-box">
              <label for="code"></label>
              <p class="placeholder">请输入收到的验证码</p>
              <input type="text" name="code" id="code">
              <div class="line"></div>
              <span class="getCode" type="button">获取验证码</span>
            </div>
            <button class="login-btn" type="button">登录</button>
          </form>
          <a href="##">
            <img :src="require('static/assets/images/login/font-2.png')" alt class="kefu">
          </a>
        </div>
      </div>
    </div>
    <div class="brand-img" ref="brand_img">
      <div class="brand-img-inner">
        <div class="brand-img-box">
          <div class="title-img">
            <div>
              <img :src="require('static/assets/images/login/B2S.png')" alt>
            </div>
            <div>
              <img :src="require('static/assets/images/login/font-3.png')" alt>
              <img :src="require('static/assets/images/login/font-4.png')" alt>
            </div>
          </div>
          <div class="chah">
            <img :src="require('static/assets/images/login/chah.png')" alt>
          </div>
          <div class="imgs" ref="brand_img_box_imgs">
            <img :src="require('static/assets/images/login/01.png')" alt>
            <img :src="require('static/assets/images/login/02.png')" alt>
            <img :src="require('static/assets/images/login/03.png')" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      let win_h = this.$jQuery(window).outerHeight();

      let $login = this.$jQuery(this.$refs.login);
      let login_h = $login.outerHeight();

      $login.css({
        "padding-top": `${(win_h - login_h) / 2}px`,
        "padding-bottom": `${(win_h - login_h) / 2}px`
      });

      let $brand_img_box_img = this.$jQuery(this.$refs.brand_img_box_imgs);
      let $img_s = $brand_img_box_img.find("img");
      for (let i = 0; i < $img_s.length; i++) {
        $img_s.eq(i).load(function() {
          let img_w = Number($img_s.eq(i).width());
          let img_h = Number($img_s.eq(i).height());
          $img_s.eq(i).css({
            width: `${img_w * (90 / 100)}px`,
            height: `${img_h * (90 / 100)}px`
          });
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  background-image: url("../..//assets/images/login/bg.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.login {
  flex: 0 0 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-inner {
    width: 80%;
    min-width: 340px;
    padding-top: 112px;
    padding-bottom: 200px;
    border: 5px solid #e8c17e;
    background-image: url("../../assets/images/login/left-bg.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    display: flex;
    justify-content: center;

    .login-box {
      width: 80%;

      .font-img {
        margin-top: 20px;
        margin-bottom: 90px;
      }

      .form {
        .input-box {
          position: relative;
          height: 52px;

          &:nth-of-type(2) {
            margin-top: 68px;
          }

          .placeholder {
            font-size: 18px;
            color: #9d814f;
          }

          input {
            position: absolute;
            left: 0;
            top: 16px;
            width: 100%;
            height: 18px;
            line-height: 18px;
            background-color: transparent;
            color: #9d814f;
          }

          .line {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-image: url(../../assets/images/login/dashed.png);
            background-repeat: repeat-x;
          }

          .getCode {
            background-color: transparent;
            color: #f6cd84;
            position: absolute;
            top: 8px;
            right: 0;
            cursor: pointer;
            height: 36px;
            line-height: 36px;
            font-size: 18px;
          }
        }

        .login-btn {
          width: 60%;
          height: 60px;
          color: #ffffff;
          border-radius: 2px;
          background-image: url("../../assets/images/login/loginbg.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          margin-top: 78px;
        }
      }

      .kefu {
        margin-top: 28px;
        display: inline-block;
      }
    }
  }
}

.brand-img {
  flex: 0 1 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  .brand-img-inner {
    display: flex;
    justify-content: center;
    align-content: center;

    .brand-img-box {
      .title-img {
        display: flex;
        justify-content: space-around;

        div {
          display: inline-block;

          &:nth-of-type(1) {
            width: 80px;
          }

          &:nth-of-type(2) {
            margin-left: 12px;
            width: 580px;

            img {
              &:nth-of-type(2) {
                margin-top: 10px;
              }
            }
          }
        }
      }

      .chah {
        margin-top: 20px;
        margin-bottom: 26px;
        text-align: center;

        img {
          width: 90%;
        }
      }

      .imgs {
        display: flex;
        justify-content: space-around;

        img {
          display: block;
        }
      }
    }
  }
}
</style>
