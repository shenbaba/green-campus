<template>
	<view class="regionCost">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
		
		<calen-dar></calen-dar>
		 
		<!-- picker选择框 -->
		
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					查询区域:
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
					<icon class="iconfont icon-arrowdown" type=""></icon>
				</view>
				<button>查询</button>
			</view>
		</view>
		<view class="days">
			<ti-ps msg="该区域费用详情"></ti-ps>
			<view class="region-select">
				<text>每月费用</text>
				<text>每日费用</text>
			</view>
			<u-Charts uRl="/api/GreenCampus/free/all" category="free" :d='yearData'></u-Charts>
		</view>
		<view class="all-region">
			<ti-ps msg="各区域费用柱状图"></ti-ps>
			<view class="region-select">
				<text>年费用</text>
				<text>月费用</text>
				<text>日费用</text>
			</view>
			<u-Chart></u-Chart>
		</view>
		<view class="region-rank">
			<ti-ps msg="各区域费用占比"></ti-ps>
			<u-pie></u-pie>
		</view>
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	import uChart from "@/components/chat/chat-1.vue"
	import uCharts from "@/components/chat/chat-year.vue"
	import calenDar from "@/components/calendar.vue"
	import uPie from "@/components/chat/pie/regionEnegy-pie.vue"
	export default {
		data() {
	
			return {
				title: '区域费用',
				array: ['临潼校区生活区', '临潼校区教学区', '雁塔校区生活区', '雁塔校区教学区'],
				index: 0,
				yearData:{
					endTime:1609257600000,
					startTime:1577808000000,
					timeType:'year',
					list:1
				}
			
			}
		},
		components: {
			headTop,
			tiPs,
			uChart,
			uCharts,
			calenDar,
			uPie
		},
		computed: {
			
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		}
	}
</script>

<style>
	.regionCost {
		background-color: #f0f3f6;
	}
	.all-region,
	.days {
		padding: 20upx 20upx;
		background-color: #FFFFFF;
		margin-top: 20upx;
	}
	.region-rank{
		padding: 20upx 20upx;
		background-color: #FFFFFF;
	}
	button{
		background-color: #40B1FF;
		font-size: 24upx;
		color: #FFFFFF;
		width: 120upx;
		height: 60upx;
	}
	.region-select{
		display: flex;
		justify-content:flex-start;
		font-size: 24upx;
		margin-top: 20upx;
	}
	.region-select text{
		background-color: #b2defe;
		padding: 6upx 8upx;
		border-radius: 5upx;
		color: #008dff;
		margin-bottom: 20upx;
		margin-right: 40upx;
	}
</style>
