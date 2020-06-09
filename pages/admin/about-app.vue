<template>
	<view class="about-page">
		<head-top title="设置" uRl="../../pages/admin/admin"></head-top>
		<view class="improve">
			<text>完善个人信息</text>
		</view>
		<view class="change">
			<text>修改个人信息</text>
		</view>
		<view class="change_password">
			<text>修改密码</text>
		</view>
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
	height: calc(100vh - 120upx);
	padding-top: 120upx;
}
.improve,.change,.change_password{
	font-size: 28upx;
	color: #000000;
	background-color: #FFFFFF;
	border-bottom:1upx #C8C7CC solid;
	padding: 30upx;
	
}
.vission{
	margin-top: 20upx;
}
.vission,.update{
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 28upx;
	color: #cccccc;
	padding: 30upx;
	background-color: #FFFFFF;
	border-bottom:1upx #C8C7CC solid;
}
</style>
