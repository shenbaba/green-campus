<template>
	<view class="page">
		<headTop title="未读告警" uRl="./index"></headTop>
		<view class="list" v-for="(item, index) in list" :key="index" @click="info(index)">
			<view class="record-type">
				<view class="icon">
					<icon type="" class="iconfont icon-zengchang" style="color: rgb(224, 84, 84); font-size: 60upx;margin-right: 10upx;"></icon>
					<text>{{item.alarmType}}</text>
					<text>{{item.gmtCreate}}</text>
				</view>
				<view class="record-time">
					<text style="color: rgba(224, 84, 84, 1);">{{item.alarmTime}}</text>
				</view>
			</view>
			<view class="record-alarmName">{{item.alarmName}}</view>
			<view class="record-content">{{item.alarmContent}}</view>
			<view class="record-detail">
				<text>查看详情</text>
				<icon type="" class="iconfont icon-arrow-right"></icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			info(index){
				uni.navigateTo({
					url:`isRead_child?index=${index+1}`
				})
			},
			getIsRead(){
				uni.request({
					url:'/api/GreenCampus/alarm/allAlarmRecordByRead',
					data:{
						isread : 0,
						pageNo : 1,
						pageSize:10
					},
					success: (res) => {
						this.list = res.data.detail;
						this.list.forEach((item)=>{
							item.alarmTime = item.alarmTime.split('T')[0]+'  '+item.alarmTime.split('T')[1].split('+')[0];
						})
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
			}
		},
		mounted() {
			this.getIsRead()
		}
	}
</script>

<style lang="less">
.page{
	background-color: #F0F3F6;
	height: calc(100vh -120upx);
	padding-top: 120upx;
	font-size: 28upx;
}
.list,.list_all{
	margin: 0 auto;
	width: 684upx;
	height: 372upx;
	border-radius: 14upx;
	border: 1px solid rgba(187, 187, 187, 1);
	margin-top: 30upx;
	background-color: #FFFFFF;
}
.record-type{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 86upx;
	border-bottom: 1upx solid #CCCCCC;
	padding: 10upx 20upx;
	border-radius: 14upx 14upx 0 0 ;
}
.icon{
	display: flex;
	align-items: center;
}
.record-alarmName{
	padding: 20upx 10upx;
}
.record-content{
	padding: 20upx;
	overflow:hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}.record-detail{
	border-top: 1upx #CCCCCC solid;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
}
</style>
