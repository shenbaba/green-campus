<template>
	<view class="details">
		<headTop title="诊断详情" uRl="./allDiaBattery"></headTop>
		<view class="detail_title">
			<text>{{list.diaBatteryName}}</text>
		</view>
		<view class="detail_chat">
			<text style="color: #5f6972;font-size: 28upx;margin-left: 20upx;">单位：kw/h</text>
			<u-Charts :inde='index'></u-Charts>
			
		</view>
		<view class="detail_msg">
			<h3>诊断信息</h3>
			<text>异常类型：<text>{{list.diaBatteryType}}</text></text>
			<text>本月平均能耗：<text>{{list.batteryAvgMonth}}kw/h</text> </text>
			<text>今日能耗：<text>{{list.batteryToday}}kw/h</text> </text>
			<text>诊断意见： <text> {{list.opinion}}</text></text>
			<text>意见确认： <text>{{list.opinionRe}}</text></text>
			<text>时间： <text>{{list.time}}</text></text>
		</view>
	</view>
</template>

<script>
	import uCharts from "@/components/chat/Battery_chat.vue"
	export default {
		data() {
			return {
				list:{},
				index:'',
			}
		},
		components:{
			uCharts
		},
		methods: {
			
		},
		onLoad(option){
		
			this.index = option.index
			
		},
		mounted(){
			uni.request({
				url:'/api/GreenCampusDia/oneDiaBattery',
				data:{
					id : this.index
				},
				success: (res) => {
				
					this.list = res.data.detail;
					/* this.column = this.list.diaBatteryContent; */
			
				},
				fail: () => {
					uni.showToast({
						title:'网络出错'
					})
				}
			})
		}
	}
</script>

<style lang="less">
.details{
	background-color: #F0F3F6;
	padding-top: 120upx;
}
.detail_title{
	background-color: #FFFFFF;
	margin-top: 10upx;
	font-size: 30upx;
	padding: 10upx 20upx;
	font-weight: 500;
}
.detail_chat{
	background-color: #FFFFFF;
	
}
.detail_msg{
	padding: 20upx 30upx;
	background-color: #FFFFFF;
	margin-top: 10upx;
	font-size: 28upx;
	display: flex;
	flex-direction: column;
	h3{
		margin: 0 auto;
	}
	text{
		margin-top: 20upx;
		color: #5f6972;
	}
}
</style>
