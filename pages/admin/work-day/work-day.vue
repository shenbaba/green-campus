<template>
	<view class="indicator-manage-page page">
		<head-top title="工作日与假期配置" uRl="../../../pages/admin/admin"></head-top>
		<!-- <calen-dar></calen-dar> -->
		<view class="query">
			<text>指标查询:</text>
			<select name="cars" class="text">
				<option value="">单位假期</option>
				<option value="">工作日</option>
			</select>
			<button class="mini-btn" type="primary" size="mini">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="工作日与假期列表"></ti-ps>
			<view class="list" v-for="(item, index) in list" :key="index">
				<text>开始日期：2020-10-1</text>
				<text>结束日期：2020-10-7</text>
				<text>日期名称：国庆节</text>
				<text>日期类型：单位假期</text>
			</view>

		</view>
		<view class="more" v-show='loading'>
			<text>没有更多了</text>
		</view>
	</view>
</template>

<script>
	import headTop from "@/components/page-head/page-head.vue"
	import tiPs from "@/components/page-tips/tips.vue"
	import calenDar from "@/components/calendar.vue"
	export default {
		data() {
			return {
				list:[],
				loading : false
			}
		},
		components: {
			headTop,
			tiPs,
			calenDar
		},
		methods: {

		},
		onShow() {
			uni.request({
				url:'',
				data:{
					
				},
				success: (res) => {
					
				},
				fail: () => {
					console.log('error');
				}
			})
		}
	}
</script>

<style>
	/* 列表公用样式 */
	@import url("../../../static/admin.css");
	option {
		font-size: 12upx;
	}
</style>
