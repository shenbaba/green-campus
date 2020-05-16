<template>
	<view class="about-page">
		<head-top title="关于" uRl="../../pages/admin/admin"></head-top>
		<view class="vission">
			<text>当前版本</text>
			<text>1.0</text>
		</view>
		<view class="update">
			<text>检查更新</text>
			<icon type="" class="iconfont icon-arrow-right"></icon>
		</view>
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{
				headTop
		},
		methods: {
			
		}
	}
</script>

<style>
.about-page{
	background-color: #f0f3f6;
}
.vission{
	margin-top: 20upx;
}
.vission,.update{
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 24upx;
	color: #cccccc;
	padding: 30upx;
	background-color: #FFFFFF;
	border-bottom:1upx #C8C7CC solid;
}
</style>
