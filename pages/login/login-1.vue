<template>
	<view class="login">
		<view class="welcome">
			<text class="green">绿色校园能耗管理系统</text>
			<text>欢迎登录</text>
		</view>
		<view class="login-page">
			<view class="input-group">
				<view class="input-row border">
					<text class="title"><icon class="iconfont icon-zhanghao" type="#000000"></icon></text>
					<input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></input>
				</view>
				<view class="input-row">
					<text class="title"><icon type="#000000" class="iconfont icon-mima"></icon></text>
					<input type="password" displayable v-model="password" placeholder="请输入密码"></input>
				</view>
			</view>
			<view class="btn-row">
				<view class="reg">
					<navigator><text>验证码登录</text></navigator>
					<navigator url="../reg/reg"><text>忘记密码？</text></navigator>
				</view>
				
				<button class="primary"  @click="sendMessage">登录</button>
				<view class="new">
					<navigator url="../reg/reg"><text>创建新账户？注册</text></navigator>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account:'',
				password:''
			}
		},
		methods: {
			sendMessage(){
				uni.switchTab({
					url:'../index/index'
				});
				/* let json ={username : 'admin',password : 123456};
				console.log(1);
				uni.request({
					url:'/api/login',
					method:'POST',
					header:{
						"content-type":"application/x-www-form-urlencoded",
					},
					data:json,
					success: (res) => {
						console.log(res)
					}
				}) */
			}
		}
	}
</script>

<style>
.login{
	background-color: #00a8fe;
	padding-top: 200upx;
	height: calc(100vh - 200upx);
}
.welcome{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	margin-bottom: 200upx;
}
.green{
	margin-bottom: 140upx;
}
.login-page{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #FFFFFF;
	margin: 0 auto;
	width: 80%;
	border-radius: 10upx;
	padding-bottom: 20upx;
}
.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 28upx;
		line-height: 40px;
		align-items: center;
		margin-top: 20upx;
		border: 1upx #CCCCCC solid;
		border-radius: 10upx;
	}
	.input-row .title {
		width: 72px;
		padding-left: 15px;
		
	}
	
	.btn-row  .reg{
		width: 500upx;
		display: flex;
		justify-content: space-between;
		color: #7597b2;
		font-size: 28upx;
		margin: 10upx auto;
		
	}
	.new{
		text-align: center;
		width: 500upx;
		color: #7597b2;
		font-size: 28upx;
		margin: 10upx auto;
	}
	button {
		border: 1px #FFFFFF solid;
		background-color:#00a8fe ;
		font-size: 30upx;
		margin: 20upx 10upx;
		color: #FFFFFF;
		width: 500upx;
		height: 80upx;
		line-height: 80upx;
	}
</style>
