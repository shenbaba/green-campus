<template>
	<view class="personal-page">
		<head-top title="个人信息" uRl="../../pages/admin/admin"></head-top>
		<view class="personal-photo">
			<text>头像</text>
			<image src="../../static/1.png" mode="widthFix" class="img"></image>
		</view>
		<view class="personal-message">
			<view class="message username">
				<text>用户名</text>
				<text>admin</text> 
			</view>
			<view class="message tel">
				<text>电话</text>
				<text>18691457890</text> 
			</view>
			<view class="message email">
				<text>邮箱</text>
				<text>213124@163.com</text> 	
			</view>
			<view class="message idcade">
				<text>身份</text>
				<text>管理员</text> 	
			</view>
			<view class="message id-number">
				<text>工号</text>
				<text>12</text> 	
			</view>
		</view>
		 <navigator url="../login/login-1"><button type="warn" @click="logout">退出登录</button></navigator>
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
			logout(){
				uni.request({
					url:'/api/logout',
					method:"GET",
					success: (res) => {
						uni.showToast({
							title:'退出登录成功',
							duration:1000
						})
					}
				})
			}
		}
	}
</script>

<style>
.personal-page{
	font-size: 28upx;
	background-color: #F0F3F6;
	height: calc(100vh - 120upx);
	padding-top: 120upx;
}
.personal-photo{
	background-color: #f0f3f6;
	text-align: center;
	margin-top: 10upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32upx 28upx;
	border-bottom: 1px solid rgba(187, 187, 187, 1);
	border-top: 1px solid rgba(187, 187, 187, 1);
}
.img{
	width: 100upx;
	height: 150upx;
	
}
.iconfont{
	font-size: 60upx;
	color: rgba(187, 187, 187, 1);
}
.message{
	padding: 32upx 28upx;
	border-bottom: 1px solid rgba(187, 187, 187, 1);
	display: flex;
	justify-content: space-between;
}
button{
	margin-top: 160upx;
	width: 240upx;
}

</style>
