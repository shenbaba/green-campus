<template>
	<view class="indicator-manage-page page">
		<head-top title="工作日与假期配置" uRl="../../../pages/admin/admin"></head-top>
		<!-- <calen-dar></calen-dar> -->
		<view class="query">
			<text>指标查询:</text>
			<input type="text" value="" style="font-size: 24upx;" v-model="workHolidayId"/>
			<button @click="chooseWoek()">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="工作日与假期列表"></ti-ps>
			<view class="list" v-for="(item, index) in list" :key="index">
				<text>开始时间：{{item.startTime}}</text>
				<text>结束时间：{{item.endTime}}</text>
				<text>日期名称：{{item.workHolidayName}}</text>
				<text>是否工作日：{{item.isWork}}</text>
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
				loading : false,
				workHolidayId:''
			}
		},
		components: {
			headTop,
			tiPs,
			calenDar
		},
		methods: {
			chooseWoek(){
				this.list = [];
				uni.request({
					url:'/api/GreenCampus/workHoliday/one',
					data:{
						workHolidayId:this.workHolidayId	
					},
					success: (res) => {
						this.list.push(res.data.detail);
						
					},
					fail: () => {
						uni.showToast({
							title:'网络出错'
						})
					}
				})
			},
			getInfo(){
				uni.request({
					url:'/api/GreenCampus/workHoliday/all',
					data:{
						
					},
					success: (res) => {
						this.list = res.data.detail;
					},
					fail: () => {
						uni.showToast({
							title:'网络出错',
							icon:'none'
						})
					}
				})
			}
		},
		onShow() {
			this.getInfo()
		},
		//下拉刷新
		onPullDownRefresh() {
			this.getInfo();
			setTimeout(function () {
				//停止刷新
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>
	/* 列表公用样式 */
	@import url("../../../static/admin.css");
	option {
		font-size: 12upx;
	}
	.list{
		display: flex;
		flex-direction: column;
		justify-content: center;
		
	}
	.list text{
		width: 100%;
		min-width: 100%;
		max-width: 100%;
	}
</style>
