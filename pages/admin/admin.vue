<template>
	<view class="admin-page">
		<view class="admin-head">
			<view class="setting">
				<view class="blank"></view>
				<text>欢迎您，管理员</text>
				<navigator url="./about-app"><icon type="" class="iconfont icon-huabanfuben"></icon></navigator>
			</view>
			<view class="admin-msg">
				<view class="admin-img"  >
					<image src="../../static/1.png" alt=""></image>
				</view>
				<view class="admin-user">
					<text>{{account[0].userName}}</text>
					<navigator url="./personal-msg"><text>查看个人信息</text></navigator>
				</view>
			</view>
		</view>
		<view class="admin-banner">
			<navigator url="./monthAlarm">
				<view class="alarm">
					<icon class="iconfont icon-xiaoxi" type=""></icon>
					<text>告警</text>
				</view>
			</navigator>
			<navigator url="serve_record/serve_record">
				<view class="message">
					<icon class="iconfont icon-xinxi" type=""></icon>
					<text>服务记录</text>
				</view>
			</navigator>
			
			<view class="attention">
				<icon class="iconfont icon-guanzhu-" type=""></icon>
				<text>关注</text>
			</view>
		</view>
		<view class="admin-content">
			<navigator url="./user-manage/user-manage">
				<view class="manage user-manage">
					<icon type="" class="iconfont icon-yonghuguanli"></icon>
					<text>用户管理</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			
			<navigator url="./region-manage/region-manage">
				<view class="manage region-manage">
					<icon type="" class="iconfont icon-quyuguanli"></icon>
					<text>区域管理</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			
			<navigator url="./equipment-manage/equipment-manage">
				<view class="manage equipment-manage">
					<icon type="" class="iconfont icon-shebeiguanli"></icon>
					<text>设备管理</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			
			<navigator url="./indicator-manage/indicator-manage">
				<view class="manage standard-manage">
					<icon type="" class="iconfont icon-zhibiaoguanli"></icon>
					<text>指标管理</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			
			<navigator url="./work-day/work-day">
				<view class="manage work-manage" style="border: none;">
					<icon type="" class="iconfont icon-gongzuorili"></icon>
					<text>工作日与假期配置</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>			
		</view>
		<view class="question">
			<navigator url="">
				<view class="manage suggest">
					<icon type="" class="iconfont icon-jilumian"></icon>
					<text>意见反馈</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
			<navigator url="">
				<view class="manage useuall_question" >
					<icon type="" class="iconfont icon-changjianwenti"></icon>
					<text>常见问题</text>
					<icon type="" class="iconfont icon-arrow-right" style="float: right;"></icon>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				changeimg: '',
				account:[]
			}
		},
		components:{
			
		},
		onLoad() {
			uni.getStorage({
				key:'accountInfo',
				success: (res) => {
					this.account.push(res.data)
				}
			})
		},
		onShow() {
			this.putAlarm()
		},
		methods: {
			putAlarm(){
				uni.connectSocket({
					url:"ws://118.178.126.209:8085/websocket",
					success(data){
						uni.showToast({
							title: data,
							icon:'none',
						})
					}
				})
			}
		}
	}
</script>

<style>
.admin-page{
	width: 750upx;
	background-color: #f0f3f6;
	overflow: hidden;
}
.admin-head{
	padding: 20upx;
	padding-top: 60upx;
	font-size: 28upx;
	color: #74828f;
	line-height: 20px;
	background-color: #f0f3f6;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0);
}
.blank{
	width: 60upx;
	height: 60upx;
}
.setting{
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
.admin-msg{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.admin-img{
	border-radius:50%;
	width: 150upx;
	height: 150upx;
	line-height: 150upx;
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 1);
	margin-right: 26upx;
}
.admin-img .icon-account{
	font-size: 60upx;
}
image{
	width: 150upx;
	height: 150upx;
}
.admin-user{
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	line-height: 40upx;
}
.admin-user text:nth-child(1){
	font-size: 28upx;
	margin-bottom: 10upx;
	text-align: left;
}
.admin-user text:nth-child(2){
	font-size: 24upx;
	text-align: left;
}
.admin-banner{
	padding: 30upx 60upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5upx 5upx 0 0 ;
	background-color: #FFFFFF;
	position: relative;
	left: 0px;
	top: -10upx;
	border-radius: 20upx 20upx 0 0;
	text-align: center;
	border: 1px solid rgba(255, 255, 255, 0);
}
.alarm,.message,.attention{
	display: flex;
	flex-direction: column;
	font-size: 24upx;
	line-height: 48upx;
}
.alarm .iconfont,.message .iconfont,.attention .iconfont{
	font-size: 50upx;
}
.alarm .iconfont{
	color: #efb336;
}
.message .iconfont{
	color: #7dc5eb;
}
.attention .iconfont{
	color: #F65343;
}
.admin-content{
	background-color: #FFFFFF;
	margin-top: 10upx;
	font-size: 28upx;
	
}
.manage{
	height: 100upx;
	line-height: 100upx;
	border-bottom: 1upx #bbbbbb solid;
	padding:0 30upx;
}
.manage icon{
	margin-right: 20upx;
}
.question{
	margin-top: 20upx;
	font-size: 28upx;
	background-color: #FFFFFF;
}
</style>
	