<template>
	<view class="regionCost">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
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
					<icon class="iconfont icon-arrowdown"></icon>
				</view>
				<button type="primary">查询</button>
			</view>
		</view>
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
	import headTop from '@/components/page-head/page-head.vue'
	import tiPs from "@/components/page-tips/tips.vue"
	import uCharts from "@/components/chat/chat-year.vue"
	import uPie from "@/components/chat/pie/regionEnegy-pie.vue"
	import uLine from "@/components/chat/line/regionEnergy-line.vue"
	import calenDar from "@/components/calendar.vue"
	export default {
		data() {
			return {
				title: '设备能耗',
				array: ['锅炉', '机房', '电灯', '暖气'],
				index: 0,
			}
		},
		components: {
			headTop,
			tiPs,
			uCharts,
			uPie,
			uLine,
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
	.year{
		background-color: #FFFFFF;
		padding: 20upx 20upx;
		}
	.month,.days{
		padding: 20upx 20upx;
		background-color: #FFFFFF;
		margin-top: 20upx;
	}
</style>
