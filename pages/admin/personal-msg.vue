<template>
	<view class="personal-page">
		<head-top title="个人信息" uRl="../../pages/admin/admin"></head-top>
		<view class="personal-photo">
			<view class="photo">
				<icon type="" class="iconfont icon-account"></icon>
			</view>
		</view>
		<view class="personal-message">
			<view class="message username">
				用户名： 9527 
			</view>
			<view class="message tel">
				电    话： 13456789087
			</view>
			<view class="message email">
				电子邮箱：452523@163.com	
			</view>
			<view class="message idcade">
				身份: 管理员	
			</view>
			<view class="message id-number">
				工号： 54523413	
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
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
.personal-page{
	font-size: 24upx;
}
.personal-photo{
	background-color: #f0f3f6;
	text-align: center;
	margin-top: 40upx;
	height: 270upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.photo{
	width: 226upx;
	height: 226upx;
	border: 1px solid rgba(187, 187, 187, 1);
	border-radius: 50%;
	text-align: center;
	line-height: 220upx;
	}
.iconfont{
	font-size: 60upx;
	color: rgba(187, 187, 187, 1);
}
.message{
	padding: 32upx 28upx;
	border-bottom: 1px solid rgba(187, 187, 187, 1);
}
button{
	margin-top: 160upx;
	width: 240upx;
}

</style>
