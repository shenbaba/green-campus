<template>
	<view class="page">
		<headTop title="子区域列表" uRl='./region-manage'></headTop>
		<view class="query">
			<text>查询方式:</text>
			<input type="text" placeholder="输入区域名称" style="font-size: 24upx;" v-model="regioname"/>
			<button @touchend="chooseRegion()">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="子区域列表"></ti-ps>
			<view class="list" v-for="(item, index) in list" :key="index">
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
				regioname:'',
				index:''
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
					url:'http://118.178.126.209:8085/GreenCampus/region/search',
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
			}
		},
		onLoad(option){

			this.index = option.index
			
		},
		onShow() {
			
			uni.request({
				url:'http://118.178.126.209:8085/GreenCampus/region/children',
				 data:{
					regionId:this.index
				}, 
				success: (res) => {
					this.list = res.data.detail;
					
				},
				fail: () => {
					_self.tips =  "网络错误，请刷新"
				}
			})
			this.loading = true;
		}
	}
</script>

<style>
@import url("../../../static/admin.css");

</style>
