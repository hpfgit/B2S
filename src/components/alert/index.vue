<template>
	<div class="alert-box">
		<el-alert
			:title="isText"
			:type="isType"
			:closable="false"
			center
			show-icon>
		</el-alert>
	</div>
</template>

<script>
	export default {
		name: "index",
		props: {
			typeString: {
				type: String,
				default() {
					return 'success'
				}
			},
			text: {
				type: String,
				default() {
					return "success";
				}
			}
		},
		data() {
			return {
				isType: this.typeString,
				isText: this.text
			}
		},
		methods: {
			alertStatus(status, title) {
				this.isType = status
				this.isText = title
			}
		},
		created() {
			console.log(this.isType, this.isText)
		}
	}
</script>

<style scoped lang="scss">
	.alert {
		box-shadow: none;
		padding: 0;
		margin-bottom: 0;
	}
	.el-alert {
		padding: 0;
	}
</style>