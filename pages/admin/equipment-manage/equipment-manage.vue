<template>
	<view class="equipment-manage-page page">
		<head-top title="设备管理" uRl="../../../pages/admin/admin"></head-top>
		<view class="query">
			<text>设备查询:</text>
			<input type="text" value="" style="font-size: 24upx;" placeholder="通过设备名查询" v-model="devicename"/>
			<button @click="chooseEq()">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="设备列表"></ti-ps>
			<view class="list" v-for="(item, index) in list" :key="index">
				<text>设备名称： {{item.deviceName}}</text>
				<text>设备编号：{{item.deviceNumber}}</text>
				<text>所属人：{{item.deviceOwner}}</text>
				<text>设备类型：{{item.deviceType}}</text>
				<text>对应区域号：{{item.deviceRegionId}}</text>
				<!-- <text>对应电表号：{{item.eletricMeterId}}</text> -->
				<text>是否重要设备：{{item.isImportantEquipment}}</text>
				<text>安装时间：{{item.installTime}}</text>
				<text>安装地点：{{item.installAdress}}</text>
				<text>维修电话：{{item.repairPhoneNumber}}</text>
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
	import BetterPull from "@/js_sdk/zzk-1989-BetterPull/common/BetterPull.js"
	export default {
		data() {
			return {
				loading : true,
				list :[],
				devicename:''
			}
		},
		/* mixins:[
			BetterPull({
				getPage(page, done){
					uni.request({
						url:'/api/GreenCampus/device/all',
						data:{
							pageNo : 1,
							pageSize :10 
						},
						success: (res) => {
							this.list = res.data.detail 
							done(res.data.detail);
						},
						fail: () => {
							done([])
						}
					})
				},
				list : 'list',
				page : 'page'
			})
		], */
		components:{
			headTop,
			tiPs,
			calenDar
		},
		methods: {
			chooseEq(){
				this.list = [];
				uni.request({
					url:'/api/GreenCampus/device/search',
					data:{
						name:this.devicename	
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
			 uni.request({
				url:'/api/GreenCampus/device/all',
				data:{
					pageNo : 1,
					pageSize :100 
				},
				success: (res) => {
					this.list = res.data.detail
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
