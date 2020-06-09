<template>
	<view class="indicator-manage-page page">
		<head-top title="指标管理" uRl="../../../pages/admin/admin"></head-top>
		<!-- <calen-dar></calen-dar> -->
		<view class="query">
			<text>指标查询:</text>
			<input type="text" value="月指标" style="font-size: 24upx;" placeholder="指标名称" v-model="quotaname"/>
			<button @click="chooseQuo()">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="查询列表"></ti-ps>
			<view class="list"  v-for="(item, index) in list" :key="index">
				<text>指标名称：{{item.quotaName}}</text>
				<text>指标类型：{{item.quotaType}}</text>
				<text>能耗类型：{{item.batteryType}}</text>
				<text>能耗单位：{{item.batteryUnit}}</text>
				<text>实际能耗：{{item.batteryActual}}</text>
				<text>指标限值：{{item.quotaLimit}}</text>
				<text>指标限值类型：{{item.quotaLimitType}}</text>
				<text>指标等级：{{item.quotaDegree}}</text>
				<text>指标时间：{{item.queryTime}}</text>
				<text>是否只是标准：{{item.isStandrad}}</text>
			</view>
		</view>
		<view class="more" v-show='loading'>
			<text>正在加载</text>
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
				loading : true,
				list :[],
				quotaname:''
			}
		},
		components:{
			headTop,
			tiPs,
			calenDar
		},
		methods: {
			chooseQuo(){
				this.list = [];
				uni.request({
					url:'/api/GreenCampus/quota/search',
					data:{
						quotaName:this.quotaname
					},
					success: (res) => {
						
						this.list = res.data.detail;
					},
					fail: () => {
						uni.showToast({
							title:'网络出错'
						})
					}
				})
			}
		},
		onShow(){
			uni.request({
				url:'/api/GreenCampus/quota/allStandradQuota',
				data:{
					pageNo : 1,
					pageSize :100 
				},
				success: (res) => {
					this.list = res.data.detail
				},
				fail: () => {
					_self.tips = '网络错误'
				}
			})
		}
	}
</script>

<style>
@import url("../../../static/admin.css");
</style>
