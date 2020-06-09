<template>
	<view class="regionCost">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
	
		<view class="year">
			<ti-ps msg="该设备本月能耗"></ti-ps>
			<u-Charts></u-Charts>
		</view>
		<view class="month">
			<ti-ps msg="各设备本月用电对比"></ti-ps>
			<u-pie></u-pie>
		</view>
		<view class="days">
			<ti-ps msg="各设备用电趋势"></ti-ps>
			<u-line></u-line>
		</view>
	</view>
</template>

<script>
	import tiPs from "@/components/page-tips/tips.vue"
	import uCharts from "@/components/chat/chat-year.vue"
	import uPie from "@/components/chat/pie/regionEnegy-pie.vue"
	import uLine from "@/components/chat/line/regionEnergy-line.vue"
	export default {
		data() {
			return {
				title: '设备能耗',
				array: ['锅炉', '机房', '电灯', '暖气'],
				index: 0,
			}
		},
		components: {
		
			tiPs,
			uCharts,
			uPie,
			uLine,
		},
		methods: {
			/* open() {
				this.$refs.popup.open()
			}, */
			 bindPickerChange: function(e) {
			           
			            this.index = e.target.value
			        },
		}
	}
</script>

<style>
	.regionCost{
		background-color: #f0f3f6;
		padding-top: 120upx;
	}
	.month,.days{
		padding: 20upx 20upx;
		background-color: #FFFFFF;
		margin-top: 20upx;
	}
	.select{
		background-color: #FFFFFF;
		view{
			margin: 20upx auto;
			margin-bottom: 0;
			background-color: #008DFF;
			border-radius: 50upx;
			width: 300upx;
			padding: 10upx 20upx;
			color: #FFFFFF;
			display: flex;
			justify-content: space-around;
			text{
				padding: 4upx 10upx;
			}
		}
		.active{
			
			background-color: #FFFFFF;
			color: #008DFF;
			border-radius: 50upx;
		}
	}
</style>
