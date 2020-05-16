<template>
	<view class="indicator-manage-page page">
		<head-top title="指标管理" uRl="../../../pages/admin/admin"></head-top>
		<calen-dar></calen-dar>
		<view class="query">
			<text>指标查询:</text>
			<input type="text" value="月指标" style="font-size: 24upx;" />
			<button>查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="查询列表"></ti-ps>
			<view class="list">
				<text>指标名称：月用电量</text>
				<text>指标区域：临潼校区</text>
				<text>指标类型：月指标</text>
				<text>指标限值：143414kw</text>
			</view>
			<view class="list">
				<text>指标名称：月用电量</text>
				<text>指标区域：临潼校区</text>
				<text>指标类型：月指标</text>
				<text>指标限值：143414kw</text>
			</view>
			<view class="list">
				<text>指标名称：月用电量</text>
				<text>指标区域：临潼校区</text>
				<text>指标类型：月指标</text>
				<text>指标限值：143414kw</text>
			</view>
			<view class="list">
				<text>指标名称：月用电量</text>
				<text>指标区域：临潼校区</text>
				<text>指标类型：月指标</text>
				<text>指标限值：143414kw</text>
			</view>
			<view class="list">
				<text>指标名称：月用电量</text>
				<text>指标区域：临潼校区</text>
				<text>指标类型：月指标</text>
				<text>指标限值：143414kw</text>
			</view>
			<view class="list">
				<text>指标名称：月用电量</text>
				<text>指标区域：临潼校区</text>
				<text>指标类型：月指标</text>
				<text>指标限值：143414kw</text>
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
				loading : true
			}
		},
		components:{
			headTop,
			tiPs,
			calenDar
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("../../../static/admin.css");
</style>
