<template>
	<view class="record-page">
		<head-top title="告警记录" uRl="./admin"></head-top>
		<view class="alarm_type">
			<text :class="{active:shows == 1}" @click="Show(1)">月告警记录</text>
			<text>|</text>
			<text :class="{active:shows == 2}"  @click="Show(2)">全部告警记录</text>
		</view>
		<view class="record-lists">
			<!-- 按月查询告警记录 -->
			<view class="list" v-for="(item, index) in alarm_month" :key="index" v-if="bool">
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
			
			<!-- 全部告警记录 -->
			<view class="list_all" 
			v-for="(item, index) in alarm_record" :key="index" 
			v-if="!bool"
			@click="info(index)">
				<view class="record-type">
					<view class="icon">
						<icon type="" class="iconfont icon-zengchang" style="color: rgb(224, 84, 84); font-size: 60upx;margin-right: 10upx;"></icon>
						<text>{{item.alarmType}}</text>
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
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	export default {
		data() {
			return {
				alarm_record:[],
				bool:true,
				alarm_month:[],
				shows:1
			}
		},
		components:{
			headTop
		},
		methods: {
			/* 详细信息页 */
			info(index){
				uni.navigateTo({
					url:`alarm_info?index=${index+1}`
				})
			},
			Show(index){
				this.shows = index;
				this.bool = !this.bool
			},
			renderTime(date) {
			  let dateee = new Date(date).toJSON();
			  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
			},
			/* 全部数据 */
			getAllalarm(){
				uni.request({
					url:'/api/GreenCampus/alarm/allAlarmRecord',
					data:{
						pageNo:1,
						pageSize:10
					},
					success: (res) => {
						this.alarm_record = res.data.detail;
						this.alarm_record.forEach((item)=>{
							item.alarmTime = this.renderTime(item.alarmTime);
						})
					},
					fail: () => {
						uni.showLoading({
							title:'网络出小差了!'
						});
						setTimeout(function () {
						    uni.hideLoading();
						}, 4000);
					}
				})
			},
			/* 本月记录 */
			getMonthalarm(){
				let nowTime = new Date().valueOf();
				uni.request({
					url:'/api/GreenCampus/alarm/alarmRecordByTime',
					data:{
						time:nowTime
					},
					success: (res) => {
						this.alarm_month = res.data.detail;
						this.alarm_month.forEach((item)=>{
							item.alarmTime = this.renderTime(item.alarmTime);
						})
					},
					fail: () => {
						uni.showLoading({
							title:'网络出小差了!'
						});
						setTimeout(function () {
						    uni.hideLoading();
						}, 4000);
					}
				})
			}
		},
		onLoad() {
			this.getAllalarm();
			this.getMonthalarm()
		}
	}
</script>

<style lang="less">
.record-page{
	background-color: #f0f3f6;
	color: #4e6070;
	font-size: 24upx;
	padding-top: 120upx;
}
.alarm_type{
	margin-top: 10upx;
	background-color: #FFFFFF;
	padding: 0upx 30upx;
	display: flex;
	justify-content: space-around;
	text{
		padding: 20upx 60upx;
	}
}
.active{
	background-color: #147fd1;
	color: #FFFFFF;
}
.record-lists{
	padding: 0 32upx;
	/* margin-top: 68upx; */
}
.list,.list_all{
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
