<template>
	<view class="login">
		<view class="welcome">
			<text class="green">绿色校园能耗管理系统</text>
			<text>欢迎登录</text>
		</view>
		<view class="login-page">
			<view class="input-group">
				<view class="input-row border">
					<icon class="iconfont icon-zhanghao title" type="#000000"></icon>
					<input  type="text" clearable focus v-model="account" placeholder="请输入账号"></input>
				</view>
				<view class="input-row">
					<icon type="#000000" class="iconfont icon-mima title"></icon>
					<input type="password" displayable v-model="password" placeholder="请输入密码"></input>
				</view>
				
				<view class="input-row">
					<icon type="" class="iconfont icon-yanzhengma title"></icon>
					<input type="text" placeholder="请输入验证码" v-model="imgCode" placeholder-class="placeholder" />
					<button type="button" @click="createCode" class="code">{{checkCode}}</button>
				</view>
					
				
			</view>
			<view class="btn-row">
				<button class="primary"  @click="sendMessage()">登录</button>
				<view class="reg">
					<navigator url="./findPassword"><text>忘记密码？</text></navigator>
					<navigator url="../reg/reg"><text>创建新账户？注册</text></navigator>
				</view>
				
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
				imgCode: "", //图片验证码
				checkCode: "",
				picLyanzhengma: "",
				number:0,
				
			
			}
		},
		components:{
			
		},
		onShow() {
			var that = this;
			that.createCode();
		},

		methods: {
			//创建图形验证码
			createCode() {
				//先清空验证码的输入
				this.imgCode1 = "";
				this.checkCode = "";
				this.picLyanzhengma = "";
				//验证码的长度  
				var codeLength = 4;
				var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
					'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
				for (var i = 0; i < codeLength; i++) {
				//随机数 
					//取得随机数的索引（0~35）
					var index = Math.floor(Math.random() * 36);
					//根据索引取得随机数加到imgCode上
					this.imgCode1 += random[index];
				}
				//把imgCode值赋给验证码  
				this.checkCode = this.imgCode1;
			},
			sendMessage(){
				let reg1=/^1[3|4|5|7|8][0-9]{9}$/; 
				let reg2=/[a-z0-9A-Z]{6,8}/; //长度6-8位数字加字母组合
				if(this.account == ""){
					uni.showToast({
					    title: '账户名不能为空',
					    duration: 2000,
						icon:'none'
					});
				}else if(this.password == ""){
					uni.showToast({
					    title: '请输入密码',
					    duration: 2000,
						icon:'none'
					});
				}else if(!reg2.test(this.password)){
					uni.showToast({
					    title: '密码为6-8位字母加数字组合',
					    duration: 2000,
						icon:'none'
					});
				}else if(this.imgCode == ""){
					uni.showToast({
					    title: '请输入验证码',
					    duration: 2000,
						icon:'none'
					});
				}else if(this.imgCode !== this.checkCode){
					uni.showToast({
					    title: '验证码错误',
					    duration: 2000,
						icon:'none'
					});
				}
				 else{
					sessionStorage.setItem('username',this.account);
					if(sessionStorage.username == this.account){
						this.number++;
					}
					let times = new Date().valueOf();
				
					if(this.number === 3){	
						uni.request({
							url:'/api/GreenCampus/alarm/addUserAlarm',
							data:{
								num : this.number,
								time: times,
								userName : this.account
							},
							method:'POST',
							header:{
								"content-type":"application/x-www-form-urlencoded",
							},
							success: (res) => {
								this.number = 0;
							}
							
						})
					}
					let json ={username : this.account,password : Base64.encode(this.password)};
					uni.request({
						url:'/api/login',
						method:'POST',
						header:{
							"content-type":"application/x-www-form-urlencoded",
						},
						data:json,
						success: (res) => {
							
							if(res.data.success == true){
								uni.showToast({
								    title: '登录成功',
								    duration: 2000,
									success: () => {
										setTimeout(()=>{
											uni.switchTab({
												url:'../index/index'
											});
										},1000)
									}
								});
							}else{
								uni.showToast({
									title:'密码错误',
									duration:1000,
									icon:'none'
								})
							}
						}
					})	
				}
			},
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
	width: 85%;
	border-radius: 10upx;
	padding: 20upx 20upx;
}
.input-row {
		display: flex;
		height: 82upx;
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
	.code{
		width: 120upx;
		height: 62upx;
		text-align: center;
		line-height: 62upx;
		font-size: 24upx;
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
