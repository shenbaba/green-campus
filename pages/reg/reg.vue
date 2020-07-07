<template>
	<view class="reg-page">
		<view class="page-name">
			注册账户	
		</view>
		<view class="input-group">
			<view class="input-row border">
				<icon type="" class="iconfont icon-zhanghao title"></icon>
				<input type="text" focus clearable v-model="account" placeholder="请输入用户名"></ionput>
			</view>
			<view class="input-row border">
				<icon type="" class="iconfont icon-email title"></icon>
				<input type="email" focus clearable v-model="email" placeholder="请输入邮箱"></ionput>
			</view>
			<view class="input-row border">
				<icon type="" class="iconfont icon-mima title"></icon>
				<input type="password" displayable v-model="password" placeholder="请输入密码"></input>
				<!-- <icon type="" class="iconfont icon-ai44" id="eyes"></icon> -->
			</view>
			<view class="input-row border">
				<icon type="" class="iconfont icon-mima title"></icon>
				<input type="password" displayable v-model="password1" placeholder="请确认密码"></input>
				<!-- <icon type="" class="iconfont icon-ai44" id="eyes"></icon> -->
			</view>
			<view class="login">
				<navigator url="../login/login-1"><text>已有账号</text></navigator>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary reg" @click="register">注册</button>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		Base64
	} from 'js-base64';
	export default {
		data() {
			return {
				account: '',
				password: '',
				password1: '',
				email: ''
			}
		},
		methods: {
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				let reg2 = /[a-z0-9A-Z]{6,8}/; //长度8-16位数字加字母组合

				if (!reg2.test(this.password)) {
					uni.showToast({
						icon: 'none',
						title: '密码格式错误'
					});
					return;
				} else if (this.password !== this.password1) {
					uni.showToast({
						icon: 'none',
						title: '两次输入密码不一致'
					});
					return;
				} else {
					let json = {
						userName: this.account,
						password: Base64.encode(this.password1),
						email: this.email
					}
					uni.request({
						url: '/api/GreenCampus/user/add',
						method: 'POST',
						data: json,
						header: {
							"content-type": "application/x-www-form-urlencoded",
						},
						success: (res) => {
							if (res.data.success == true) {
								uni.showToast({
									title: '注册成功',
									duration: 1000,
									success: () => {
										setTimeout(function() {
											uni.navigateTo({
												url: '../login/login-1',
											})
										},1000)
									}

								})
							} else {
								uni.showToast({
									title: '该用户已存在',
									duration: 1000,
									icon: 'none'
								})
							}
						},
						fail: () => {

						}
					})
				}
				const data = {
					account: this.account,
					password: this.password,
					Code: this.Code
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
		background-image: linear-gradient(to bottom right, #6699FF, #66CCFF);
		height: 100vh;
	}

	.page-name {
		color: #FFFFFF;
		font-size: 40upx;
		margin-bottom: 40upx;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(255,255,255,0.85);
		margin: 0 auto;
		width: 75%;
		border-radius: 40upx;
		padding: 20upx 40upx;
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
		border: 1upx #CCCCCC solid;
		border-radius: 20upx;
	}

	#eyes {
		margin-left: 30upx;
	}

	.input-row .title {
		width: 42px;
		padding-left: 15px;
		border-right: 1upx #CCCCCC solid;
	}
	.input-row input{
		padding-left: 20upx;
	}
	.login {
		width: 500upx;
		display: flex;
		justify-content: space-between;
		color: #7597b2;
		font-size: 28upx;
		margin: 10upx auto;
	}

	.btn-row {
		margin-top: 10upx;
		width: 500upx;
		display: flex;
		justify-content: space-between;
	}

	.reg {
		background-image: linear-gradient(to bottom right, #6699FF, #66CCFF);
		font-size: 24upx;
		color: #FFFFFF;
		width: 500upx;
		height: 80upx;
		line-height: 80upx;
		margin: 20upx auto;
	}

	.getCode {
		width: 200upx;
		margin-right: 10upx;
	}
</style>
