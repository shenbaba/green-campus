<template>
	<view class="totalCost">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
		<view class="totalCost-content">
			<view class="total">
				<view class="">
					<text>本年总能耗</text>
					<text>{{enery.yearEnery}}kw</text>
				</view>
				<view class="">
					<text>本月总能耗</text>
					<text>{{enery.monthEnery}}kw</text>
				</view>
				<view class="">
					<text>本日总能耗</text>
					<text>{{enery.dayEnery}}kw</text>
				</view>
			</view>
			<view class="summary summary-year">
				<ti-ps msg="本年每月能耗"></ti-ps>
				<u-Charts uRl="/api/GreenCampus/elec/allRegionElecSum" category="enery"></u-Charts>
			</view>
			<view class="summary summary-month">
				<ti-ps msg="本月每日能耗"></ti-ps>
				<u-month uRl="/api/GreenCampus/elec/allRegionElecSum" category="enery"></u-month>
			</view>
		</view>
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	import uCharts from '@/components/chat/chat-year.vue'
	import uMonth from "@/components/chat/chat-month.vue"
	export default {
		data() {
			return {
				title:'总能耗',
				enery:{
					yearEnery:'',
					monthEnery:'',
					dayEnery:''
				}
			}
		},
		components:{
			headTop,
			tiPs,
			uCharts,
			uMonth
		},
		methods: {
			
		},
		onLoad(){
			let time = new Date();
			let time1 = time.getTime();
			let oneDay = 86400000;
			let startDay = time1-oneDay;
			let startyear = new Date('2020-01-01').getTime();
			let day = new Date().getDay();
			let startmonth = time1-day*oneDay
			uni.request({
			    url: '/api/GreenCampus/elec/allRegionElecSum',
				data:{
					  endTime:time1,
					  startTime:startDay,
					  timeType:'day'
				},
			    success: (res) => {
			        console.log(res.data);
					this.enery.dayEnery = parseInt(res.data.detail[0].battery);
			    }
			});
			uni.request({
			    url: '/api/GreenCampus/elec/allRegionElecSum',
				data:{
					  endTime:time1,
					  startTime:startyear,
					  timeType:'year'
				},
			    success: (res) => {
			        console.log(res.data);
					this.enery.yearEnery = parseInt(res.data.detail[0].battery);
			    }
			});
			uni.request({
			    url: '/api/GreenCampus/elec/allRegionElecSum',
				data:{
					  endTime:time1,
					  startTime:startmonth,
					  timeType:'month'
				},
			    success: (res) => {
			        console.log(res.data);
					this.enery.monthEnery = parseInt(res.data.detail[0].battery);
			    }
			});
		}
	}
</script>

<style>
.totalCost{
	background-color: #f0f3f6;
}
.summary{
	margin-top: 20upx;
	padding: 20upx 20upx;
	background-color: #FFFFFF;
	display: inherit;
	width: 750upx;
	box-sizing: border-box;
}
.total{
	display: flex;
	width: 750upx;
	justify-content: space-around;
	align-items: center;
	background-color: #008dff;
	color: #FFFFFF;
	padding: 28upx 20upx;
	box-sizing: border-box;
}
.total view{
	display: flex;
	flex-direction: column;
	align-items: center;
	
	font-size: 30upx;
	line-height: 50upx;
}
.total view:nth-child(2){
	border-left: 2upx #FFFFFF solid;
	border-right: 2upx #FFFFFF solid;
	padding: 0 50upx;
}
</style>
