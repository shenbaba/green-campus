<template>
	<view class="reg-page">
		<view class="page-name">
			注册
		</view>
		<view class="input-group">
			<view class="input-row border">
				<text class="title"><icon type="" class="iconfont icon-zhanghao"></icon></text>
				<input type="text" focus clearable v-model="account" placeholder="请输入手机号"></input>
				<text>获取验证码</text>
			</view>
			<view class="input-row">
				<text class="title"><icon type="" class="iconfont icon-verify"></icon></text>
				<input type="text" clearable v-model="email" placeholder="请输入验证码"></input>
			</view>
			<view class="input-row border">
				<text class="title"><icon type="" class="iconfont icon-mima"></icon></text>
				<input type="password" displayable v-model="password" placeholder="请输入密码"></input>
				<icon type="" class="iconfont icon-ai44" id="eyes"></icon>
			</view>
			<view class="login">
				<navigator url="../login/login-1"><text>已有账号</text></navigator>
				<text>忘记密码?</text>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @click="register1">注册</button>
			</view>
		</view>
		
	</view>
</template>

<script>

	export default {
		data() {
			return {
				account: '',
				password: '',
				email: ''
			}
		},
		methods: {
			register1(){
				uni.request({
					url:'/api/GreenCampus/user/add',
					method:'POST',
					data:{
						userName:'墨菲特',
						password: 123456,
					},
					header:{
						"content-type":"application/x-www-form-urlencoded",
					},
					success: (res) => {
						console.log(res.statusCode)
						
						if(res.statusCode == 200){
							uni.navigateTo({
								url:'../login/login-1'
							})
						}else{
							alert('该用户已存在')
						}
					},
					fail: () => {
						
					}
				})
			},
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					account: this.account,
					password: this.password,
					email: this.email
				}
				
				/* service.addUser(data);
				uni.showToast({
					title: '注册成功'
				});
				uni.navigateBack({
					delta: 1
				}); */
			}
		}
	}
</script>

<style>
	.reg-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #00a8fe;
		height: 100vh;
	}
	.page-name{
		color: #FFFFFF;
		font-size: 40upx;
		margin-bottom: 40upx;
	}
    .input-group{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		margin: 0 auto;
		width: 90%;
		border-radius: 10upx;
	}
	.input-row {
		    width: 100%;
			display: flex;
			flex-direction: row;
			position: relative;
			font-size: 28upx;
			line-height: 40px;
			align-items: center;
			margin-top: 20upx;
			border-bottom: 1upx #CCCCCC solid;
			
		}
	#eyes{
		margin-left: 30upx;
	}
	.input-row .title {
		width: 72px;
		padding-left: 15px;
	}
	.login{
		width: 500upx;
		display: flex;
		justify-content: space-between;
		color: #7597b2;
		font-size: 28upx;
		margin: 30upx auto;
	}
	.btn-row {
		margin-top: 20upx;
		width: 500upx;
		display: flex;
		justify-content: space-between;
	}

	button {
		background-color: #40B1FF;
		font-size: 24upx;
		color: #FFFFFF;
		width: 500upx;
		height: 80upx;
		line-height: 80upx;
		margin: 20upx auto;
	}
</style>
