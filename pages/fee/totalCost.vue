<template>
	<view class="totalCost">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
		<view class="totalCost-content">
			<view class="total">
				<view class="">
					<text>本年总费用</text>
					<text>{{free.yearfree}}元</text>
				</view>
				<view class="">
					<text>本月总费用</text>
					<text>{{free.monthfree}}元</text>
				</view>
				<view class="">
					<text>本日总费用</text>
					<text>{{free.dayfree}}元</text>
				</view>
			</view>
			<view class="summary summary-year">
				<ti-ps msg="本年每月费用"></ti-ps>
				<u-Charts uRl="/api/GreenCampus/free/all" category="free" :d='yearData'></u-Charts>
			</view>
			<view class="summary summary-month">
				<ti-ps msg="本月每日费用"></ti-ps>
				<u-month uRl="/api/GreenCampus/free/all" category="free" :d='monthData'></u-month>
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
				title:'总费用',
				free:{
					yearfree:'1',
					monthfree :'2',
					dayfree :''
				},
				yearData:{
					endTime:1606752000000,
					startTime:1577808000000,
					timeType:'month'
				},
				monthData:{
					endTime:1582819200000,
					startTime:1580486400000,
					timeType:'day'
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
		onShow(){
			let time = new Date();
			let time1 = time.getTime();
			let oneDay = 86400000;
			let time2 = time1-oneDay;
			let startyear = new Date('2020-01-01').getTime();
			let day = new Date().getDay();
			let startmonth = time1-day*oneDay;
			uni.request({
			    url: '/api/GreenCampus/free/all',
				data:{
					  endTime:time1,
					  startTime:time2,
					  timeType:'day'
				},
			    success: (res) => {
			       
					this.free.dayfree = parseInt(res.data.detail[0].free);
			    }
			});
			uni.request({
			    url: '/api/GreenCampus/free/all',
				data:{
					  endTime:time1,
					  startTime:startmonth,
					  timeType:'month'
				},
			    success: (res) => {
			      
					this.free.monthfree = parseInt(res.data.detail[0].free);
			    }
			});
			uni.request({
			    url: '/api/GreenCampus/free/all',
				data:{
					  endTime:time1,
					  startTime:startyear,
					  timeType:'year'
				},
			    success: (res) => {
			       
					this.free.yearfree = parseInt(res.data.detail[0].free);
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
