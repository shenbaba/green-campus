<template>
	<view class="improve_info">
		<headTop title="完善个人信息" uRl="./about-app"></headTop>
		
		<view class="personal_info">
		
			<view class="">
				<text>用户名</text>
				<input type="text" value="" v-model="account.userName" />
			</view>
			<view class="">
				<text>工号</text>
				<input type="text" value="" v-model="account.jobId"/>
			</view>
			<view class="">
				<text>电话</text>
				<input type="text" value=""  v-model="account.phoneNumber"/>
			</view>
			<view class="">
				<text>身份</text>
				<input type="text" value=""  v-model="account.identity" disabled="true"/>
			</view>
			<view class="">
				<text>职位</text>
				<input type="text" value=""  v-model="account.ponsition"/>
			</view>
			<view class="">
				<text>邮箱</text>
				<input type="text" value=""  v-model="account.email"/>
			</view>
		</view>
		<view class="button">
			<button type="primary" @click="updateInfo()">提交</button>
			<button type="default" @click="clear()">清空</button>
		</view>
		
	</view>
</template>

<script>
	import tiPs from "@/components/page-tips/tips.vue"
	export default {
		data() {
			return {
				account: []
			}
		},
		components:{
			tiPs
		},
		onLoad() {
			uni.getStorage({
				key: 'accountInfo',
				success: (res) => {
					this.account = res.data;
				}
			})

		},
		methods: {
			updateInfo() {
				if(this.account.length == 0){
					uni.showToast({
						title:'提交内容不能为空',
						duration:1000,
						icon:'none'
					})
				}else{
					uni.request({
						url: '/api/GreenCampus/user/update',
						method: 'PUT',
						header:{
							"content-type":"application/x-www-form-urlencoded",
						},
						data: this.account,
						success: (res) => {
						
						}
					})
				}
				
			},
			clear(){
				this.account.userName = '';
				this.account.phoneNumber = '';
				this.account.jobId = '';
				this.account.ponsition = '';
				this.account.email = '';
			}
		}
	}
</script>

<style lang="less">
	.improve_info {
		background-color: #F0F3F6;
		height: calc(100vh - 120upx);
		padding-top: 120upx;

		.personal_info {
			margin-top: 20upx;
			padding: 0 20upx;
			font-size: 28upx;
			color: #4e6070;
			background-color: #FFFFFF;
			view {
				padding: 10upx 20upx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1upx #cccccc solid;
				text {
					width: 100upx;
					text-align: justify;
					height: 40upx;
				}
				text:after {
					content: " ";
					display: inline-block;
					width: 100%;
				}
				input {
					padding-left: 30upx;
					margin-left: 40upx;
					height: 80upx;
					width: 500upx;
					border-radius: 40upx;
				}
			}
		}
		.button{
			margin-top: 200upx;
			display: flex;
			button{
				width: 150upx;
				height: 80upx;
				line-height: 80upx;
				font-size: 28upx;
			}
		}
	}
</style>
