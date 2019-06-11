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
			<div class="content">
				<div class="title">
					<img :src="require('static/assets/images/41.png')" alt>
					<span>24h销量排行</span>
					<a href="##" class="pull-right">
						<span>查看更多</span>
						<img :src="require('static/assets/images/more.png')" alt>
					</a>
				</div>
				<Table :tHeadData="tHeadData" v-if="ranking.length" :tBodyData="ranking"></Table>
			</div>
		</div>
	</div>
</template>
<script>
	import Cart from "@/Cart";
	import request from "../../utils/request";
	import Table from '@/table'
	
	export default {
		data() {
			return {
				sort_img_mo_path: require("static/assets/images/mo.png"),
				sort_img_up_path: require("static/assets/images/up.png"),
				sort_img_do_path: require("static/assets/images/do.png"),
				ranking: [],
				tHeadData: [
					{
						name: '名称'
					},
					{
						name: '货号'
					},
					{
						name: '销量',
						sort: true
					},
					{
						name: '涨跌数量',
						sort: true
					},
					{
						name: '涨幅度',
						sort: true
					}
				]
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
		components: {
			Cart,
			Table
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
			margin-right: 20px;
			background-color: #30343d;
			margin-top: 18px;
			margin-bottom: 100px;
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
		}
	}
</style>


