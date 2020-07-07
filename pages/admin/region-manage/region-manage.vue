<template>
	<view class="equipment-manage-page page">
		<head-top title="区域管理" uRl="../../../pages/admin/admin"></head-top>
		<view class="query">
			<text>查询方式:</text>
			<input type="text" placeholder="输入区域名称" style="font-size: 24upx;" v-model="regioname"/>
			<button @touchend="chooseRegion()">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="主要区域列表"></ti-ps>
			<view class="list" v-for="(item, index) in list" :key="index" @click="child(index)">
				<text>区域名称：{{item.regionName}}</text>
				<text>区域面积：{{item.area}}</text>
				<text>区域人数：{{item.people}}</text>
				<text>管理人员：{{item.manager}}</text>
				<text>管理人员电话：{{item.managerPhoneNumber}}</text>
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
				regioname:''
			}
		},
		components:{
			headTop,
			tiPs,
			calenDar
		},
		methods: {
			chooseRegion(){
				this.list = [];
				uni.request({
					url:'/api/GreenCampus/region/search',
					data:{
						regionName:this.regioname
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
			},
			child(index){
				uni.navigateTo({
					url:`chlid_region?index=${index+1}`
				})
			}
		},
		onShow() {
			
			uni.request({
				url:'/api/GreenCampus/region/main',
				/* data:{
					pageNo:1,
					pageSize:100
				}, */
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
			this.loading = true;
		}
	}
</script>

<style>
@import url("../../../static/admin.css");

</style>
