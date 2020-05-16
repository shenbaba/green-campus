<template>
	<view class="record-page">
		<head-top title="告警记录" uRl="../../../pages/alarm/alarm"></head-top>
		<view class="record-lists">
			<view class="list" v-for="(item, index) in alarm_record" :key="index">
				<view class="record-type">
					<view class="icon">
						<icon type="" class="iconfont icon-zengchang" style="color: rgb(224, 84, 84); font-size: 60upx;margin-right: 10upx;"></icon>
						<text>{{item.alarmType}}</text>
					</view>
					<view class="record-time">
						<text style="color: rgba(224, 84, 84, 1);">{{item.alarmTime}}</text>
					</view>
				</view>
				<view class="record-content">{{item.alarmContent}}</view>
				<view class="record-detail">
					<text>查看详情</text>
					<icon type="" class="iconfont icon-arrow-right"></icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	export default {
		data() {
			return {
				alarm_record:[]
			}
		},
		components:{
			headTop
		},
		methods: {
			
		},
		onShow() {
			uni.request({
				url:'/api/GreenCampus/alarm/allAlarmRecord',
				data:{
					pageNo : 1,
					pageSize: 10
				},
				success: (res) => {
					console.log(res);
					let len = res.data.detail.length;
					for(let i = 0; i<len; i++){
						this.alarm_record.push(res.data.detail[i]);
					}
				},
				fail: () => {
					console.log('error');
				}
			})
		}
	}
</script>

<style>
.record-page{
	background-color: #f0f3f6;
	color: #4e6070;
	font-size: 24upx;
}
.record-lists{
	padding: 0 32upx;
	margin-top: 68upx;
}
.list{
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
.record-content{
	height: 140upx;
	padding: 20upx;
}.record-detail{
	border-top: 1upx #CCCCCC solid;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
}
</style>
