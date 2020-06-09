<template>
	<view class="rapport-page page">
		<head-top title="报表查询" :bool="true" uRl="../../../pages/query/query-data"></head-top>
		<calen-dar></calen-dar>
		<view class="query">
			<text>查询方案:</text>
			<input type="text" placeholder="" style="font-size: 24upx;" v-model="userid"/>
			<button @touchend="chose">查询</button>
		</view>
		<view class="query-lists">
			<ti-ps msg="报表列表"></ti-ps>
			<view  v-for="(item, index) in list" class="list"  :key="index">
				<text>序号：{{item.userId}}</text>
				<text>创建者：{{item.userName}}</text>
				<text>生成时间：{{item.phoneNumber}}</text>
				<text>报表时间：{{item.email}}</text>
				<text>报表名称：用能日报</text>
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
		methods: {
			chose(){
				this.list = [];
				uni.request({
					url:'/api/GreenCampus/user/one',
					data:{
						userId:this.userid	
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
			}
		},
		onShow() {
			uni.request({
				url:'/api/GreenCampus/user/all',
				data:{
					pageNo: 1,
					pageSize :10
				},
				success:(res)=>{
					
					this.list = res.data.detail;
				},
				fail: () => {
					this.tips="网络错误，小程序端请检查合法域名";
				}
			})
		}
	}
</script>

<style>
@import url("../../../static/admin.css");

</style>
