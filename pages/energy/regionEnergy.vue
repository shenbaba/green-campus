<template>
	<view class="regionCost">
		<head-top :title="title" uRl="../../pages/index/index"></head-top>
		<calen-dar></calen-dar>
		<!-- picker选择框 -->
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择区域
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
					<icon class="iconfont icon-arrowdown" type=""></icon>
				</view>
				<button type="primary">查询</button>
			</view>
		</view>
		<view class="year">
			<ti-ps msg="该区域每月能耗"></ti-ps>
			<u-Charts></u-Charts>
		</view>
		<view class="month">
			<ti-ps msg="各区域能耗对比"></ti-ps>
			<u-pie></u-pie>
		</view>
		<view class="days">
			<ti-ps msg="区域用电趋势"></ti-ps>
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
				title: '区域能耗',
				array: ['临潼校区生活区', '临潼校区教学区', '雁塔校区生活区', '雁塔校区教学区'],
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
	.year,.month,.days{
		padding: 20upx 20upx;
		background-color: #FFFFFF;
		margin-top: 20upx;
	}
</style>
