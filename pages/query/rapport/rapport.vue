<template>
	<view class="rapport-page page">
		<head-top title="实时表示数" :bool="true" uRl="../../../pages/query/query-data"></head-top>
		<view class="query-lists">
			<ti-ps msg="监控列表列表"></ti-ps>
			<view  v-for="(item, index) in list" class="list"  :key="index">
				<text>测量点名称：{{item.deviceName}}</text>
				<text>能耗：{{item.battery}}</text>
				<text>安装位置：{{item.address}}</text>
				<text>信号名称：{{item.signalName}}</text>
				<text>状态：{{item.state}}</text>
				<text>采集时间：{{item.time}}</text>
				<text>类型：{{item.type}}</text>
				<text>单位：{{item.unit}}</text>
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
				loading : true,
				userid :''
			}
		},
		components:{
			headTop,
			tiPs,
			calenDar
		},
		onShow() {
			this.list= [];
			uni.request({
				url:'http://192.168.1.101:8085/GreenCampus/real/meter',
				success:(res)=>{
					console.log(res);
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
	}
</script>

<style>
@import url("../../../static/admin.css");

</style>
