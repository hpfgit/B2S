<template>
	<table class="table">
		<thead>
		<tr ref="t_h">
			<th v-for="(item, index) in tHeadData" :key="index">
				<span class="sort-action">{{item.name}}</span>
				<img
					v-if="item.sort"
					:src="sort_img_mo_path"
					data-click="0"
					:alt="item.name"
					class="sort-img"
					ref="sort_sales_volume"
				>
			</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="(item, index) in sourctData" :key="index">
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
</template>

<script>
	import {addHandler} from "../../assets/js/utils";
	
	export default {
		name: "index",
		props: {
			tHeadData: {
				type: Array,
				default() {
					return [];
				}
			},
			tBodyData: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				sort_img_mo_path: require("static/assets/images/mo.png"),
				sort_img_up_path: require("static/assets/images/up.png"),
				sort_img_do_path: require("static/assets/images/do.png"),
				sourctData: this.tBodyData
			}
		},
		methods: {
			sortNum(el) {
				let self = this;
				let attr = 'sales_volume';
				let t_h = this.$refs[el];
				let sort_sales_volume = t_h.querySelectorAll('.sort-img');
				console.log(self.sourceData);
				for (let i = 0; i < sort_sales_volume.length; i++) {
					addHandler(sort_sales_volume[i], "click", function () {
						let num = parseInt(this.dataset["click"]);
						console.log(num);
						if (num >= 3) {
							num = 0;
						}
						num += 1;
						this.dataset["click"] = num;
						if (num === 1) {
							this.setAttribute("src", self.sort_img_up_path);
							self.tBodyData = self.tBodyData.sort((a, b) => {
								return b[attr] - a[attr];
							});
						}
						if (num === 2) {
							this.setAttribute("src", self.sort_img_do_path);
							self.tBodyData = self.tBodyData.sort((a, b) => {
								return a[attr] - b[attr];
							});
						}
						if (num === 3) {
							this.setAttribute("src", self.sort_img_mo_path);
							self.tBodyData = self.tBodyData.sort((a, b) => {
								return b[attr] - a[attr];
							});
						}
					});
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.sortNum("t_h");
			});
		},
	}
</script>

<style scoped lang="scss">
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
</style>