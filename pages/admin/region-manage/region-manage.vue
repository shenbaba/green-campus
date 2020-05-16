<template>
	<view class="equipment-manage-page page">
		<head-top title="区域管理" uRl="../../../pages/admin/admin"></head-top>
		<view class="query">
			<text>区域查询:</text>
			<input type="text" value="临潼校区" style="font-size: 24upx;" />
			<button>查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="区域列表"></ti-ps>
			<view class="list" v-for="(item, index) in list" :key="index">
				<text>区域名称：{{item.regionName}}</text>
				<text>区域面积：{{item.area}}</text>
				<text>人数：{{item.people}}</text>
				<text>管理员：{{item.manager}}</text>
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
		components:{
			headTop,
			tiPs,
			calenDar
		},
		methods: {
			
		},
		onShow() {
			
			uni.request({
				url:'/api/GreenCampus/region/all',
				data:{
					pageNo:1,
					pageSize:10
				},
				success: (res) => {
					console.log(res);
					this.list = res.data.detail
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
