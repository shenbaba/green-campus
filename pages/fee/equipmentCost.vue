<template>
	<view class="regionCost">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
		<!-- 时间选择框 -->
		<calen-dar></calen-dar>
		<!-- picker选择框 -->
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择设备
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
		<view class="year">
			<ti-ps msg="该设备费用详情"></ti-ps>
			<view class="region-select">
				<text>每月费用</text>
				<text>每日费用</text>
			</view>
			<u-Charts uRl="/api/GreenCampus/free/all" category="free" :d='yearData'></u-Charts>
		</view>
		<view class="all-equip">
			<ti-ps msg="各设备费用柱状图"></ti-ps>
			<view class="region-select">
				<text>年费用</text>
				<text>月费用</text>
				<text>日费用</text>
			</view>
			<u-Chart></u-Chart>
		</view>
		<view class="equip-rank">
			<ti-ps msg="各设备费用对比"></ti-ps>
			<u-Charts></u-Charts>
		</view>
	</view>
</template>

<script>
	import headTop from '@/components/page-head/page-head.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	import uChart from "@/components/chat/chat-1.vue"
	import uCharts from "@/components/chat/chat-year.vue"
	import calenDar from "@/components/calendar.vue"
	export default {
		data() {
			return {
				title: '设备费用',
				array: ['锅炉', '机房', '电灯', '暖气'],
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
			calenDar
		},
		methods: {
			/* open() {
				this.$refs.popup.open()
			}, */
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
		}
	}
</script>

<style>
	.regionCost{
		background-color: #f0f3f6;
	}
	.year,.all-equip,.equip-rank{
		background-color: #FFFFFF;
		margin-top: 20upx;
		padding: 20upx 20upx;
	}
	.equip-rank{
		margin-top: 0upx;
	}
	.region-select{
		display: flex;
		justify-content:flex-start;
		font-size: 24upx;
		margin-top: 20upx;
	}
	.region-select text{
		background-color: #C8C7CC;
		padding: 6upx 8upx;
		border-radius: 5upx;
		color: #3F536E;
		margin-bottom: 20upx;
		margin-right: 40upx;
	}
</style>
