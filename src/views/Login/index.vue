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
					<form method="POST" class="form" ref="form">
						<div class="input-box">
							<label for="tel"></label>
							<!--<p class="placeholder">请输入您的手机号</p>-->
							<input type="text" name="tel" id="tel" ref="tel" placeholder="请输入您的手机号">
							<div class="line"></div>
							<Alert :typeString="type" :text="title" ref="tel_alert"></Alert>
						</div>
						<div class="input-box">
							<label for="code"></label>
							<!--<p class="placeholder">请输入收到的验证码</p>-->
							<input type="text" name="code" id="code" ref="code" placeholder="请输入收到的验证码">
							<div class="line"></div>
							<span class="getCode" type="button" @click="getCode" ref="get_code">获取验证码</span>
							<Alert :typeString="type" :text="title" ref="code_alert"></Alert>
						</div>
						<button class="login-btn" type="button" @click="login" ref="login_btn">登录</button>
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
		<loading :fullscreenLoading="isFullscreenLoading" ref="loading"></loading>
	</div>
</template>

<script>
	import {getElementStyle} from "../../assets/js/utils"
	import loading from '@/loading'
	import Alert from '@/alert'
	
	export default {
		name: "HelloWorld",
		data() {
			return {
				redirect: undefined,
				otherQuery: {},
				title: '',
				type: '',
				isFullscreenLoading: false,
				loginForm: {
					username: 'admin',
					password: '123456'
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.init()
			})
		},
		methods: {
			init() {
				// 自动适配login
				let win_h = window.innerHeight
				let login = this.$refs.login
				let login_h = parseInt(getElementStyle(login, 'height'))
				login.style.cssText = `padding-top: ${(win_h - login_h) / 2}px; padding-bottom: ${(win_h - login_h) / 2}px`
				
				// 按比例缩放图片
				let img_box = this.$refs.brand_img_box_imgs
				let img_s = img_box.getElementsByTagName('img')
				for (let i = 0; i < img_s.length; i++) {
					img_s[i].onload = function () {
						let img_w = parseInt(getElementStyle(this, 'width'))
						let img_h = parseInt(getElementStyle(this, 'height'))
						img_s[i].style.cssText = `width: ${img_w * (90 / 100)}px; height: ${img_h * (90 / 100)}px`
					}
				}
			},
			checkUsername() {
				let tel = this.$refs.tel.value
				if (!tel) {
					this.$refs.tel_alert.$el.style.opacity = 1
					this.$refs.tel_alert.alertStatus('error', '手机号不能为空')
					setTimeout(() => {
						this.$refs.tel_alert.$el.style.opacity = 0
					}, 2000)
					return
				}
				return true
			},
			checkPassword() {
				let code = this.$refs.code.value
				if (!code) {
					this.$refs.code_alert.$el.style.opacity = 1
					this.$refs.code_alert.alertStatus('error', '验证码不能为空')
					setTimeout(() => {
						this.$refs.code_alert.$el.style.opacity = 0
					}, 2000)
					return
				}
				return true
			},
			checkUsernameAndPassword() {
				if (this.checkUsername() && this.checkPassword()) {
					return true
				} else {
					return false
				}
			},
			login() {
				this.$nextTick(() => {
					if (this.checkUsernameAndPassword()) {
						this.$refs.loading.openFullScreen()
						this.$store.dispatch("user/login", this.loginForm)
							.then(() => {
								this.$router.push({
									path: this.redirect || '/ranking',
									query: this.otherQuery
								})
								this.$refs.loading.closeFullScreen()
							})
							.catch(() => {
								this.$refs.loading.closeFullScreen()
							})
					}
				})
			},
			getCode() {
				this.$nextTick(() => {
					if (!this.checkPassword()) {
						return
					}
					let get_code = this.$refs.get_code
					let number = 60
					if (!get_code.classList.contains('disabled')) {
						get_code.innerHTML = `${number}秒后重新获取`
						let timer = setInterval(() => {
							number -= 1
							if (number <= 0) {
								clearInterval(timer)
								get_code.innerHTML = `获取验证码`
							}
							get_code.innerHTML = `${number}秒后重新获取`
						}, 1000)
						get_code.style.cssText = 'color: #9d814f;'
						get_code.classList.add('disabled')
					}
				})
			}
		},
		components: {
			loading,
			Alert
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.box {
		background-image: url("../../assets/images/login/bg.png");
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
							bottom: 28px;
							width: 100%;
							height: 18px;
							line-height: 18px;
							background-color: transparent;
							color: #9d814f;
							font-size: 18px;
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
							bottom: 20px;
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
						font-size: 22px;
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
	
	.alert-box {
		position: absolute;
		transition: opacity .5s;
		bottom: -21px;
		width: 100%;
		left: 0;
		opacity: 0;
	}
</style>
