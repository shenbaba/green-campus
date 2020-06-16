<template>
	<view class="findPassword">
		<navigator url="./login-1">
		<view class="title">
			<icon type="" class="iconfont icon-arrow-lift" style="color: #FFFFFF;font-size: 50upx;"></icon>
		</view>
		</navigator>
		
		<view class="email">
			<text >请输入账户</text>
			<input  type="text" clearable focus v-model="account"  placeholder="账户"></input>
			<text >请输入新密码</text>
			<input  type="password" clearable focus v-model="password"  placeholder="密码"></input>	
			<button type="primary" @click="sendEamil()">发送验证邮件</button>
			<view class="" v-if='bool'>
				<text >请输入验证码</text>
				<input  type="text" clearable focus v-model="code"  placeholder="验证码"></input>
				<button type="primary"  @click="confirm()">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { Base64 } from 'js-base64';
	export default {
		data() {
			return {
				account:'',
				password:'',
				email:'',
				code:'',
				list:[],
				bool:false,
				
			}
		},
		methods: {
			sendEamil(){
				let json = {passWord : Base64.encode(this.password),userName:this.account}
				uni.request({
					url:'/api/GreenCampus/user/missPassword',
					data:json,
					method:'POST',
					header:{
						"content-type":"application/x-www-form-urlencoded",
					},
					success: (res) => {
						this.list = res.data.detail;
						this.bool = true;
					},
					fail: () => {
						uni.showToast({
							title:'邮件发送失败'
						})
					}
				})
			},
			confirm(){
				if(this.code == this.list.code){
					uni.showToast({
						title:'修改密码成功',
						duration:1000,
						success() {
							uni.navigateTo({
								url:'./login-1'
							})
						}
					});
				}else{
					uni.showToast({
						title:'验证码错误',
						duration:1000
					})
				}
			}
		}
	}
</script>

<style lang="less">
.findPassword{
	background-color: #00a8fe;
	height: calc(100vh - 120upx);
	padding: 60upx 30upx;
	font-size: 28upx;
	.email{
		margin-top: 60upx;
		margin-left: 20upx;
		color: #ECECEC;
		input{
			margin: 10upx 0;
			height: 80upx;
			padding: 4upx 20upx;
			background-color: #FFFFFF;
			border: none;
			font-size: 24upx;
			border-radius: 4upx;
			color: #555555;
		}
		button{
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			margin-top: 20upx;
		}
	}
}
</style>
